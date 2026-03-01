import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const isLoggedIn = false
  const isAdmin = false

  return (
    <nav>
      <div className="nav-inner">
        <button onClick={() => setOpen(!open)}>☰</button>

        <ul style={{ display: open ? 'flex' : '' }}>
          <li>
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            <Link to="/szolgaltatasok">Szolgáltatások</Link>
          </li>
          <li>
            <Link to="/munkatarsaink">Munkatársaink</Link>
          </li>
          <li>
            <Link to="/termekek">Termékek</Link>
          </li>
          <li>
            <Link to="/rolunk">Rólunk</Link>
          </li>

          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">Bejelentkezés</Link>
              </li>
              <li>
                <Link to="/register">Regisztráció</Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/profil">Profilom</Link>
            </li>
          )}
          {isLoggedIn && isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
