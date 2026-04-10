import { describe, test, expect, vi } from 'vitest';
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} from './PostsApi';

describe('API tests', () => {
  test('getPosts fetches /posts', async () => {
    const mockData = [{ id: 1, title: 'Hello' }];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    const result = await getPosts();

    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/posts');
    expect(result).toEqual(mockData);
  });
});
