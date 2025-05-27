import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import instagramIcon from '../assets/img/social/instag.png';
import tiktokIcon from '../assets/img/social/TIKTOK.png';
import linkedinIcon from '../assets/img/social/LINKEDIN.png';
import facebookIcon from '../assets/img/social/facebook.png';
import logoNarcisse from '../assets/img/logo/logo_blanc_nar6.png';
import logoNarcisseNoir from '../assets/img/logo/logo_nar6_black.png';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  logo: string;
  linkClass: string;
  iconClass: string;
  isContact: boolean;
}

const Header = ({ isMenuOpen, setIsMenuOpen, logo, linkClass, iconClass, isContact }: HeaderProps) => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[2100px] mx-auto px-4 lg:px-32 py-8 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Narcisse" 
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Menu hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`lg:hidden ${isContact ? 'text-black' : 'text-white'}`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden 2xl:block">
          <ul className={`flex space-x-28 font-century text-base ${linkClass}`}>
            <li><Link to="/notre-equipe" className="hover:underline">Notre équipe</Link></li>
            <li><Link to="/nos-projets" className="hover:underline">Nos projets</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 p-4 z-50">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 transition-colors font-century"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/notre-equipe" 
                className="text-white hover:text-gray-300 transition-colors font-century"
                onClick={() => setIsMenuOpen(false)}
              >
                Notre équipe
              </Link>
              <Link 
                to="/nos-projets" 
                className="text-white hover:text-gray-300 transition-colors font-century"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos projets
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-300 transition-colors font-century"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.instagram.com/narcisse.prod/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/narcisse-prod/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        )}

        {/* Réseaux sociaux à droite */}
        <div className="hidden 2xl:flex space-x-2">
          <a href="https://www.instagram.com/narcisse.projet/?hl=fr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img 
              src={instagramIcon} 
              alt="Instagram" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.tiktok.com/@narcisseprojet" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.linkedin.com/company/narcisseprojet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567367669025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img 
              src={facebookIcon} 
              alt="Facebook" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-24">
          {/* Réseaux sociaux */}
          <div className="flex space-x-8">
            <a href="https://www.instagram.com/narcisse.projet/?hl=fr" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-10 h-10 social-icon" />
            </a>
            <a href="https://www.tiktok.com/@narcisseprojet" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" className="w-10 h-10 social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/narcisseprojet" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567367669025" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="w-10 h-10 social-icon" />
            </a>
          </div>

          {/* Texte */}
          <p className="text-white text-center max-w-3xl font-century text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>

          {/* Logo */}
          <img src={logoNarcisse} alt="Narcisse" className="h-12 mt-4" />
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Détection du fond clair pour la page Contact
  const isContact = location.pathname === '/contact';
  const logo = isContact ? logoNarcisseNoir : logoNarcisse;
  const linkClass = isContact ? 'text-black' : 'text-white';
  const iconClass = isContact ? '' : 'brightness-0 invert';

  return (
    <>
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        logo={logo} 
        linkClass={linkClass} 
        iconClass={iconClass}
        isContact={isContact}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout; 