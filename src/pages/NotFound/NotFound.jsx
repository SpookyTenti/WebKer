import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 – Az oldal nem található</h1>
      <p>A keresett oldal nem létezik vagy eltávolították.</p>
      <Link to="/">Vissza a kezdőlapra</Link>
    </div>
  )
}
