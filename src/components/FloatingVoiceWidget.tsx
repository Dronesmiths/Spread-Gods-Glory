import { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, Square, Loader2, Volume2, X } from 'lucide-react';

// Hardcoded keys as instructed for explicit Vapi connection
const VAPI_PUBLIC_KEY = "74c72495-b876-477b-84cd-3bcff1c23c0d";
const ASSISTANT_ID = "0ec9e559-6f07-4299-82cf-6cbd40b04a9d";

export default function FloatingVoiceWidget() {
  const [vapi, setVapi] = useState<any>(null);
  const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      // Handle Vite ESM/CJS interop wrappers
      const VapiClass = (Vapi as any).default || Vapi;
      const vapiInstance = new VapiClass(VAPI_PUBLIC_KEY);
      setVapi(vapiInstance);

      vapiInstance.on('call-start', () => {
        setCallStatus('active');
        setIsOpen(true);
      });
      
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
    } catch (err) {
      console.error("Critical Vapi Mounting Error:", err);
    }
  }, []);

  const toggleCall = async () => {
    if (callStatus === 'active') {
      vapi?.stop();
      setCallStatus('inactive');
    } else if (callStatus === 'inactive') {
      setCallStatus('loading');
      try {
        await vapi?.start(ASSISTANT_ID);
      } catch (e) {
        console.error("Failed to start Vapi call", e);
        setCallStatus('inactive');
      }
    }
  };

  const ringStyle = callStatus === 'active' 
    ? `0 0 0 ${Math.max(10, volumeLevel * 70)}px rgba(139, 0, 0, 0.4)`
    : '0 10px 20px rgba(0,0,0,0.3)';

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
      
      {/* Optional Info Popup that appears when hovering or active */}
      {(isOpen || callStatus === 'active' || callStatus === 'loading') && (
        <div style={{
          backgroundColor: 'var(--color-creme)',
          border: '3px solid var(--color-brown)',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
          width: '280px',
          position: 'relative',
          animation: 'fadeUp 0.3s ease'
        }}>
          <button 
            onClick={() => setIsOpen(false)} 
            style={{ position: 'absolute', top: '8px', right: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-brown)' }}
          >
            {callStatus === 'inactive' && <X size={16} />}
          </button>
          
          <h4 style={{ color: 'var(--color-blood)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>AI Prayer Guide</h4>
          
          <div style={{ fontSize: '0.9rem', color: 'var(--color-wood-dark)', fontWeight: 500, lineHeight: 1.5 }}>
            {callStatus === 'loading' && <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Loader2 size={16} className="spin" /> Connecting to Pastor...</span>}
            {callStatus === 'active' && <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-blood)'}}><Volume2 size={16} /> Listening & Speaking natively</span>}
            {callStatus === 'inactive' && "Click the microphone below to instantly start a live guided prayer session."}
          </div>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <button 
        onClick={toggleCall}
        onMouseEnter={() => setIsOpen(true)}
        style={{
          width: '75px', height: '75px', borderRadius: '50%', border: 'none',
          backgroundColor: callStatus === 'active' ? 'var(--color-blood)' : 'var(--color-wood-dark)',
          color: 'var(--color-creme)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: ringStyle,
          transition: 'all 0.15s ease',
        }}
        title="Talk to our Live AI Agent"
      >
        {callStatus === 'loading' && <Loader2 size={35} className="spin" color="var(--color-creme)" style={{ animation: 'spin 1s linear infinite' }} />}
        {callStatus === 'active' && <Square size={30} fill="currentColor" />}
        {callStatus === 'inactive' && <Mic size={35} />}
      </button>

    </div>
  );
}
