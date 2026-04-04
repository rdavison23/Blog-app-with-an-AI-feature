import express from 'express';
import pool from '..db.js';

const router = express.Router();

//get all posts
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM posts ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//get post by id
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts WHERE ID =$1', [id]);
    if (result.row.length === 0) {
      return res.status(400).json({ error: 'post not found' });
    }
    res.json(result.row[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//create a new post
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, author } = req.body;

  try {
    const result = await pool.query(
      'UPDATE posts SET title + $1, body = $2, author = $3 WHERE ID = $4 RETURNING *'[
        (title, body, author, id)
      ]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'post not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

export default router;
