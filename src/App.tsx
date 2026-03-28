
import Hero from './components/Hero';
import WoodCard from './components/WoodCard';

function App() {
  return (
    <>
      <header style={{ 
        padding: 'var(--spacing-md) var(--spacing-lg)', 
        backgroundColor: 'var(--color-wood-dark)',
        color: 'var(--color-creme)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid var(--color-blood)'
      }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
          SPREAD GODS GLORY
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>About</a>
          <a href="#connect" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>Connect</a>
          <a href="#events" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>Events</a>
        </nav>
      </header>

      <main>
        <Hero />
        
        <section id="discover" className="enterprise-container py-xl">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>The Path of Sacrifice</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-brown-light)' }}>
              Join us in spreading the unmatched glory of God. Experience the truth where suffering 
              transforms into absolute peace. The old wood cross wasn't an end—it was the beginning.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            alignItems: 'start'
          }}>
            <WoodCard title="Our Mission">
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                To reach millions with the unadulterated message of the cross. Through our powerful 
                community events and truth-driven content, we provide peace of mind in a turbulent world.
              </p>
              <a href="#" style={{ color: 'var(--color-blood)', fontWeight: 600, textDecoration: 'none' }}>Learn more &rarr;</a>
            </WoodCard>

            <WoodCard title="Worship & Truth">
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                Encounter genuine worship rooted in the organic reality of biblical sacrifice. 
                Our services strip away the superficial, connecting you directly to the raw, 
                transformative power of the Holy Spirit.
              </p>
              <a href="#" style={{ color: 'var(--color-blood)', fontWeight: 600, textDecoration: 'none' }}>Join a service &rarr;</a>
            </WoodCard>

            <WoodCard title="Global Reach">
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                Powered by cutting-edge outreach methodologies, our upcoming CRM and dedicated SEO 
                platform ensure the Gospel is hyper-accessible to those desperately seeking answers worldwide.
              </p>
              <a href="#" style={{ color: 'var(--color-blood)', fontWeight: 600, textDecoration: 'none' }}>Partner with us &rarr;</a>
            </WoodCard>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: 'var(--color-wood-dark)',
        color: 'var(--color-creme-dark)',
        padding: 'var(--spacing-xl) 0',
        textAlign: 'center',
        borderTop: '4px solid var(--color-brown)'
      }}>
        <div className="enterprise-container">
          <h2 style={{ color: 'var(--color-creme)', marginBottom: 'var(--spacing-sm)' }}>Spread Gods Glory</h2>
          <p style={{ opacity: 0.7, marginBottom: 'var(--spacing-lg)' }}>Where sacrifice meets peace of mind.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.6, fontSize: '0.875rem' }}>
            <span>© 2026 Spread Gods Glory. All rights reserved.</span>
            <a href="#" style={{ color: 'var(--color-creme)', textDecoration: 'underline' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
