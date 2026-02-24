// Simple in-memory storage for Vercel
// Note: This resets when the function restarts. For production, use a real database.

const storage = {
  users: [
    {
      id: 'admin1',
      username: 'admin',
      password: 'admin123',
      fullName: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 'user1',
      username: 'user',
      password: 'user123',
      fullName: 'Test User',
      role: 'user',
      createdAt: new Date().toISOString()
    }
  ],
  events: [],
  teams: []
};

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query, body } = req;
  const { type, key } = query;

  try {
    if (method === 'GET') {
      // Get data
      if (type && storage[type]) {
        res.status(200).json({ success: true, data: storage[type] });
      } else {
        res.status(404).json({ success: false, error: 'Type not found' });
      }
    } else if (method === 'POST') {
      // Set/Update data
      if (type && body) {
        storage[type] = body.data;
        res.status(200).json({ success: true, data: storage[type] });
      } else {
        res.status(400).json({ success: false, error: 'Invalid request' });
      }
    } else if (method === 'DELETE') {
      // Clear data
      if (type && storage[type]) {
        storage[type] = [];
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false, error: 'Type not found' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
