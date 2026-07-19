export default function Spa() {
  return (
    <main className="page-content">
      <section className="page-hero spa-hero">
        <div className="container">
          <p className="eyebrow">Spa & Wellness</p>
          <h1>Relax, rejuvenate, and renew in serene luxury.</h1>
          <p>Our spa offers signature treatments, personalized wellness journeys, and private suites.</p>
        </div>
      </section>
      <section className="container content-block">
        <div className="content-grid">
          <div>
            <h2>Therapeutic treatments</h2>
            <p>Enjoy massages, facials, and holistic therapies designed to restore balance.</p>
          </div>
          <div>
            <h2>Wellness rituals</h2>
            <p>Choose from curated rituals that elevate relaxation and ease the mind.</p>
          </div>
        </div>
      </section>

      <section className="container spa-experience-grid">
        <div className="image-card spa-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Private spa suites</h3></div>
        </div>
        <div className="image-card spa-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Rejuvenating rituals</h3></div>
        </div>
      </section>
    </main>
  )
}
