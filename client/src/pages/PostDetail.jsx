import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../components/services/PostsApi';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
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
