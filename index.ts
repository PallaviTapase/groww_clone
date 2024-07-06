import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'groww',
  password: 'your-password',
  port: 5432,
});

app.get('/portfolio', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM portfolio');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
