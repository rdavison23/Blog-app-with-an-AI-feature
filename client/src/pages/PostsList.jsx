import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../components/services/PostsApi';

export default function PostsList() {
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
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
