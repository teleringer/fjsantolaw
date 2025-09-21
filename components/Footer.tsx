
'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

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
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Column 1 - Logo and Attorney Name */}
          <div className="text-center">
            <a href="https://www.fjsantolaw.com" className="cursor-pointer inline-block">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/0773a37295328f7326f13e3e2ec4e36a.png" 
                alt="Law Offices of Frank J. Santomauro, L.L.C." 
                className="h-auto mb-4 mx-auto"
                style={{width: '395px', height: '81px'}}
              />
            </a>
            <p className="text-white font-medium text-center whitespace-nowrap" style={{fontSize: '14pt'}}>Frank J. Santomauro, Esq.</p>
          </div>
          
          {/* Column 2 - Empty */}
          <div></div>

          {/* Column 3 - Address */}
          <div>
            <h3 className="font-semibold text-white mb-2">ADDRESS:</h3>
            <p className="text-gray-300 text-sm">
              142 South Main Avenue<br/>
              Scranton, PA 18504
            </p>
          </div>

          {/* Column 4 - Info Links */}
          <div>
            <h3 className="font-semibold text-white mb-2">INFO:</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p><Link href="/" className="hover:text-white cursor-pointer">Home</Link></p>
              <p><button onClick={() => scrollToSection('practice-areas')} className="hover:text-white cursor-pointer text-left">Practice Areas</button></p>
              <p><button onClick={() => scrollToSection('service-areas')} className="hover:text-white cursor-pointer text-left">Service Areas</button></p>
              <p><Link href="/contact" className="hover:text-white cursor-pointer">Contact</Link></p>
            </div>
          </div>
          
          {/* Column 5 - Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-2">CONTACT:</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Phone: <a href="tel:570-342-7787" className="hover:text-white cursor-pointer">(570) 342-7787</a></p>
              <p>Emergency: <a href="tel:570-362-3902" className="hover:text-white cursor-pointer">(570) 362-3902</a></p>
              <p>Fax: (570) 342-7786</p>
              <p>Email: <a href="mailto:frank@fjsantolaw.com" className="hover:text-white cursor-pointer">frank@fjsantolaw.com</a></p>
              <p>Web: <a href="https://fjsantolaw.com" className="hover:text-white cursor-pointer">https://fjsantolaw.com</a></p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Logo and Attorney Name */}
          <div className="text-center">
            <a href="https://www.fjsantolaw.com" className="cursor-pointer inline-block">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/0773a37295328f7326f13e3e2ec4e36a.png" 
                alt="Law Offices of Frank J. Santomauro, L.L.C." 
                className="h-auto mb-4 mx-auto max-w-full"
                style={{maxWidth: '300px'}}
              />
            </a>
            <p className="text-white font-medium text-center whitespace-nowrap" style={{fontSize: '14pt'}}>Frank J. Santomauro, Esq.</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <h3 className="font-semibold text-white mb-2">ADDRESS:</h3>
            <p className="text-gray-300 text-sm">
              142 South Main Avenue<br/>
              Scranton, PA 18504
            </p>
          </div>

          {/* Info Links */}
          <div className="text-center">
            <h3 className="font-semibold text-white mb-2">INFO:</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p><Link href="/" className="hover:text-white cursor-pointer">Home</Link></p>
              <p><button onClick={() => scrollToSection('practice-areas')} className="hover:text-white cursor-pointer">Practice Areas</button></p>
              <p><button onClick={() => scrollToSection('service-areas')} className="hover:text-white cursor-pointer">Service Areas</button></p>
              <p><Link href="/contact" className="hover:text-white cursor-pointer">Contact</Link></p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold text-white mb-2">CONTACT:</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Phone: <a href="tel:570-342-7787" className="hover:text-white cursor-pointer">(570) 342-7787</a></p>
              <p>Emergency: <a href="tel:570-362-3902" className="hover:text-white cursor-pointer">(570) 362-3902</a></p>
              <p>Fax: (570) 342-7786</p>
              <p>Email: <a href="mailto:frank@fjsantolaw.com" className="hover:text-white cursor-pointer">frank@fjsantolaw.com</a></p>
              <p>Web: <a href="https://fjsantolaw.com" className="hover:text-white cursor-pointer">https://fjsantolaw.com</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2025 Law Offices of Frank J. Santomauro, L.L.C. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white cursor-pointer">Terms</Link>
            <a href="https://teleringer.com" className="hover:text-white cursor-pointer">Website by Teleringer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
