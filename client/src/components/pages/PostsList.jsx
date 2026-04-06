import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/PostsApi';

export default function PostsApi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>Fashion Problems No One Talks About</h1>
      <Link to="/new">Write a New Post</Link>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
