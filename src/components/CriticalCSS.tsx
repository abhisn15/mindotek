'use client';

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section {
        background: linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fff7ed 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        z-index: 50;
        transition: all 0.3s ease;
      }
      
      .logo {
        font-weight: bold;
        background: linear-gradient(45deg, #dc2626, #b91c1c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .hero-title {
        font-size: clamp(2.5rem, 8vw, 9rem);
        font-weight: bold;
        background: linear-gradient(45deg, #dc2626, #b91c1c, #dc2626);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.1;
        margin-bottom: 1.5rem;
      }
      
      .hero-subtitle {
        font-size: clamp(1.125rem, 4vw, 3rem);
        color: #991b1b;
        margin-bottom: 2rem;
        font-weight: 500;
      }
      
      .hero-description {
        font-size: clamp(1.125rem, 2.5vw, 2rem);
        color: #374151;
        max-width: 64rem;
        margin: 0 auto 3rem;
        font-weight: 600;
        line-height: 1.6;
      }
      
      .hero-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
      }
      
      @media (min-width: 640px) {
        .hero-buttons {
          flex-direction: row;
          gap: 1.5rem;
        }
      }
      
      .btn-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, #dc2626, #b91c1c);
        color: white;
        padding: 1rem 2rem;
        border-radius: 1rem;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;
        min-height: 60px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      
      .btn-primary:hover {
        background: linear-gradient(45deg, #b91c1c, #991b1b);
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.2);
      }
      
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.95);
        color: #dc2626;
        padding: 1rem 2rem;
        border-radius: 1rem;
        font-weight: bold;
        text-decoration: none;
        border: 2px solid #fecaca;
        transition: all 0.3s ease;
        min-height: 60px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      
      .btn-secondary:hover {
        background: white;
        color: #b91c1c;
        border-color: #fca5a5;
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.2);
      }
      
      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Reduce layout shift */
      .hero-section h1 {
        min-height: 2em;
      }
      
      .hero-section p {
        min-height: 1.5em;
      }
      
      /* GPU acceleration for animations */
      .gpu-accelerated {
        transform: translateZ(0);
        will-change: transform;
      }
      
      /* Loading states */
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;

    // Inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    // Load non-critical CSS asynchronously
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = '/globals.css';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    };

    // Load non-critical CSS after initial render
    setTimeout(loadNonCriticalCSS, 100);

    return () => {
      // Cleanup
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}
