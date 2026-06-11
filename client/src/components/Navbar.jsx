import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Job Portal</h2>

      <div className="nav-links">
        <Link to="/">Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </nav>
  );
}

export default Navbar;