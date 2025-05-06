import React from 'react';

const Team = () => {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-white mb-12 font-coolvetica">
          Notre équipe
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Membre 1 */}
          <div className="bg-white/5 rounded-lg p-8">
            <div className="aspect-square rounded-full overflow-hidden mb-6">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Membre de l'équipe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
              Prénom Nom
            </h3>
            <p className="text-gray-300 mb-4 font-century">
              Poste
            </p>
            <p className="text-gray-400 font-century">
              Description du membre de l'équipe et de son rôle dans l'agence. Mise en avant des compétences et de l'expertise.
            </p>
          </div>

          {/* Membre 2 */}
          <div className="bg-white/5 rounded-lg p-8">
            <div className="aspect-square rounded-full overflow-hidden mb-6">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Membre de l'équipe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
              Prénom Nom
            </h3>
            <p className="text-gray-300 mb-4 font-century">
              Poste
            </p>
            <p className="text-gray-400 font-century">
              Description du membre de l'équipe et de son rôle dans l'agence. Mise en avant des compétences et de l'expertise.
            </p>
          </div>

          {/* Membre 3 */}
          <div className="bg-white/5 rounded-lg p-8">
            <div className="aspect-square rounded-full overflow-hidden mb-6">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Membre de l'équipe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
              Prénom Nom
            </h3>
            <p className="text-gray-300 mb-4 font-century">
              Poste
            </p>
            <p className="text-gray-400 font-century">
              Description du membre de l'équipe et de son rôle dans l'agence. Mise en avant des compétences et de l'expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 