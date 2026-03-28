import { useState } from 'react';

import { Search, MapPin, Users, Heart } from 'lucide-react';

export default function ChurchFinder() {
  const [faith, setFaith] = useState('');
  const [area, setArea] = useState('');
  const [size, setSize] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!faith || !area || !size) return;
    
    setIsSearching(true);
    setResults([]);

    // Simulate the powerful API lookup delay
    setTimeout(() => {
      setResults([
        { name: "Grace Fellowship " + faith, distance: "2.4 miles", size: size, description: `A vibrant community deeply rooted in authentic ${faith} worship and scriptural truth.` },
        { name: "The Cross at " + area, distance: "5.1 miles", size: "Intimate", description: "Focused on intense discipleship and building an organic, tightly-knit family." },
        { name: "Sacrifice Assembly", distance: "8.0 miles", size: "Large", description: "Powerful worship services with expansive outreach programs." },
        { name: "Peace of Mind Chapel", distance: "11.2 miles", size: "Mid-size", description: "A sanctuary dedicated to profound peace in your local area." },
        { name: "Living Water " + area, distance: "14.5 miles", size: size, description: "A quiet, highly reflective environment for believers seeking deep truth." }
      ]);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="wood-border" style={{ padding: 'var(--spacing-lg)', backgroundColor: 'var(--color-creme-dark)', borderRadius: '8px' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--color-wood-dark)', marginBottom: '0.5rem' }}>Connect With A Church</h3>
        <p style={{ color: 'var(--color-brown)' }}>Filter by your faith, area, and ideal size to find your next spiritual home.</p>
      </div>

      <form onSubmit={handleSearch} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: 600, color: 'var(--color-wood-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Heart size={16}/> Faith Background</label>
          <select value={faith} onChange={e => setFaith(e.target.value)} required style={{ padding: '0.75rem', borderRadius: '4px', border: '2px solid var(--color-brown-light)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
            <option value="" disabled>Select Denomination...</option>
            <option value="Non-Denominational">Non-Denominational</option>
            <option value="Baptist">Baptist</option>
            <option value="Pentecostal">Pentecostal</option>
            <option value="Reformed">Reformed</option>
            <option value="Any">Any / Undecided</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: 600, color: 'var(--color-wood-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16}/> Your Area</label>
          <input type="text" value={area} onChange={e => setArea(e.target.value)} required placeholder="Zip Code or City" style={{ padding: '0.75rem', borderRadius: '4px', border: '2px solid var(--color-brown-light)', fontFamily: 'var(--font-body)', fontSize: '1rem' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: 600, color: 'var(--color-wood-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={16}/> Ideal Size</label>
          <select value={size} onChange={e => setSize(e.target.value)} required style={{ padding: '0.75rem', borderRadius: '4px', border: '2px solid var(--color-brown-light)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
            <option value="" disabled>Select Size...</option>
            <option value="Intimate (Under 100)">Intimate (Under 100)</option>
            <option value="Mid-size (100 - 500)">Mid-size (100 - 500)</option>
            <option value="Large (500+)">Large (500+)</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button type="submit" disabled={isSearching} className="btn-primary" style={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: isSearching ? 0.7 : 1 }}>
            {isSearching ? 'Searching...' : <><Search size={18} /> Find Churches</>}
          </button>
        </div>
      </form>

      {/* Results Section */}
      {results.length > 0 && (
        <div style={{ marginTop: 'var(--spacing-xl)', borderTop: '2px dashed var(--color-brown)', paddingTop: 'var(--spacing-lg)' }}>
          <h4 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--color-blood)' }}>Top 5 Recommendations near {area}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {results.map((church, idx) => (
              <div key={idx} style={{ background: 'var(--color-creme)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--color-blood)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h5 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-wood-dark)' }}>{church.name}</h5>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-brown)' }}>{church.description}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blood)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14}/> {church.distance}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={14}/> {church.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
