export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    name: 'GoCare',
    timestamp: new Date().toISOString()
  });
}
