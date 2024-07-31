import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-cover bg-center h-screen" 
      style={{ backgroundImage: "url('/path-to-image.jpg')" }}
    >
      <div className="flex justify-center items-center h-full bg-gradient-to-r from-red-800 via-yellow-500 to-green-800 bg-opacity-60">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bienvenue au Le Gourmet</h1>
          <p className="text-2xl mb-8">Savourez les meilleurs plats de la ville</p>
          <a href="#menu" className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
             Voir le Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
