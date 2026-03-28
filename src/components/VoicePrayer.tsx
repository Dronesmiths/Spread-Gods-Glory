import { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, Square, Loader2, Volume2 } from 'lucide-react';

const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY || "dummy-key";
const ASSISTANT_ID = import.meta.env.VITE_ASSISTANT_ID || "dummy-assistant";

export default function VoicePrayer() {
  const [vapi, setVapi] = useState<any>(null);
  const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');
  const [volumeLevel, setVolumeLevel] = useState(0);

  useEffect(() => {
    // We instantiate Vapi natively
    const vapiInstance = new Vapi(VAPI_PUBLIC_KEY === "dummy-key" ? "" : VAPI_PUBLIC_KEY);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => setCallStatus('active'));
    vapiInstance.on('call-end', () => setCallStatus('inactive'));
    vapiInstance.on('volume-level', (vol: number) => setVolumeLevel(vol));
    vapiInstance.on('error', (e: any) => {
      console.error("Vapi WebRTC Error", e);
      setCallStatus('inactive');
    });

    return () => {
      vapiInstance.stop();
      vapiInstance.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === 'active') {
      vapi?.stop();
      setCallStatus('inactive');
    } else if (callStatus === 'inactive') {
      setCallStatus('loading');
      try {
        if (VAPI_PUBLIC_KEY === "dummy-key") {
          // Simulate the connection for preview mode if keys aren't pushed to env
          setTimeout(() => setCallStatus('active'), 1500);
        } else {
          await vapi?.start(ASSISTANT_ID);
        }
      } catch (e) {
        console.error("Failed to start Vapi call", e);
        setCallStatus('inactive');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="wood-border" style={{ 
        padding: 'var(--spacing-xl)', 
        backgroundColor: 'var(--color-creme)', 
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '800px',
        backgroundImage: 'url(/assets/wood-texture.png)',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover'
      }}>
        <div style={{ backgroundColor: 'rgba(251, 245, 235, 0.95)', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-wood-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Guided Interactive Prayer</h2>
          <p style={{ color: 'var(--color-brown)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Experience the profound peace of a guided prayer session right now. Click the microphone below to securely connect your voice to our AI Pastor for spiritual counseling and prayer perfectly tailored to your journey.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <button 
              onClick={toggleCall}
              style={{
                width: '120px', height: '120px', borderRadius: '50%', border: 'none',
                backgroundColor: callStatus === 'active' ? 'var(--color-blood)' : 'var(--color-wood-dark)',
                color: 'var(--color-creme)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: callStatus === 'active' ? `0 0 ${Math.max(20, volumeLevel * 150)}px var(--color-blood)` : '0 10px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.1s ease',
              }}
            >
              {callStatus === 'loading' && <Loader2 size={45} className="spin" color="var(--color-creme)" style={{ animation: 'spin 1s linear infinite' }} />}
              {callStatus === 'active' && <Square size={40} fill="currentColor" />}
              {callStatus === 'inactive' && <Mic size={50} />}
            </button>
          </div>

          <div style={{ fontWeight: 600, fontSize: '1.1rem', color: callStatus === 'active' ? 'var(--color-blood)' : 'var(--color-brown)' }}>
            {callStatus === 'loading' && "Connecting securely to AI Pastor..."}
            {callStatus === 'active' && <span style={{display:'flex', alignItems:'center', gap:'0.5rem', justifyContent:'center'}}><Volume2 size={20}/> Prayer Session Active</span>}
            {callStatus === 'inactive' && "Click to begin connecting..."}
          </div>
          
          {VAPI_PUBLIC_KEY === "dummy-key" && (
            <p style={{marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-brown-light)'}}>* Wire your VITE_VAPI_PUBLIC_KEY securely to your deployment to activate full WebRTC capability.</p>
          )}
        </div>
      </div>
    </div>
  );
}
