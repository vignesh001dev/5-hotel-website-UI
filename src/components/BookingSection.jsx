import { Link } from 'react-router-dom'

export default function BookingSection() {
  return (
    <section className="booking-section">
      <div className="booking-section-wrapper">
        <div className="booking-card">
          <div className="booking-header">
            <span>BOOK YOUR STAY</span>
            <h2>Reserve a room in seconds</h2>
          </div>
          <div className="booking-grid">
            <label>
              <span className="booking-label">Check In</span>
              <input type="date" />
            </label>
            <label>
              <span className="booking-label">Check Out</span>
              <input type="date" />
            </label>
            <label>
              <span className="booking-label">Guests</span>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
              </select>
            </label>
            <label>
              <span className="booking-label">Rooms</span>
              <select>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </label>
            <Link to="/contact" className="btn primary booking-btn">Search</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
