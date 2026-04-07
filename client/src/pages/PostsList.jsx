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
        <div key={post.id} className="post-card">
          <Link to={`/post/${post.id}`}>
            <img
              src={
                post.image_url ||
                'https://via.placeholder.com/800x400?text=Fashion+Drama'
              }
              alt={post.title}
              className="post-image"
            />

            <h2 className="post-title">{post.title}</h2>
            <p className="post-preview">{post.body.slice(0, 120)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
