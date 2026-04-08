import express from 'express';
import pool from '../db.js';
import { TranslationServiceClient } from '@google-cloud/translate';

const router = express.Router();

// Instantiates a client
const translationClient = new TranslationServiceClient();

const projectId = 'project-6d34de57-0c50-4378-838';
const location = 'global';

async function translateText(text, targetLanguageCode) {
  // Construct requeste
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: targetLanguageCode,
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
    return translation.translatedText;
  }
  return '';
}

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
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM posts WHERE id =$1', [id]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'post not found' });
    }

    const post = result.rows[0];

    // Translate the body to Amharic
    const translatedBody = await translateText(post.body, 'am');

    // Return both original + translated
    res.json({
      ...post,
      translatedBody,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Create a new post
router.post('/', async (req, res) => {
  const { title, body, author, image_url } = req.body;
  if (!title || !body)
    return res.status(400).json({ error: 'title and body are required' });
  try {
    const result = await pool.query(
      'INSERT INTO posts (title, body, author, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, body, author, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Update a new post
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, author } = req.body;

  try {
    const result = await pool.query(
      'UPDATE posts SET title = $1, body = $2, author = $3 WHERE id = $4 RETURNING *',
      [title, body, author, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Delete a post
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted sucessfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
