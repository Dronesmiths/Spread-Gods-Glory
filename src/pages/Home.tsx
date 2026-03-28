import Hero from '../components/Hero';
import WoodCard from '../components/WoodCard';
import ChurchFinder from '../components/ChurchFinder';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
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

            <WoodCard title="Follow the Journey">
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                Trace the actual historical movements of Jesus and his disciples across the ancient world. 
                Interactive mapping and timelines.
              </p>
              <Link to="/jesus" style={{ color: 'var(--color-blood)', fontWeight: 600, textDecoration: 'none' }}>View Jesus's Journey &rarr;</Link>
            </WoodCard>
          </div>
        </section>

        <section id="connect" className="pattern-bg" style={{ padding: 'var(--spacing-xl) 0', borderTop: '4px solid var(--color-brown)' }}>
          <div className="pattern-content enterprise-container">
            <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-xl)' }}>
              <ChurchFinder />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
