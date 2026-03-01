import { Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout'

// Oldalak
import Home from './pages/Home/Home'
import Szolgaltatasok from './pages/Szolgaltatasok/Szolgaltatasok'
import Munkatarsaink from './pages/Munkatarsaink/Munkatarsaink'
import Termekek from './pages/Termekek/Termekek'
import Rolunk from './pages/Rolunk/Rolunk'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
        <Route path="/munkatarsaink" element={<Munkatarsaink />} />
        <Route path="/termekek" element={<Termekek />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={<div>Admin oldal (később fejlesztendő)</div>}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
