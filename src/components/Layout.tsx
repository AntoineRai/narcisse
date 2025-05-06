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
}

const Header = ({ isMenuOpen, setIsMenuOpen, logo, linkClass, iconClass }: HeaderProps) => {
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

        {/* Menu hamburger pour mobile */}
        <button 
          className="2xl:hidden text-inherit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden 2xl:block">
          <ul className={`flex space-x-28 font-century text-base ${linkClass}`}>
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/notre-equipe" className="hover:underline">Notre équipe</Link></li>
            <li><Link to="/nos-projets" className="hover:underline">Nos projets</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>

        {/* Menu mobile */}
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out 2xl:hidden`}>
          <div className="flex flex-col items-center justify-center h-full relative">
            <button 
              className="absolute top-8 right-8 text-inherit"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className={`text-2xl space-y-8 text-center ${linkClass}`}>
              <li><Link to="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/notre-equipe" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Notre équipe</Link></li>
              <li><Link to="/nos-projets" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Nos projets</Link></li>
              <li><Link to="/contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux à droite */}
        <div className="hidden 2xl:flex space-x-16">
          <a href="https://www.instagram.com/narcisse.projet/?hl=fr" aria-label="Instagram">
            <img 
              src={instagramIcon} 
              alt="Instagram" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.tiktok.com/@narcisseprojet" aria-label="TikTok">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.linkedin.com/company/narcisseprojet" aria-label="LinkedIn">
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className={`w-7 h-7 object-contain ${iconClass}`}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567367669025" aria-label="Facebook">
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
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} logo={logo} linkClass={linkClass} iconClass={iconClass} />
      {children}
      <Footer />
    </>
  );
};

export default Layout; 