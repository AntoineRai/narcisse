import React from 'react';

interface PhotoGrid1Props {
  images: string[];
}

const PhotoGrid1: React.FC<PhotoGrid1Props> = ({ images }) => {
  // images[0] à images[4]
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Image 1 (grande, en haut à gauche) */}
      <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
        <img src={images[0]} alt="1" className="w-full h-full object-cover rounded-2xl" />
        {/* Overlay texte exemple */}
        <div className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base">
          <div className="bg-black bg-opacity-50 px-3 py-2 rounded-lg">
            Shooting photo<br />Les trois HOCHEURS →
          </div>
        </div>
      </div>
      {/* Image 2 (en haut à droite) */}
      <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
        <img src={images[1]} alt="2" className="w-full h-full object-cover rounded-2xl" />
      </div>
      {/* Image 3 (en bas à droite, à gauche) */}
      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
        <img src={images[2]} alt="3" className="w-full h-full object-cover rounded-2xl" />
      </div>
      {/* Image 4 (en bas à droite, au centre) */}
      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
        <img src={images[3]} alt="4" className="w-full h-full object-cover rounded-2xl" />
      </div>
      {/* Image 5 (en bas à droite, à droite) */}
      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
        <img src={images[4]} alt="5" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default PhotoGrid1; 