const galleryImages = [
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494508606163-121e88d50a86?auto=format&fit=crop&w=1200&q=80',
]

export default function Gallery() {
  return (
    <main className="page-content">
      <section className="page-hero gallery-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>See luxury living from every angle.</h1>
          <p>Browse our curated gallery of breathtaking spaces and unforgettable moments.</p>
        </div>
      </section>
      <section className="container gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-card" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </section>
    </main>
  )
}
