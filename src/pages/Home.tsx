import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/Fond en dégradé.png';
import placeholder from '../assets/img/placeholder.png';
import aproposdenous from '../assets/img/aproposdenous.png';
import processus from '../assets/img/processus.png';
import instagramIcon from '../assets/img/social/instag.png';
import tiktokIcon from '../assets/img/social/TIKTOK.png';
import linkedinIcon from '../assets/img/social/LINKEDIN.png';
import facebookIcon from '../assets/img/social/facebook.png';
import logoNarcisse from '../assets/img/logo/logo_blanc_nar6.png';

// Composant Header
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[2100px] mx-auto px-4 lg:px-32 py-8 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logoNarcisse} 
              alt="Narcisse" 
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Menu hamburger pour mobile */}
        <button 
          className="2xl:hidden text-white"
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
          <ul className="flex space-x-28 font-century text-white text-base">
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
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="text-white text-2xl space-y-8 text-center">
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
              className="w-7 h-7 object-contain brightness-0 invert"
            />
          </a>
          <a href="https://www.tiktok.com/@narcisseprojet" aria-label="TikTok">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className="w-7 h-7 object-contain brightness-0 invert"
            />
          </a>
          <a href="https://www.linkedin.com/company/narcisseprojet" aria-label="LinkedIn">
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="w-7 h-7 object-contain brightness-0 invert"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567367669025" aria-label="Facebook">
            <img 
              src={facebookIcon} 
              alt="Facebook" 
              className="w-7 h-7 object-contain brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

// Composant Footer
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

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Section Hero */}
      <div className="relative min-screen">
        {/* Image de fond avec overlay noir */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Fond Narcisse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative min-h-screen flex flex-col justify-between px-8 py-16">
          {/* Conteneur principal centré verticalement */}
          <div className="flex-1 flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-coolvetica">
                Agence de production photo & vidéo
              </h1>
            </div>
          </div>

          {/* Bouton en bas */}
          <div className="flex justify-center">
            <Link to="/nos-projets" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
              NOS PROJETS
            </Link>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div className="bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="partners-container">
            <div className="partners-wrapper animate-scroll">
              {/* Premier set de partenaires */}
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 1" 
                  className="max-h-16 object-contain"
                />
              </div>
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 2" 
                  className="max-h-16 object-contain"
                />
              </div>
              {/* Deuxième set de partenaires (copie pour le défilement infini) */}
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 1" 
                  className="max-h-16 object-contain"
                />
              </div>
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 2" 
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Présentation */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Texte */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-coolvetica">
                À propos de nous
              </h2>
              <p className="text-gray-300 mb-8 font-century leading-relaxed">
                Narcisse, agence créative basée dans les Hauts-de-France, spécialisée dans la mise en valeur de l'image des marques à travers des productions visuelles. Notre équipe de photographes et vidéastes professionnels imagine et réalise des shootings sur mesure en studio comme en extérieur qui reflètent votre univers et vos ambitions, quel que soit votre secteur.
                <br></br><br></br>
                Notre approche clé en main vous libère de toute contrainte : nous identifions vos besoins, vous conseillons, puis concevons un package complet repérage de lieux à Lille et dans le Nord, direction artistique, casting, stylisme, production photo et vidéo, post-production et retouches professionnelles.
              </p>
              <Link to="/notre-equipe" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
                EN SAVOIR PLUS
              </Link>
            </div>
            
            {/* Partie droite - Image */}
            <div className="relative h-[300px] lg:h-[500px] order-1 lg:order-2">
              <img 
                src={aproposdenous}
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Présentation Inversée */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Image */}
            <div className="relative h-[300px] lg:h-[500px] order-1">
              <img 
                src={processus}
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Partie droite - Texte */}
            <div className="order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-coolvetica">
                Notre processus
              </h2>
              
              {/* Pré-production */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-coolvetica">
                  Pré-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  La pré-production pose les bases de votre projet. Nous analysons l'ADN de votre marque pour développer
                  un concept visuel sur mesure. Notre équipe coordonne chaque détail : repérage des lieux, sélection des
                  modèles et planification détaillée du shooting pour valoriser vos créations ou vos pièces.
                </p>
              </div>

              {/* Production */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-coolvetica">
                  Production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  Lors du shooting, notre expertise en audiovisuel sublime vos pièces. Nos photographes capturent
                  chaque mouvement avec précision, dirigeant les modèles pour mettre en valeur chaque création ou
                  vêtement. Nos vidéastes immortalisent en image chaque moment de la séance photo, afin de mettre en
                  lumière notre collaboration. Notre production allie technicité et créativité, ce qui rend votre identité
                  visuelle percutante
                </p>
              </div>

              {/* Post-production */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-coolvetica">
                  Post-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  En post-production, vos créations ou vêtements sont sublimés. Notre équipe affine chaque image,
                  harmonise les couleurs et les textures grâce à des retouches photos qui vous ressemblent. Le montage
                  vidéo ajoute ainsi une esthétique particulière à votre marque, permettant ainsi de captiver votre
                  audience sur vos réseaux sociaux.
                </p>
              </div>

              <Link to="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
                Obtenir un devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Citation */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Guillemets stylisés */}
            <div className="absolute -top-8 left-0 text-6xl lg:text-8xl font-century">"</div>
            <div className="absolute -bottom-8 right-0 text-6xl lg:text-8xl font-century">"</div>
            
            {/* Citation */}
            <p className="text-xl lg:text-2xl text-gray-800 font-century leading-relaxed relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna bibendum, mattis est et, congue mauris. Vestibulum commodo finibus vulputate. Ut at tempus magna. Nulla facilisi.
            </p>
            <p className="text-gray-600 mt-4 font-century">
              John Stuart Mill
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home; 