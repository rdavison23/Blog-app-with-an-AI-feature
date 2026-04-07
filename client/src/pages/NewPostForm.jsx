import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createPost } from '../components/services/PostsApi';
import './NewPostForm.css';

export default function NewPostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
    image_url: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createPost(formData);
    navigate('/');
  }

  return (
    <div className="new-post-container">
      <div className="new-post-card">
        <h1 className="new-post-title">Write a New Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              name="author"
              className="form-input"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              name="image_url"
              className="form-input"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Body</label>
            <textarea
              name="body"
              className="form-textarea"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Publish Post
          </button>
        </form>

        <Link to="/" className="back-link">
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
}
