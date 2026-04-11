import { expect } from 'vitest';
import { render, screen } from '../test/test-utility';
import Header from './Header';

test('renders the header title', () => {
  render(<Header />);
  expect(
    screen.getByRole('heading', {
      name: /fashion problems no one talks about/i,
    })
  ).toBeInTheDocument();
});

test('links point to correct routes', () => {
  render(<Header />);

  expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
    'href',
    '/'
  );
  expect(screen.getByRole('link', { name: /New Post/i })).toHaveAttribute(
    'href',
    '/new'
  );
});
