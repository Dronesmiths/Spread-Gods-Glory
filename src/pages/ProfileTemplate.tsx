import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { profileData } from '../data/profiles';
import JourneyMap from '../components/JourneyMap';
import WoodCard from '../components/WoodCard';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

export default function ProfileTemplate() {
  const { personId } = useParams();
  const profile = profileData[personId || "jesus"];
  const [activeStep, setActiveStep] = useState(0);

  if (!profile) {
    return <div className="enterprise-container py-xl text-center"><h2>Profile not found.</h2><Link to="/">Return Home</Link></div>;
  }

  const goNext = () => setActiveStep(prev => Math.min(prev + 1, profile.movements.length - 1));
  const goPrev = () => setActiveStep(prev => Math.max(prev - 1, 0));

  const currentMovement = profile.movements[activeStep];

  return (
    <div className="pattern-bg" style={{ minHeight: '100vh', padding: 'var(--spacing-xl) 0' }}>
      <div className="pattern-content enterprise-container">
        
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link to="/" style={{ color: 'var(--color-creme)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Home size={18} /> Back to Home
          </Link>
        </div>

        <div style={{ 
          background: 'var(--color-creme)', 
          borderRadius: '12px', 
          padding: 'var(--spacing-lg)', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          border: `4px solid ${profile.themeColor}`
        }}>
          <header style={{ borderBottom: '2px solid var(--color-brown-light)', paddingBottom: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--color-wood-dark)', marginBottom: '0.5rem' }}>{profile.name}</h1>
            <p style={{ fontSize: '1.25rem', color: profile.themeColor, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{profile.title}</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--color-brown)', maxWidth: '800px' }}>{profile.summary}</p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: 'var(--spacing-lg)' }}>
            {/* Left Column: Timeline Navigation (Child Easy) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ color: 'var(--color-wood-dark)' }}>Historical Journey</h3>
              
              <div className="wood-border thorn-accent" style={{ padding: '1.5rem', background: 'var(--color-creme-dark)' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-blood)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  STEP {activeStep + 1} OF {profile.movements.length}
                </div>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{currentMovement.location}</h2>
                <div style={{ fontWeight: 600, color: 'var(--color-brown)', marginBottom: '1rem' }}>{currentMovement.date}</div>
                <p style={{ lineHeight: 1.6 }}>{currentMovement.description}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button 
                    onClick={goPrev} 
                    disabled={activeStep === 0}
                    style={{ 
                      padding: '0.75rem 1rem', background: activeStep === 0 ? '#ccc' : 'var(--color-wood-dark)', color: '#fff', 
                      border: 'none', borderRadius: '4px', cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                  >
                    <ArrowLeft size={16} /> Previous
                  </button>
                  <button 
                    onClick={goNext} 
                    disabled={activeStep === profile.movements.length - 1}
                    style={{ 
                      padding: '0.75rem 1rem', background: activeStep === profile.movements.length - 1 ? '#ccc' : 'var(--color-blood)', color: '#fff', 
                      border: 'none', borderRadius: '4px', cursor: activeStep === profile.movements.length - 1 ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                  >
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Google Map */}
            <div>
              <JourneyMap movements={profile.movements} activeStepIndex={activeStep} />
            </div>
          </div>

          {/* Highlights / Important Events */}
          {profile.highlights && profile.highlights.length > 0 && (
            <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '2px dashed var(--color-brown-light)' }}>
              <h3 style={{ color: 'var(--color-wood-dark)', marginBottom: 'var(--spacing-lg)', fontSize: '2rem', textAlign: 'center' }}>Key Events In The Journey</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-lg)',
                alignItems: 'stretch'
              }}>
                {profile.highlights.map((highlight, index) => (
                  <WoodCard key={index} title={highlight.title}>
                    <p style={{ lineHeight: 1.6, color: 'var(--color-wood-dark)', fontWeight: 500 }}>{highlight.description}</p>
                  </WoodCard>
                ))}
              </div>
            </div>
          )}

          {/* Relationships & Impact */}
          {profile.relationships && profile.relationships.length > 0 && (
            <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '2px dashed var(--color-brown-light)' }}>
              <h3 style={{ color: 'var(--color-wood-dark)', marginBottom: 'var(--spacing-lg)', fontSize: '2rem', textAlign: 'center' }}>Impact on the Disciples</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--spacing-md)'
              }}>
                {profile.relationships.map((rel, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--color-creme-dark)',
                    borderLeft: `4px solid ${profile.themeColor}`,
                    borderRadius: '4px'
                  }}>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-wood-dark)', fontFamily: 'var(--font-heading)' }}>{rel.name}</h4>
                    <p style={{ color: 'var(--color-brown)' }}>{rel.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
