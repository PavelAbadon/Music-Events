import { Link } from "react-router";

export default function Header({ user }) {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>MetalEvents</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <a href="#">Events</a>
        <a href="#">Create Event</a>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link>Logout</Link>
        <a>{user ?<p>{user.email}</p> : <p>Hello guest</p>}</a>
      </nav>
    </header>
  );
}
