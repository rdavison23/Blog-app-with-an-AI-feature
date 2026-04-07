import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../components/services/PostsApi';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      <div className="post-detail-card">
        <img
          src={
            post.image_url ||
            'https://via.placeholder.com/800x400?text=Fashion+Drama'
          }
          alt={post.title}
          className="post-detail-image"
        />

        <div className="post-detail-content">
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-detail-author">By {post.author || 'Unknown'}</p>

          <p className="post-detail-body">{post.body}</p>

          <Link to="/" className="back-link">
            ← Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
