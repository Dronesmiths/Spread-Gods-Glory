

export default function Hero() {
  return (
    <section className="pattern-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="pattern-content enterprise-container text-center" style={{ width: '100%' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
          color: 'var(--color-creme)', 
          textShadow: '0 4px 12px rgba(44, 30, 22, 0.8)',
          marginBottom: 'var(--spacing-md)'
        }}>
          <span className="typewriter-wrapper">
            <span className="typewriter-placeholder">Spread Gods Glory</span>
            <span className="typewriter-animated">Spread Gods Glory</span>
          </span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--color-creme-dark)', 
          fontWeight: 300, 
          letterSpacing: '0.05em',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-lg) auto'
        }}>
          Where sacrifice meets peace of mind.
        </p>
        <a href="#discover" className="btn-primary" style={{ boxShadow: '0 4px 15px rgba(139, 26, 26, 0.4)' }}>
          Discover the Truth
        </a>
      </div>
    </section>
  );
}
