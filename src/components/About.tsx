import React from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-800 mb-6">Sobre o Projeto</h2>
        </div>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="mb-4">
            O Projeto Acolha-me é uma iniciativa de caridade realizada por voluntários que se reunem para preparar e entregar alimento para os mais necessitados.
          </p>
          <p className="mb-4">
            Nossa missão é proporcionar apoio material e espiritual aos mais necessitados,
            seguindo os ensinamentos de Cristo e o exemplo dos santos que dedicaram suas vidas à caridade.
          </p>
          <p>
            Ajudar ao próximo é um ato de amor que é lindo, caso deseje nos ajudar entre em contato conosco <a href="#contato">Contatos</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;