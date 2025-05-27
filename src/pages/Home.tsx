import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/Fond en dégradé.png';
import placeholder from '../assets/img/placeholder.png';
import Busia1 from '../assets/img/projects/Busia1.jpg';
import Busia2 from '../assets/img/projects/Busia2.jpg';
import InesBoutique from '../assets/img/projects/InesBoutique.jpg';
import Seworigin from '../assets/img/projects/Seworigin.jpg';
import TroisTricoteurs from '../assets/img/projects/TroisTricoteurs.jpg';
import aproposdenous from '../assets/img/aproposdenous.png';
import processus from '../assets/img/processus.png';

const photos = [
  { id: 1, src: TroisTricoteurs, title: 'Shooting photo', subtitle: 'Les trois tricoteurs', link: '#' },
  { id: 2, src: Busia1, title: 'Shooting photo', subtitle: 'Busia Vintage', link: '#' },
  { id: 3, src: Busia2, title: 'Shooting photo', subtitle: 'Busia Vintage', link: '#' },
  { id: 4, src: Seworigin, title: 'Shooting photo', subtitle: 'Seworigin', link: '#' },
  { id: 5, src: InesBoutique, title: 'Shooting photo', subtitle: 'Inès Boutique', link: '#' }
];

const Home = () => {
  return (
    <>
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
        <div className="relative min-h-screen flex flex-col justify-between px-4 lg:px-32 py-16">
          {/* Conteneur principal centré verticalement */}
          <div className="flex-1 flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-coolvetica">
                <span className="font-happy-times">Agence</span> de production photo <span className="font-happy-times">&</span> vidéo
              </h1>
            </div>
          </div>

          {/* Bouton en bas */}
          <div className="flex justify-center">
            <Link 
              to="/nos-projets" 
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century"
            >
              Nos projets
            </Link>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-8">
          {/* Défilement mobile/tablette */}
          <div className="partners-container 2xl:hidden">
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
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 3" 
                  className="max-h-16 object-contain"
                />
              </div>
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 4" 
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
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 3" 
                  className="max-h-16 object-contain"
                />
              </div>
              <div className="partner-item">
                <img 
                  src={placeholder}
                  alt="Partenaire 4" 
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          </div>
          {/* Liste statique ordinateur */}
          <div className="hidden 2xl:flex justify-between items-center max-w-6xl mx-auto">
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
            <div className="partner-item">
              <img 
                src={placeholder}
                alt="Partenaire 3" 
                className="max-h-16 object-contain"
              />
            </div>
            <div className="partner-item">
              <img 
                src={placeholder}
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
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Partie gauche - Texte */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-brook">
                À propos de nous
              </h2>
              <p className="text-gray-300 mb-8 font-century leading-relaxed">
                Narcisse, agence créative basée dans les Hauts-de-France, spécialisée dans la mise en valeur de l'image des marques à travers des productions visuelles. Notre équipe de photographes et vidéastes professionnels imagine et réalise des shootings sur mesure en studio comme en extérieur qui reflètent votre univers et vos ambitions, quel que soit votre secteur.
                <br /><br />
                Notre approche clé en main vous libère de toute contrainte : nous identifions vos besoins, vous conseillons, puis concevons un package complet repérage de lieux à Lille et dans le Nord, direction artistique, casting, stylisme, production photo et vidéo, post-production et retouches professionnelles.
              </p>
              <Link 
                to="/notre-equipe" 
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century"
              >
                En savoir plus
              </Link>
            </div>
            
            {/* Partie droite - Image */}
            <div className="relative h-auto order-1 lg:order-2">
              <img 
                src={aproposdenous}
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-[2rem]"
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
            <div className="relative h-auto order-1">
              <img 
                src={processus}
                alt="Présentation Narcisse" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>

            {/* Partie droite - Texte */}
            <div className="order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-brook">
                Notre processus
              </h2>
              
              {/* Pré-production */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-brook">
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
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-brook">
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
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-brook">
                  Post-production
                </h3>
                <p className="text-gray-300 font-century leading-relaxed">
                  En post-production, vos créations ou vêtements sont sublimés. Notre équipe affine chaque image,
                  harmonise les couleurs et les textures grâce à des retouches photos qui vous ressemblent. Le montage
                  vidéo ajoute ainsi une esthétique particulière à votre marque, permettant ainsi de captiver votre
                  audience sur vos réseaux sociaux.
                </p>
              </div>

              <Link 
                to="/contact" 
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century"
              >
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

      {/* Section Nos Projets */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-32">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-coolvetica">
            Nos projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black text-white">
            <div className="flex flex-col gap-4">
              <div className="h-[400px] relative overflow-hidden rounded-[2rem] group">
                <img 
                  src={photos[0].src} 
                  alt="Main" 
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <div>
                    <p className="text-lg font-semibold">{photos[0].title}</p>
                    <a href={photos[0].link} className="text-sm underline">{photos[0].subtitle}</a>
                  </div>
                </div>
              </div>
              <div className="h-[200px] relative overflow-hidden rounded-[2rem] group">
                <img 
                  src={photos[1].src} 
                  alt="Second" 
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <div>
                    <p className="text-lg font-semibold">{photos[1].title}</p>
                    <a href={photos[1].link} className="text-sm underline">{photos[1].subtitle}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-[200px] relative overflow-hidden rounded-[2rem] group">
                <img 
                  src={photos[2].src} 
                  alt="Third" 
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <div>
                    <p className="text-lg font-semibold">{photos[2].title}</p>
                    <a href={photos[2].link} className="text-sm underline">{photos[2].subtitle}</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 h-[400px]">
                <div className="w-3/5 relative overflow-hidden rounded-[2rem] group">
                  <img 
                    src={photos[3].src} 
                    alt="Fourth" 
                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                    <div>
                      <p className="text-lg font-semibold">{photos[3].title}</p>
                      <a href={photos[3].link} className="text-sm underline">{photos[3].subtitle}</a>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 relative overflow-hidden rounded-[2rem] group">
                  <img 
                    src={photos[4].src} 
                    alt="Fifth" 
                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                    <div>
                      <p className="text-lg font-semibold">{photos[4].title}</p>
                      <a href={photos[4].link} className="text-sm underline">{photos[4].subtitle}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 