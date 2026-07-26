import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App login flow', () => {
  it('shows the login form initially', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('shows an error for invalid credentials', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/username/i), 'wrong');
    await user.type(screen.getByLabelText(/password/i), 'wrong');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });

  it('logs in successfully with hardcoded credentials', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/username/i), 'admin');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByRole('main', { name: /main-page/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to the dashboard/i)).toBeInTheDocument();
  });
});
