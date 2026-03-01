import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'white', minHeight: '100vh', width: '100%' }}>
        <Outlet />
      </main>
    </>
  )
}
