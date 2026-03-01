import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // ideiglenes állapotok
  const isLoggedIn = false // ha be van jelentkezve
  const isAdmin = false // ha admin

  return (
    <nav>
      <div>
        <button onClick={() => setOpen(!open)}>☰</button>

        <ul style={{ display: open ? 'block' : 'none' }}>
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

          {/* Ha nincs bejelentkezve → Login + Regisztráció */}
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

          {/* Ha be van jelentkezve → Profil */}
          {isLoggedIn && (
            <li>
              <Link to="/profil">Profilom</Link>
            </li>
          )}

          {/* Ha admin → Admin fül */}
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
