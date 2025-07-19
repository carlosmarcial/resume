'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  enhanced?: boolean;
  scanlines?: boolean;
}

export default function GlitchText({ text, className = '', delay = 0, enhanced = false, scanlines = false }: GlitchTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  // Choose the appropriate effect
  let effectClass = 'glitch';
  let styleOverride = {
    color: '#00ff00',
    textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
    fontWeight: 'bold',
    position: 'relative' as const,
    display: 'inline-block' as const,
  };

  if (scanlines) {
    effectClass = 'matrix-scanlines';
    styleOverride = {
      color: '#00ff00',
      textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00',
      fontWeight: 'bold',
      position: 'relative' as const,
      display: 'inline-block' as const,
    };
  } else if (enhanced) {
    effectClass = 'glitch-enhanced';
    styleOverride = {
      color: '#00ff00',
      textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00',
      fontWeight: 'bold',
      position: 'relative' as const,
      display: 'inline-block' as const,
    };
  }

  return (
    <span 
      className={`${effectClass} ${className}`}
      data-text={text}
      style={styleOverride}
    >
      {text}
    </span>
  );
}