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
    res.status(500).json({ error: 'Failed to fetch posts' });
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
    res.status(500).json({ error: 'Post not found' });
  }
});

//create a new post

export default router;
