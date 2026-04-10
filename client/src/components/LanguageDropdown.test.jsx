import { render, screen } from '../test/test-utility';
import userEvent from '@testing-library/user-event';
import LanguageDropdown from './LanguageDropdown';

test('renders all language options', () => {
  render(<LanguageDropdown onChange={() => {}} />);

  expect(screen.getByRole('option', { name: /english/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /amharic/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /spanish/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /french/i })).toBeInTheDocument();
});
