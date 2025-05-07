import placeholder from '../assets/img/placeholder.png';

const Projects = () => {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-white mb-12 font-coolvetica">
          Nos projets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projet 1 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 1" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 2" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 3" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>

          {/* Projet 4 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 4" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>

          {/* Projet 5 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 5" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>

          {/* Projet 6 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              src={placeholder} 
              alt="Projet 6" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-coolvetica">
                  Nom du projet
                </h3>
                <p className="text-gray-200 font-century">
                  Description courte du projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 