import React from 'react';
import salade from '../public/menu/salade.jpeg';
import Poulet from '../public/menu/Poulet.png';
import citron from '../public/menu/citron.jpeg';

const Menu = () => {
  const dishes = [
    {
      name: 'Salade César',
      description: 'Une salade fraîche avec des croûtons et du parmesan.',
      image: salade,
    },
    {
      name: 'Poulet rôti',
      description: 'Poulet rôti servi avec des légumes et une sauce au thym.',
      image: Poulet,
    },
    {
      name: 'Tarte au citron',
      description: 'Tarte au citron faite maison avec une croûte croustillante.',
      image: citron,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-red-800 animate-fade-in">Notre Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:translate-y-1"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-200 transition-transform duration-300 transform hover:scale-110"
              />
              <h3 className="text-2xl font-serif font-bold mb-2 text-red-600">{dish.name}</h3>
              <p className="text-lg text-gray-700">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
