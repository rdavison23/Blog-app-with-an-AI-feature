import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo"> Fashion Problems No One Talks About </h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/new">New Post</Link>
      </nav>
    </header>
  );
}
