import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/PostsApi';

export default function NewPostsForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createPost(form);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Write a New Fashion Rant</h1>

      <label>Title (required)</label>
      <input name="title" value={form.title} onChange={handleChange} required />

      <label>Body (required)</label>
      <textarea
        name="body"
        value={form.body}
        onChange={handleChange}
        required
      />

      <label>Author (optional)</label>
      <input name="author" value={form.author} onChange={handleChange} />

      <button type="submit">Post</button>
    </form>
  );
}
