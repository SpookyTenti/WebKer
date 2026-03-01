import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul className="nav--list">
        <li className="item">
          <Link to="/">Főoldal</Link>
        </li>
        <li className="item">
          <Link to="/szolgaltatasok">Szolgáltatások</Link>
        </li>
        <li className="item">
          <Link to="/munkatarsaink">Munkatársaink</Link>
        </li>
        <li className="item">
          <Link to="/termekek">Termékek</Link>
        </li>
        <li className="item">
          <Link to="/rolunk">Rólunk</Link>
        </li>
        <li className="item">
          <Link to="/login">Bejelentkezés</Link>
        </li>
        <li className="item">
          <Link to="/register">Regisztráció</Link>
        </li>
      </ul>
    </nav>
  )
}
