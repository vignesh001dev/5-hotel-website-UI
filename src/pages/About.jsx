export default function About() {
  return (
    <main className="page-content">
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Where elegance meets personalized service.</h1>
          <p>
            Royal Grandeur is a luxury hotel designed for guests who expect nothing but the best.
            Enjoy impeccable service, lavish spaces, and unforgettable experiences.
          </p>
        </div>
      </section>
      <section className="container content-block">
        <div className="content-grid">
          <div>
            <h2>Exceptional ambience</h2>
            <p>
              Every corner of our hotel is crafted with premium materials, refined finishes,
              and a sense of timeless grandeur.
            </p>
          </div>
          <div>
            <h2>Curated experiences</h2>
            <p>
              From private dining to spa retreats, our curated services are tailored for
              discerning travelers.
            </p>
          </div>
        </div>
      </section>

      <section className="container about-image-pair">
        <div className="image-card image-card-large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay">
            <p className="eyebrow">Heritage</p>
            <h3>Grand interiors inspired by royalty.</h3>
          </div>
        </div>
        <div className="image-card image-card-small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay">
            <p className="eyebrow">Crafted Luxury</p>
            <h3>Every detail polished for comfort.</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
