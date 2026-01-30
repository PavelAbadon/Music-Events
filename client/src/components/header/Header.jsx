import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { isAuthtenticated } = useContext(UserContext);

    return (
        <header className="site-header">
            <div className="logo">
                <h1>MetalEvents</h1>
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <div className="nav-item dropdown">
                    <span className="dropdown-title">Events</span>

                    <div className="dropdown-menu">
                        <Link to="/events/upcoming">Upcoming Events</Link>
                        <Link to="/events/archive">Concert Archive</Link>
                    </div>
                </div>


                {isAuthtenticated && (
                    <>
                        <Link to="/concerts/create">Create Event</Link>
                        <Link to="/logout">Logout</Link>
                    </>
                )}

                {!isAuthtenticated && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
