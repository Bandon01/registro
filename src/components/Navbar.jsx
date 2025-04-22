import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CompanyLogo</div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
      </div>
    </nav>
  );
}

export default Navbar;