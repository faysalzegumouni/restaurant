import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg font-semibold mb-4">&copy; 2024 Le Gourmet. Tous droits réservés.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-green-500 transition duration-300">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="text-white hover:text-green-500 transition duration-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-white hover:text-green-500 transition duration-300">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <p className="text-sm">Développé avec passion pour Le Gourmet.</p>
      </div>
    </footer>
  );
}

export default Footer;
