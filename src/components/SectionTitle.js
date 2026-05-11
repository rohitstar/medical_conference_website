import React from 'react';
import { useInView } from '../hooks';

export default function SectionTitle({ subtitle, title, light = false }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      textAlign: 'center', marginBottom: 64,
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(28px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
    }}>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 16, color: '#c8962e', letterSpacing: 2, marginBottom: 10 }}>
        {subtitle}
      </p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800,
        color: light ? '#fff' : '#0a1628', lineHeight: 1.15,
      }}>
        {title}
      </h2>
      <div style={{ width: 64, height: 3, background: 'linear-gradient(90deg,#c8962e,#f0c060)', margin: '18px auto 0', borderRadius: 2 }} />
    </div>
  );
}
