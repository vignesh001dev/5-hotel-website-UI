export default function Contact() {
  return (
    <main className="page-content">
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Ready to plan your luxury stay?</h1>
          <p>Contact our concierge team and reserve your preferred suite today.</p>
        </div>
      </section>
      <section className="container contact-panel">
        <div className="contact-grid">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Get in touch</h3>
            <input name="name" placeholder="Your name" aria-label="Your name" />
            <input name="email" placeholder="Email address" aria-label="Email address" />
            <textarea name="message" placeholder="How can we help you?" rows="5" />
            <button className="btn primary" type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-card">
              <h4>Location</h4>
              <p>123 Royal Avenue, City Center</p>
            </div>
            <div className="contact-card">
              <h4>Contact</h4>
              <p>Email: hello@royalgrandeur.com<br/>Phone: +1 (555) 123-4567</p>
            </div>

            <div className="contact-counters">
              <div className="counter"><strong>120+</strong><span>Rooms</span></div>
              <div className="counter"><strong>5★</strong><span>Rating</span></div>
              <div className="counter"><strong>24/7</strong><span>Service</span></div>
            </div>

            <div className="map-placeholder">Map placeholder</div>
          </div>
        </div>
      </section>

      <section className="container contact-image-grid">
        <div className="image-card contact-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Concierge excellence</h3></div>
        </div>
        <div className="image-card contact-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Elegant arrival lobby</h3></div>
        </div>
      </section>

      <section className="container contact-marquee">
        <div className="marquee">
          <span>“Stellar service.” — Travel Magazine</span>
          <span>“An oasis of luxury.” — Luxury Guide</span>
          <span>“Unforgettable stay.” — Guest Review</span>
        </div>
      </section>
    </main>
  )
}
