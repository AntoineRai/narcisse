import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import logoNarcisse from '../assets/img/logo/logo_blanc_nar6.png';
import instagramIcon from '../assets/img/social/instag.png';
import tiktokIcon from '../assets/img/social/TIKTOK.png';
import linkedinIcon from '../assets/img/social/LINKEDIN.png';
import facebookIcon from '../assets/img/social/facebook.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[2100px] mx-auto px-4 md:px-32 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logoNarcisse} alt="Narcisse" className="h-8 mr-2" />
          </Link>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 lg:space-x-28 font-century text-white text-base">
            <li><Link to="/" className="hover:underline font-bold">Menu</Link></li>
            <li><Link to="/about" className="hover:underline">À propos de nous</Link></li>
            <li><Link to="/services" className="hover:underline">Nos services</Link></li>
            <li><Link to="/nos-projets" className="hover:underline">Nos projets</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>

        {/* Réseaux sociaux desktop */}
        <div className="hidden md:flex space-x-8 lg:space-x-16">
          <a href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="TikTok">
            <img src={tiktokIcon} alt="TikTok" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-75" />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-black p-6">
            <div className="flex justify-end">
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-8">
              <ul className="space-y-6 font-century text-white text-xl">
                <li><Link to="/" className="block hover:underline font-bold" onClick={() => setMobileMenuOpen(false)}>Menu</Link></li>
                <li><Link to="/about" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>À propos de nous</Link></li>
                <li><Link to="/services" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Nos services</Link></li>
                <li><Link to="/nos-projets" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Nos projets</Link></li>
                <li><Link to="/contact" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>

            <div className="mt-8 flex space-x-6">
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Header; 