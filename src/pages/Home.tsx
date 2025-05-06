import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/Fond en dégradé.png';
import placeholder from '../assets/img/placeholder.png';
import aproposdenous from '../assets/img/aproposdenous.png';
import processus from '../assets/img/processus.png';

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
          {/* Liste statique ordinateur */}
          <div className="hidden 2xl:flex gap-16 items-center justify-center">
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
            {/* Ajoute ici d'autres partenaires si besoin */}
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
    </>
  );
};

export default Home; 