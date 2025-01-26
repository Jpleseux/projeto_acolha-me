import React from 'react';
import { Facebook, Instagram, Youtube, Church } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Church className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-serif">Projeto Acolha-me</span>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>Paróquia São Judas Tadeu</p>
            <p>Av. Belo Horizonte, 2812 - Jardim Clodoaldo</p>
            <p>Cacoal-RO, 76967-583</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;