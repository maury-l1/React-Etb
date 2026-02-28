import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-container">
        {/* Botón hamburguesa */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menú */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/perfil" className={isActive('/perfil') ? 'active' : ''}>Perfil</Link></li>
          <li><Link to="/contacto" className={isActive('/contacto') ? 'active' : ''}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;