import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-brown p-5">
      <div className="navbar-container">
        <ul className="flex justify-between">
          <li>
            <Link
              to="/"
              className={`text-amber-50 ${isActive('/') ? 'active' : 'text-amber-500'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Perfil"
              className={`text-amber-50 ${isActive('/Perfil') ? 'active' : 'text-amber-500'}`}
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              to="/Contacto"
              className={`text-amber-50 ${isActive('/Contacto') ? 'active' : 'text-amber-500'}`}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar