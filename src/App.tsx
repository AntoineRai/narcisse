import React, { useState } from 'react';
import './App.css';
import heroImage from './assets/img/Fond en dégradé.png';
import instagramIcon from './assets/img/social/instag.png';
import tiktokIcon from './assets/img/social/TIKTOK.png';
import linkedinIcon from './assets/img/social/LINKEDIN.png';
import facebookIcon from './assets/img/social/facebook.png';
import logoNarcisse from './assets/img/logo/logo_blanc_nar6.png';
import placeholder from './assets/img/placeholder.png';
import aproposdenous from './assets/img/aproposdenous.png';
import processus from './assets/img/processus.png';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header minimaliste */}
      <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
        <div className="max-w-[2100px] mx-auto px-4 md:px-32 py-8 flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <img src={logoNarcisse} alt="Narcisse" className="h-8 mr-2" />
          </div>

          {/* Menu hamburger pour mobile */}
          <button 
            className="md:hidden text-white"
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
          <nav className="hidden md:block">
            <ul className="flex space-x-28 font-century text-white text-base">
              <li><a href="#about" className="hover:underline">À propos de nous</a></li>
              <li><a href="#services" className="hover:underline">Nos services</a></li>
              <li><a href="#projects" className="hover:underline">Nos projets</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>

          {/* Menu mobile */}
          <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
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
                <li><a href="#about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>À propos de nous</a></li>
                <li><a href="#services" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Nos services</a></li>
                <li><a href="#projects" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Nos projets</a></li>
                <li><a href="#contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Réseaux sociaux à droite */}
          <div className="hidden md:flex space-x-16">
            <a href="https://www.instagram.com/narcisse.projet/?hl=fr" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
            </a>
            <a href="https://www.tiktok.com/@narcisseprojet" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/company/narcisseprojet" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567367669025" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </header>

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
              <h1 className="text-6xl font-bold text-white mb-4 font-coolvetica">
                Agence de production photo & vidéo
              </h1>
            </div>
          </div>

          {/* Bouton en bas */}
          <div className="flex justify-center">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
              NOS PROJETS
            </a>
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
      <div id="about" className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Texte */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white mb-8 font-coolvetica">
                À propos de nous
              </h2>
              <p className="text-gray-300 mb-8 font-century leading-relaxed">
                Narcisse, agence créative basée dans les Hauts-de-France, spécialisée dans la mise en valeur de l'image des marques à travers des productions visuelles. Notre équipe de photographes et vidéastes professionnels imagine et réalise des shootings sur mesure en studio comme en extérieur qui reflètent votre univers et vos ambitions, quel que soit votre secteur.
                <br></br><br></br>
                Notre approche clé en main vous libère de toute contrainte : nous identifions vos besoins, vous conseillons, puis concevons un package complet repérage de lieux à Lille et dans le Nord, direction artistique, casting, stylisme, production photo et vidéo, post-production et retouches professionnelles.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
                EN SAVOIR PLUS
              </button>
            </div>
            
            {/* Partie droite - Image */}
            <div className="relative h-[300px] md:h-[500px] order-1 md:order-2">
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
      <div id="services" className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Image */}
            <div className="relative h-[300px] md:h-[500px] order-1">
              <img 
                src={processus}
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Partie droite - Texte */}
            <div className="order-2">
              <h2 className="text-4xl font-bold text-white mb-8 font-coolvetica">
                Notre processus
              </h2>
              
              {/* Pré-production */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
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
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
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
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
                  Post-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  En post-production, vos créations ou vêtements sont sublimés. Notre équipe affine chaque image,
                  harmonise les couleurs et les textures grâce à des retouches photos qui vous ressemblent. Le montage
                  vidéo ajoute ainsi une esthétique particulière à votre marque, permettant ainsi de captiver votre
                  audience sur vos réseaux sociaux.
                </p>
              </div>

              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
                Obtenir un devis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Citation */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Guillemets stylisés */}
            <div className="absolute -top-8 left-0 text-8xl font-century">"</div>
            <div className="absolute -bottom-8 right-0 text-8xl font-century">"</div>
            
            {/* Citation */}
            <p className="text-2xl text-gray-800 font-century leading-relaxed relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna bibendum, mattis est et, congue mauris. Vestibulum commodo finibus vulputate. Ut at tempus magna. Nulla facilisi.
            </p>
            <p className="text-gray-600 mt-4 font-century">
              John Stuart Mill
            </p>
          </div>
        </div>
      </div>

      {/* Section Nos Projets */}
      <div id="projects" className="py-24 bg-black">
        <div className="container mx-auto px-8">
          {/* Titre */}
          <h2 className="text-4xl font-bold text-white mb-8 font-coolvetica">
            Nos projets
          </h2>

          {/* Contenu avec texte et bouton */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* Texte */}
            <div className="w-full md:w-3/4 mb-8 md:mb-0">
              <p className="text-gray-300 font-century leading-relaxed text-justify">
                Découvrez notre portfolio de projets réalisés avec passion et expertise. Chaque création est le fruit d'une collaboration étroite avec nos clients, visant à capturer l'essence de leur marque et à raconter leur histoire de manière unique. De la photographie de mode aux campagnes publicitaires, en passant par les reportages événementiels, notre agence s'adapte à chaque univers pour offrir des résultats exceptionnels.
              </p>
            </div>

            {/* Bouton */}
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century whitespace-nowrap">
                VOIR TOUS LES PROJETS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Grille de Photos */}
      <div className="w-full bg-black py-24">
        <div className="container mx-auto px-8">

        </div>
      </div>

      {/* Section Contact */}
      <div id="contact" className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-center">
            <span className="text-5xl font-bold font-century mr-20">Contactez-nous&nbsp;!</span>
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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

    </div>
  );
}

export default App;
