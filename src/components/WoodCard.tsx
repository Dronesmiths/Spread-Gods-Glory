import React from 'react';

interface WoodCardProps {
  title: string;
  children: React.ReactNode;
}

export default function WoodCard({ title, children }: WoodCardProps) {
  return (
    <div className="wood-border thorn-accent" style={{ padding: 'var(--spacing-lg)' }}>
      <h3 style={{ 
        marginBottom: 'var(--spacing-md)', 
        borderBottom: '1px solid var(--color-brown-light)', 
        paddingBottom: 'var(--spacing-sm)',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {title}
      </h3>
      <div style={{ color: 'var(--color-brown-light)' }}>
        {children}
      </div>
    </div>
  );
}
