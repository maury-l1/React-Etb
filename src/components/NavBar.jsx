import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-brown py-5 flex justify-center">
      <div className="navbar-container w-3/5">
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
              to="/perfil"
              className={`text-amber-50 ${isActive('/perfil') ? 'active' : 'text-amber-500'}`}
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={`text-amber-50 ${isActive('/contacto') ? 'active' : 'text-amber-500'}`}
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