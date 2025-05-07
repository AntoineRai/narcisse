import { Link } from 'react-router-dom';
import teamGroup from '../assets/img/team/team-group.jpg';
import placeholder from '../assets/img/placeholder.png';
import alexandre from '../assets/img/team/Alexandre.jpg';
import eva from '../assets/img/team/Eva.jpg';
import faustine from '../assets/img/team/Faustine.jpg';
import julie from '../assets/img/team/Julie.jpg';
import lucas from '../assets/img/team/Lucas.jpg';
import melvin from '../assets/img/team/Melvin.jpg';
import pierre from '../assets/img/team/Pierre.jpg';
import janice from '../assets/img/team/Janice.jpg';


const members = [
  {
    name: 'PIERRE ALI',
    position: 'CHEF DE PROJET AUDIOVISUEL',
    img: pierre,
  },
  {
    name: 'JANICE ATSIN',
    position: 'STYLISTE & SCÉNOGRAPHE',
    img: janice,
  },
  {
    name: 'ALEXANDRE LOBBESTAEL',
    position: 'DIRECTEUR ARTISTIQUE',
    img: alexandre,
  },
  {
    name: 'JULIE DEMEYER',
    position: 'STYLISTE & SCÉNOGRAPHE',
    img: julie,
  },
  {
    name: 'MELVIN CABOCHE',
    position: 'CHARGÉ DE PRODUCTION',
    img: melvin,
  },
  {
    name: 'EVA FIEVET',
    position: 'CHARGÉE DE COMMUNICATION',
    img: eva,
  },
  {
    name: 'LUCAS DHOISNE',
    position: 'VIDÉASTE & MOTION DESIGNER',
    img: lucas,
  },
  {
    name: 'FAUSTINE COGET',
    position: 'CHARGÉE DE MARKETING',
    img: faustine,
  },
];

const Team = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl lg:text-6xl font-medium text-white mb-16 font-coolvetica">
          L'équipe Narcisse
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-start mb-8 md:mb-0">
              <div className="w-64 aspect-square rounded-lg overflow-hidden mb-4 bg-neutral-900 self-center">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center mx-auto"
                  loading="eager"
                />
              </div>
              <div className="text-left w-full pl-2">
                <h3 className="text-lg lg:text-xl font-bold text-white font-century uppercase tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-xs lg:text-sm text-white font-century uppercase tracking-widest font-light">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Section Rejoindre l'équipe en full width */}
        <div className="w-full bg-white py-10 md:py-16 mt-10">
          <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold font-coolvetica mb-4 text-black">Rejoindre l'équipe Narcisse</h2>
              <p className="text-black font-century mb-8 max-w-lg mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-century text-base hover:bg-neutral-800 transition-all duration-300">
                Contactez-nous !
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={teamGroup} 
                alt="L'équipe Narcisse" 
                className="rounded-2xl w-full max-w-2xl object-cover" 
                loading="eager"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Team; 