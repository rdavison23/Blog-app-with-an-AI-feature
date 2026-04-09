const API_URL = 'http://localhost:3001';

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
}

export async function createPost(postData) {
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Failed to delete post');
  }
  return res.json();
}

export async function updatePost(id, updatedPost) {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost),
  });

  if (!res.ok) {
    throw new Error('Failed to update post');
  }

  return res.json();
}
