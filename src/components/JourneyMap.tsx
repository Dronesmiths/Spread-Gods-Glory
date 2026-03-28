import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import type { JourneyMovement } from '../data/profiles';

interface JourneyMapProps {
  movements: JourneyMovement[];
  activeStepIndex: number;
}

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

export default function JourneyMap({ movements, activeStepIndex }: JourneyMapProps) {
  const activeMovement = movements[activeStepIndex] || movements[0];
  const center = activeMovement.coord;
  
  if (!MAPS_API_KEY) {
    return (
      <div className="wood-border" style={{ 
        height: '400px', width: '100%', background: 'var(--color-creme-dark)', 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
        padding: '2rem', textAlign: 'center' 
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Map Placeholder</h3>
        <p>Your timeline coordinates are active: <strong>{activeMovement.location}</strong> ({activeMovement.date})</p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '1rem' }}>
          * To see the actual Google Map, add VITE_GOOGLE_MAPS_API_KEY to your Vercel/Cloudflare environment.
        </p>
      </div>
    );
  }

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '4px solid var(--color-brown)' }}>
      <APIProvider apiKey={MAPS_API_KEY}>
        <Map 
          center={center} 
          zoom={8} 
          mapId="SPREAD_GODS_GLORY_MAP"
          disableDefaultUI={true}
        >
          {movements.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <AdvancedMarker key={step.id} position={step.coord} title={step.location}>
                <Pin 
                  background={isActive ? 'var(--color-blood)' : 'var(--color-brown)'} 
                  borderColor={'var(--color-creme)'} 
                  glyphColor={'var(--color-creme)'} 
                  scale={isActive ? 1.4 : 1.0}
                />
              </AdvancedMarker>
            );
          })}
        </Map>
      </APIProvider>
    </div>
  );
}
