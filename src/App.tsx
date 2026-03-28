import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProfileTemplate from './pages/ProfileTemplate';
import FloatingVoiceWidget from './components/FloatingVoiceWidget';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        padding: 'var(--spacing-md) var(--spacing-lg)', 
        backgroundColor: 'var(--color-wood-dark)',
        color: 'var(--color-creme)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid var(--color-blood)'
      }}>
        <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'inherit', textDecoration: 'none' }}>
          SPREAD GODS GLORY
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>About</Link>
          <a href="#connect" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>Connect</a>
          <Link to="/jesus" style={{ color: 'var(--color-creme)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>The Journey</Link>
        </nav>
      </header>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:personId" element={<ProfileTemplate />} />
        </Routes>
      </div>

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
      
      {/* Global AI Floating Widget */}
      <FloatingVoiceWidget />
    </div>
  );
}

export default App;
