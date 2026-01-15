export default function Header(){
    return(
        <header className="site-header">
        <div className="logo">
          <h1>MetalEvents</h1>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Create Event</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Logout</a>
        </nav>
      </header>
    )
}