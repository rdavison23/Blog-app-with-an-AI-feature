import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js';
import postsRouter from './routes/posts.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Fashion Blog API is running');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
