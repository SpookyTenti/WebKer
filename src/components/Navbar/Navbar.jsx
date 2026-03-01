import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Krammer Hidraulika
      </Link>

      <div className="nav-links">
        <Link to="/">Főoldal</Link>
        <Link to="/szolgaltatasok">Szolgáltatások</Link>
        <Link to="/munkatarsaink">Munkatársaink</Link>
        <Link to="/termekek">Termékek</Link>
        <Link to="/rolunk">Rólunk</Link>
        <Link to="/login" className="login-btn">
          Bejelentkezés
        </Link>
        <Link to="/register" className="register-btn">
          Regisztráció
        </Link>
      </div>
    </nav>
  )
}
