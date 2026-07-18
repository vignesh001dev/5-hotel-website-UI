import { Link } from 'react-router-dom'

const rooms = [
  { name: 'Royal Suite', price: '$650/night', description: 'Sumptuous suite with separate lounge and a view of the skyline.' },
  { name: 'Signature Room', price: '$420/night', description: 'Elegant room with luxurious bedding and modern amenities.' },
  { name: 'Deluxe Double', price: '$320/night', description: 'Spacious room with premium bath and balcony.' },
]

export default function Rooms() {
  return (
    <main className="page-content">
      <section className="page-hero rooms-hero">
        <div className="container">
          <p className="eyebrow">Rooms</p>
          <h1>Stay in rooms designed for royal comfort.</h1>
          <p>Choose a suite that reflects your luxury lifestyle and enjoy world-class service.</p>
        </div>
      </section>
      <section className="container card-grid">
        {rooms.map((room) => (
          <article key={room.name} className="room-card-page">
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <div className="room-footer">
              <span>{room.price}</span>
              <Link to="/contact" className="feature-link">Book Now</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
