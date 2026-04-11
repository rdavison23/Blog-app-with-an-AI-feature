import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function AllProviders({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export function customRender(ui, options = {}) {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders, ...options }),
  };
}

export * from '@testing-library/react';
export { customRender as render };
