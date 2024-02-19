import React from 'react';

function ImageCard({ image, onDownload }) {
  return (
    <div className="group cursor-pointer relative bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" src={image.url} alt={image.name} />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => onDownload(image.url, image.name)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
