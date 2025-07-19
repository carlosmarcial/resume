'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '', 
  onComplete 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, isStarted, onComplete]);

  return (
    <div className={`typewriter ${className} text-center break-words`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}