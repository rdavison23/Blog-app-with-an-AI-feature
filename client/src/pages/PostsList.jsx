import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../components/services/PostsApi';
import './PostsList.css';

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
          <div className="image-wrapper">
            <img
              src={post.image_url || 'example.com and example.org'}
              alt={post.title}
              className="post-image"
            />
            <div className="post-title-overlay">
              <h2>{post.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
