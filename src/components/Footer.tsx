import React from 'react';
import logoNarcisse from '../assets/img/logo/logo_blanc_nar6.png';
import instagramIcon from '../assets/img/social/instag.png';
import tiktokIcon from '../assets/img/social/TIKTOK.png';
import linkedinIcon from '../assets/img/social/LINKEDIN.png';
import facebookIcon from '../assets/img/social/facebook.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-12 md:space-y-24">
          {/* Réseaux sociaux */}
          <div className="flex space-x-6 md:space-x-8">
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="#" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>

          {/* Texte */}
          <p className="text-white text-center max-w-3xl font-century text-sm md:text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>

          {/* Logo */}
          <img src={logoNarcisse} alt="Narcisse" className="h-8 md:h-12 mt-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 