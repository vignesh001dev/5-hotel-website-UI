export default function Dining() {
  return (
    <main className="page-content">
      <section className="page-hero dining-hero">
        <div className="container">
          <p className="eyebrow">Dining</p>
          <h1>Experience culinary excellence in every dish.</h1>
          <p>Enjoy fine dining with bespoke menus, premium wines, and elegant atmosphere.</p>
        </div>
      </section>
      <section className="container content-block">
        <div className="content-grid">
          <div>
            <h2>Signature cuisine</h2>
            <p>
              Taste exquisite meals prepared by award-winning chefs using the finest ingredients.
            </p>
          </div>
          <div>
            <h2>Private dining</h2>
            <p>
              Host a special dinner in our private dining rooms with personalized menu options.
            </p>
          </div>
        </div>
      </section>

      <section className="container dining-gallery-grid">
        <div className="gallery-card dining-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Gourmet tasting menus</h3></div>
        </div>
        <div className="gallery-card dining-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Elegant table settings</h3></div>
        </div>
        <div className="gallery-card dining-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555992336-03a23c3e4d76?auto=format&fit=crop&w=1200&q=80)' }}>
          <div className="image-card-overlay"><h3>Signature cocktails</h3></div>
        </div>
      </section>
    </main>
  )
}
