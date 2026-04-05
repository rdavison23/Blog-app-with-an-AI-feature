const API_URL = 'http://localhost:3001';

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
}

export async function getPosts(id) {
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
