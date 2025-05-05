import React from 'react';
import './App.css';
import heroImage from './assets/img/Fond en dégradé.png';
import instagramIcon from './assets/img/social/instag.png';
import tiktokIcon from './assets/img/social/TIKTOK.png';
import linkedinIcon from './assets/img/social/LINKEDIN.png';
import facebookIcon from './assets/img/social/facebook.png';
import logoNarcisse from './assets/img/logo/logo_blanc_nar6.png';

function App() {
  return (
    <div>
      {/* Header minimaliste */}
      <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
        <div className="max-w-[2100px] mx-auto px-32 py-8 flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <img src={logoNarcisse} alt="Narcisse" className="h-8 mr-2" />
          </div>
          {/* Menu au centre */}
          <nav>
            <ul className="flex space-x-28 font-century text-white text-base">
              <li><a href="#" className="hover:underline font-bold">Menu</a></li>
              <li><a href="#" className="hover:underline">À propos de nous</a></li>
              <li><a href="#" className="hover:underline">Nos services</a></li>
              <li><a href="#" className="hover:underline">Nos projets</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          {/* Réseaux sociaux à droite */}
          <div className="flex space-x-16">
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
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
              NOS PROJETS
            </button>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 gap-8 items-center">
            {/* Partenaire 1 */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/img/partners/partner1.png" 
                alt="Partenaire 1" 
                className="max-h-16 object-contain"
              />
            </div>
            {/* Partenaire 2 */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/img/partners/partner2.png" 
                alt="Partenaire 2" 
                className="max-h-16 object-contain"
              />
            </div>
            {/* Partenaire 3 */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/img/partners/partner3.png" 
                alt="Partenaire 3" 
                className="max-h-16 object-contain"
              />
            </div>
            {/* Partenaire 4 */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/img/partners/partner4.png" 
                alt="Partenaire 4" 
                className="max-h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Présentation */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Texte */}
            <div>
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
            <div className="relative h-[500px]">
              <img 
                src="/src/assets/img/presentation.jpg" 
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
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Image */}
            <div className="relative h-[500px]">
              <img 
                src="/src/assets/img/presentation2.jpg" 
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Partie droite - Texte */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 font-coolvetica">
                Notre processus
              </h2>
              
              {/* Pré-production */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
                  Pré-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  Nous identifions vos besoins, définissons la direction artistique, sélectionnons les lieux et organisons le casting. Cette phase cruciale garantit que chaque détail est pensé pour refléter votre image de marque.
                </p>
              </div>

              {/* Production */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
                  Production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  Notre équipe de professionnels met en œuvre le projet avec précision, que ce soit en studio ou en extérieur. Nous capturons les moments clés qui racontent votre histoire.
                </p>
              </div>

              {/* Post-production */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-coolvetica">
                  Post-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  Nous finalisons votre projet avec des retouches professionnelles, un montage vidéo soigné et une optimisation pour chaque support de diffusion.
                </p>
              </div>

              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century">
                EN SAVOIR PLUS
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
              La photographie est une brève complicité entre la prévoyance et le hasard.
            </p>
            <p className="text-gray-600 mt-4 font-century">
              John Stuart Mill
            </p>
          </div>
        </div>
      </div>

      {/* Section Nos Projets */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-8">
          {/* Titre */}
          <h2 className="text-4xl font-bold text-white mb-8 font-coolvetica">
            Nos projets
          </h2>

          {/* Contenu avec texte et bouton */}
          <div className="flex items-start justify-between">
            {/* Texte */}
            <div className="w-3/4">
              <p className="text-gray-300 font-century leading-relaxed text-justify">
                Découvrez notre portfolio de projets réalisés avec passion et expertise. Chaque création est le fruit d'une collaboration étroite avec nos clients, visant à capturer l'essence de leur marque et à raconter leur histoire de manière unique. De la photographie de mode aux campagnes publicitaires, en passant par les reportages événementiels, notre agence s'adapte à chaque univers pour offrir des résultats exceptionnels.
              </p>
            </div>

            {/* Bouton */}
            <div className="ml-8">
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
          <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-5 grid-rows-5 gap-0">
              {/* Image 1 */}
              <div className="col-span-2 row-span-3 relative">
                <img 
                  src="/src/assets/img/grid/photo1.jpg" 
                  alt="Projet 1" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="col-span-2 row-span-2 relative">
                <img 
                  src="/src/assets/img/grid/photo2.jpg" 
                  alt="Projet 2" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="col-span-3 row-span-2 relative">
                <img 
                  src="/src/assets/img/grid/photo3.jpg" 
                  alt="Projet 3" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 4 */}
              <div className="col-span-2 row-span-3 relative">
                <img 
                  src="/src/assets/img/grid/photo4.jpg" 
                  alt="Projet 4" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 5 */}
              <div className="col-span-1 row-span-3 relative">
                <img 
                  src="/src/assets/img/grid/photo5.jpg" 
                  alt="Projet 5" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className="w-full bg-white py-24">
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
        <div className="flex flex-col items-center justify-center space-y-24">
          {/* Réseaux sociaux */}
          <div className="flex space-x-8">
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="#" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" className="w-10 h-10" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
            </a>
          </div>

          {/* Texte */}
          <p className="text-white text-center max-w-3xl font-century text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>

          {/* Logo */}
          <img src={logoNarcisse} alt="Narcisse" className="h-12 mt-4" />
        </div>
      </footer>

    </div>
  );
}

export default App;
