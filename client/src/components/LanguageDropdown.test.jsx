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

test('updates selected value when user chooses a new language', async () => {
  const user = userEvent.setup();
  render(<LanguageDropdown onChange={() => {}} />);

  const select = screen.getByRole('combobox');

  await user.selectOptions(select, 'es');

  expect(select.value).toBe('es');
});
