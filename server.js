import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'gocare_medical_secret_key_2026_secure';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- IN-MEMORY & FILE PERSISTENCE ADAPTER ---
// Safe for local development & Vercel serverless environments
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Initial seed accounts
const initialSeedUsers = [
  {
    id: 'GC-USR-1001',
    patientId: 'GC-EHR-8906',
    name: 'Huỳnh Mai',
    email: 'huynhmai8906@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    phone: '0901234567',
    picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    role: 'patient',
    verified: true,
    bloodType: 'O+',
    allergies: 'Không ghi nhận dị ứng',
    createdAt: new Date().toISOString(),
    ehrHistory: [
      {
        id: 'REC-01',
        date: '2026-10-01',
        type: 'Khám định kỳ tổng quát',
        doctor: 'BS. CKII Nguyễn Hồng Hưng',
        diagnosis: 'Chỉ số sinh hiệu ổn định, huyết áp 120/80 mmHg',
        prescriptions: 'Vitamin B complex, Omega 3 EPA/DHA'
      }
    ]
  },
  {
    id: 'GC-USR-1002',
    patientId: 'GC-EHR-9999',
    name: 'Bệnh Nhân Thử Nghiệm',
    email: 'demo@gocare.vn',
    password: bcrypt.hashSync('123456', 10),
    phone: '0988888888',
    picture: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=256&q=80',
    role: 'patient',
    verified: true,
    bloodType: 'A+',
    allergies: 'Dị ứng Penicillin nhẹ',
    createdAt: new Date().toISOString(),
    ehrHistory: []
  }
];

let inMemoryUsers = [...initialSeedUsers];

function loadUsers() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryUsers = parsed;
        return inMemoryUsers;
      }
    }
    // Write seeds if not exists
    fs.writeFileSync(USERS_FILE, JSON.stringify(inMemoryUsers, null, 2), 'utf8');
  } catch (err) {
    console.warn('Filesystem access limited (serverless mode), using in-memory store:', err.message);
  }
  return inMemoryUsers;
}

function saveUsers(users) {
  inMemoryUsers = users;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (err) {
    console.warn('Unable to persist users to disk (serverless mode):', err.message);
  }
}

// Initialize users on boot
loadUsers();

// --- JWT AUTHENTICATION MIDDLEWARE ---
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Yêu cầu token xác thực hợp lệ' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Phiên đăng nhập hết hạn hoặc token không hợp lệ' });
    }
    const users = loadUsers();
    const user = users.find(u => u.id === decoded.id || u.email === decoded.email);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
    }
    req.user = user;
    next();
  });
}

function sanitizeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

// --- API ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    name: 'GoCare Healthcare Platform', 
    timestamp: new Date().toISOString(),
    registeredUsersCount: inMemoryUsers.length
  });
});

// 1. REGISTER (ĐĂNG KÝ)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng điền đầy đủ Họ tên, Email và Mật khẩu.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = loadUsers();

    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return res.status(409).json({ success: false, message: 'Email này đã được sử dụng. Vui lòng đăng nhập hoặc sử dụng email khác.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const newUserId = `GC-USR-${Date.now().toString().slice(-4)}${randomNumber}`;
    const newPatientId = `GC-EHR-${randomNumber}`;

    const newUser = {
      id: newUserId,
      patientId: newPatientId,
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      phone: (phone || '').trim(),
      picture: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}&backgroundColor=d4a373,c58c54`,
      role: 'patient',
      verified: true,
      bloodType: 'Chưa cập nhật',
      allergies: 'Không ghi nhận',
      createdAt: new Date().toISOString(),
      ehrHistory: []
    };

    users.push(newUser);
    saveUsers(users);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      success: true,
      message: 'Đăng ký tài khoản GoCare thành công!',
      token,
      user: sanitizeUser(newUser)
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ khi đăng ký tài khoản.' });
  }
});

// 2. LOGIN (ĐĂNG NHẬP EMAIL & MẬT KHẨU)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập đầy đủ Email và Mật khẩu.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = loadUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Tài khoản Email không tồn tại trên hệ thống.' });
    }

    if (!user.password) {
      return res.status(400).json({ success: false, message: 'Tài khoản này được đăng ký qua Google. Vui lòng bấm Đăng nhập bằng Google.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Mật khẩu không chính xác. Vui lòng thử lại.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công!',
      token,
      user: sanitizeUser(user)
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ khi đăng nhập.' });
  }
});

// 3. GOOGLE SIGN-IN THẬT (GOOGLE OAUTH)
app.post('/api/auth/google', async (req, res) => {
  try {
    const { email, name, picture, googleId } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Thông tin xác thực Google không hợp lệ.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = loadUsers();
    let user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      // Create new user automatically from Google Profile
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      user = {
        id: `GC-USR-G${Date.now().toString().slice(-4)}${randomNumber}`,
        patientId: `GC-EHR-${randomNumber}`,
        name: (name || 'Người dùng Google').trim(),
        email: cleanEmail,
        password: null, // Google Auth
        googleId: googleId || `G-${Date.now()}`,
        phone: '',
        picture: picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || 'G')}`,
        role: 'patient',
        verified: true,
        bloodType: 'Chưa cập nhật',
        allergies: 'Không ghi nhận',
        createdAt: new Date().toISOString(),
        ehrHistory: []
      };
      users.push(user);
    } else {
      // Update picture or google verified state
      if (picture) user.picture = picture;
      if (name && !user.name) user.name = name;
      user.verified = true;
    }

    saveUsers(users);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Đăng nhập Google thành công!',
      token,
      user: sanitizeUser(user)
    });
  } catch (error) {
    console.error('Google Auth error:', error);
    return res.status(500).json({ success: false, message: 'Lỗi xác thực Google.' });
  }
});

// 4. GET CURRENT LOGGED IN USER (/api/auth/me)
app.get('/api/auth/me', authenticateToken, (req, res) => {
  return res.status(200).json({
    success: true,
    user: sanitizeUser(req.user)
  });
});

// 5. UPDATE PATIENT PROFILE
app.put('/api/auth/profile', authenticateToken, (req, res) => {
  try {
    const { name, phone, bloodType, allergies } = req.body;
    const users = loadUsers();
    const index = users.findIndex(u => u.id === req.user.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Người dùng không tồn tại.' });
    }

    if (name) users[index].name = name.trim();
    if (phone !== undefined) users[index].phone = phone.trim();
    if (bloodType !== undefined) users[index].bloodType = bloodType;
    if (allergies !== undefined) users[index].allergies = allergies;

    saveUsers(users);

    return res.status(200).json({
      success: true,
      message: 'Cập nhật hồ sơ bệnh nhân thành công!',
      user: sanitizeUser(users[index])
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi cập nhật hồ sơ.' });
  }
});

// 6. RECORD TRIAGE / KHAI BÁO SỨC KHỎE KHẨN CẤP
app.post('/api/ehr/triage', authenticateToken, (req, res) => {
  try {
    const { painScore, isChestPain, isStrokeSign, symptomNote, status } = req.body;
    const users = loadUsers();
    const index = users.findIndex(u => u.id === req.user.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Người dùng không tồn tại.' });
    }

    const isRedAlert = isChestPain || isStrokeSign || painScore >= 8;
    const newRecord = {
      id: `TRIAGE-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: isRedAlert ? 'BÁO ĐỘNG ĐỎ CẤP CỨU (CODE RED)' : 'Khai báo triệu chứng lâm sàng',
      doctor: isRedAlert ? 'BS. Trực Cấp Cứu 24/7' : 'Điều dưỡng theo dõi',
      diagnosis: `Điểm đau: ${painScore}/10. ${isChestPain ? 'Đau ngực cấp. ' : ''}${isStrokeSign ? 'Dấu hiệu FAST đột quỵ. ' : ''}Ghi chú: ${symptomNote || 'Không có'}`,
      status: isRedAlert ? 'CODE_RED' : 'NORMAL'
    };

    if (!users[index].ehrHistory) users[index].ehrHistory = [];
    users[index].ehrHistory.unshift(newRecord);
    saveUsers(users);

    return res.status(200).json({
      success: true,
      message: isRedAlert ? 'Đã kích hoạt quy trình CODE RED khẩn cấp!' : 'Đã lưu khai báo vào bệnh án điện tử.',
      record: newRecord,
      user: sanitizeUser(users[index])
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi lưu thông tin bệnh án.' });
  }
});

// Static assets serving
app.use(express.static(__dirname));

// SPA Catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Local dev server listen
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GoCare server running on http://0.0.0.0:${PORT}`);
    console.log(`Backend Auth APIs ready at http://0.0.0.0:${PORT}/api/auth`);
  });
}

export default app;
