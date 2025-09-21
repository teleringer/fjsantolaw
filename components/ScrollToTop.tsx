'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
      
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all duration-300 cursor-pointer ${
        isScrolling ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
      }`}
      aria-label="Scroll to top"
    >
      <i className="ri-arrow-up-line text-xl"></i>
    </button>
  );
}