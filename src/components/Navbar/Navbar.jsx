import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const isLoggedIn = true // teszt
  const isAdmin = false

  return (
    <nav>
      <div className={`nav-inner ${isLoggedIn ? 'logged-in' : ''}`}>
        <button onClick={() => setOpen(!open)}>☰</button>

        <ul style={{ display: open ? 'flex' : '' }}>
          <li>
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            <Link to="/Szolgaltatasok">Szolgáltatások</Link>
          </li>
          <li>
            <Link to="/Munkatarsaink">Munkatársaink</Link>
          </li>
          <li>
            <Link to="/Termekek">Termékek</Link>
          </li>
          <li>
            <Link to="/Rolunk">Rólunk</Link>
          </li>

          {!isLoggedIn && (
            <>
              <li>
                <Link to="/Login">Bejelentkezés</Link>
              </li>
              <li>
                <Link to="/Register">Regisztráció</Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/Profile">Profilom</Link>
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
