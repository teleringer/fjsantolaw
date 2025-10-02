
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply scroll effect to desktop header
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY) {
          setShowHeader(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      // If we're on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Handle hash navigation when component mounts or pathname changes
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Header - Only visible on desktop */}
      <header className={`hidden md:block bg-white border-b border-gray-200 py-2 fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
        showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="https://fjsantolaw.com/" className="cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/91b64cf48f32464c374d8a11390d0128.png" 
                alt="Law Offices of Frank J. Santomauro, L.L.C." 
                className="h-auto"
                style={{width: '510px', height: '153px'}}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:570-342-7787" className="text-blue-900 font-semibold text-2xl hover:text-blue-700 cursor-pointer">
              (570) 342-7787
            </a>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-bold cursor-pointer whitespace-nowrap">
                HOME
              </Link>
              <button 
                onClick={() => scrollToSection('practice-areas')}
                className="text-gray-700 hover:text-blue-900 font-bold cursor-pointer whitespace-nowrap"
              >
                PRACTICE AREAS
              </button>
              <button 
                onClick={() => scrollToSection('service-areas')}
                className="text-gray-700 hover:text-blue-900 font-bold cursor-pointer whitespace-nowrap"
              >
                SERVICE AREAS
              </button>
            </nav>
            <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 cursor-pointer whitespace-nowrap">
              CONTACT US
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Header Spacer - Only for desktop */}
      <div className="hidden md:block" style={{height: '177px'}}></div>

      {/* Mobile Header - Blue background, always visible */}
      <header className="md:hidden bg-gray-900 border-b border-gray-700 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer flex-1">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/0773a37295328f7326f13e3e2ec4e36a.png" 
                alt="Law Offices of Frank J. Santomauro, L.L.C." 
                className="h-16 w-full object-contain"
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex items-center justify-center cursor-pointer ml-4 flex-shrink-0"
            >
              {isMenuOpen ? (
                <i className="ri-close-line text-2xl text-white"></i>
              ) : (
                <i className="ri-menu-line text-2xl text-white"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Full Screen Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 z-[9999] flex flex-col" style={{top: '0', left: '0', right: '0', bottom: '0', width: '100vw', height: '100vh'}}>
            {/* Header in overlay */}
            <div className="px-4 py-3 border-b border-gray-700 flex-shrink-0">
              <div className="flex items-center justify-between">
                <Link href="/" className="cursor-pointer flex-1" onClick={() => setIsMenuOpen(false)}>
                  <img 
                    src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/0773a37295328f7326f13e3e2ec4e36a.png" 
                    alt="Law Offices of Frank J. Santomauro, L.L.C." 
                    className="h-16 w-full object-contain"
                  />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center cursor-pointer ml-4 flex-shrink-0"
                >
                  <i className="ri-close-line text-2xl text-white"></i>
                </button>
              </div>
            </div>
            
            {/* Menu Content */}
            <div className="flex-1 flex flex-col px-6 py-4">
              {/* Phone Button - First, directly below logo */}
              <div className="pb-4 flex-shrink-0">
                <a href="tel:570-342-7787" className="block text-xl font-bold text-white py-4 cursor-pointer bg-blue-600 rounded-lg text-center hover:bg-blue-700 border-2 border-white" onClick={() => setIsMenuOpen(false)}>
                  Call (570) 342-7787
                </a>
              </div>

              {/* Menu Items - Below phone button */}
              <nav className="flex-1 space-y-2">
                <Link href="/" className="block text-lg font-medium text-white py-2 cursor-pointer border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <button 
                  onClick={() => scrollToSection('practice-areas')}
                  className="block text-lg font-medium text-white py-2 cursor-pointer text-left w-full border-b border-gray-700"
                >
                  Practice Areas
                </button>
                <button 
                  onClick={() => scrollToSection('service-areas')}
                  className="block text-lg font-medium text-white py-2 cursor-pointer text-left w-full border-b border-gray-700"
                >
                  Service Areas
                </button>
                <Link href="/contact" className="block text-lg font-medium text-white py-2 cursor-pointer border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/privacy-policy" className="block text-lg font-medium text-white py-2 cursor-pointer border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-lg font-medium text-white py-2 cursor-pointer border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Terms
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Header Spacer */}
      <div className="md:hidden h-[88px]"></div>
    </>
  );
}
