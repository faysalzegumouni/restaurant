import React from 'react';
import logo from '../public/logo/restaurant.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 fixed w-full z-10 animate-slide-in">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <img src={logo} alt="Le Gourmet Logo" className="h-10 w-10 mr-3 transition-transform duration-300 transform hover:scale-110"/>
          <div className="text-3xl font-bold text-red-800">Le Gourmet</div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-red-800 hover:text-yellow-500 transition duration-300">Home</a></li>
            <li><a href="#about" className="text-red-800 hover:text-yellow-500 transition duration-300">About</a></li>
            <li><a href="#menu" className="text-red-800 hover:text-yellow-500 transition duration-300">Menu</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
