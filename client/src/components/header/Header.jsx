import { Link } from "react-router";

export default function Header(){
    return(
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
          <a href="#">Logout</a>
        </nav>
      </header>
    )
}