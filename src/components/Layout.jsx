import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="hotel-site">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">◆</span>
            Royal Grandeur
          </div>
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/dining">Dining</NavLink>
            <NavLink to="/spa">Spa</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <NavLink to="/contact" className="btn outline">Book Now</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
