import { useState } from 'react';

const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = 'password123';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setIsLoggedIn(false);
      setError('Invalid Username or Password');
    }
  };

  return (
    <div className="app-shell">
      {isLoggedIn ? (
        <main className="main-page" aria-label="main-page">
          <h1>Welcome to the dashboard</h1>
          <p>You have successfully logged in.</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </main>
      ) : (
        <section className="login-card" aria-label="login-card">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password123"
            />

            {error ? <p className="error">{error}</p> : null}

            <button type="submit">Login</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default App;
