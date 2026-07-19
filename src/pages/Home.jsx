import { Link } from 'react-router-dom'
import BookingSection from '../components/BookingSection'

const featureCards = [
  {
    title: 'Luxury Rooms',
    subtitle: 'Unwind in elegantly curated suites with panoramic views.',
    cta: 'Explore Rooms',
    link: '/rooms',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Fine Dining',
    subtitle: 'A culinary journey with gourmet cuisine and signature service.',
    cta: 'Reserve Table',
    link: '/dining',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Spa & Wellness',
    subtitle: 'Renew body and mind with our world-class therapies.',
    cta: 'View Spa',
    link: '/spa',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Events & Weddings',
    subtitle: 'Celebrate life’s milestones in a breathtaking setting.',
    cta: 'Plan Event',
    link: '/gallery',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
]

const rollingRooms = [
  {
    name: 'Royal Suite',
    details: 'King bed, lounge, skyline view',
    rate: '$650/night',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Signature Room',
    details: 'Large bath, premium amenities',
    rate: '$420/night',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Deluxe Double',
    details: 'Balcony, king bed, elegant décor',
    rate: '$320/night',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Classic Twin',
    details: 'Stylish room for two with city view',
    rate: '$280/night',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Garden View Room',
    details: 'Serene garden view with modern amenities',
    rate: '$350/night',
    image: 'https://images.unsplash.com/photo-1520631892601-fca69fc7e158?auto=format&fit=crop&w=900&q=80',
  },
 ]

 export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-container container">
          <div className="hero-copy">
            <p className="eyebrow">5 Star Hotel</p>
            <h1>Experience Luxury Beyond Expectations</h1>
            <p className="hero-text">
              Indulge in world-class hospitality, exquisite comfort, and unforgettable moments
              at our royal destination.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn primary">Discover More</Link>
              <Link to="/contact" className="btn ghost">Check Availability</Link>
            </div>
          </div>
        </div>
      </section>
      <BookingSection />
      <section className="container intro-section">
        <div className="intro-copy">
          <span className="eyebrow">Royal Grandeur</span>
          <h2>The ultimate destination for exceptional stays.</h2>
          <p>
            Our hotel offers magnificent rooms, exclusive dining, rejuvenating spa experiences,
            and elegant event spaces designed to impress.
          </p>

          </div>
          <div className="intro-stats">
         <div>
            <strong>5 Star</strong>
            <span>Hospitality rating</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Luxurious rooms</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Concierge service</span>
          </div>
        </div>
      </section>
      <section className="container feature-section">
        <div className="section-head">
          <span className="eyebrow">Signature Services</span>
          <h2>Discover our most requested experiences</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <div className="feature-bg" style={{ backgroundImage: `url(${card.image})` }} />
              <div className="feature-overlay" />
              <div className="feature-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <Link to={card.link} className="feature-link">{card.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}