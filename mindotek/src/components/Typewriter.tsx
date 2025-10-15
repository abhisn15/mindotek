'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

export function Typewriter({ text, className = '', speed = 100 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  // Blinking cursor animation: if not finished, stick after text; if finished, keep blinking at the end
  return (
    <div className={className}>
      {displayedText}
      <span className="animate-pulse text-red-600">|</span>
    </div>
  );
}

