import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../services/PostsApi';

export default function PostsDetails() {
  const [{ id }] = useParams;
  const [post, setPosts] = useState(null);

  useEffect(() => {
    getPosts(id).then(setPosts);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <i>By {post.author || 'Anonymous'}</i>
      </p>
      <p>{post.body}</p>
    </div>
  );
}
