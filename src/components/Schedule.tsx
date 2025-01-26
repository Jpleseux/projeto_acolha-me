import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="horarios" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-800">Horários e Localização</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-serif text-gray-800 mb-4">Horários das Missões</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span>Sábado: 18h30</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span>Domingo: Após a missa das 7h da manhã</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-serif text-gray-800 mb-4">Endereço</h3>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Paróquia São Judas Tadeu<br />
                  Av. Belo Horizonte, 2812<br />
                  Jardim Clodoaldo, Cacoal-RO<br />
                  CEP: 76967-583
                </span>
              </p>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="Localização da Paróquia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.6799925168552!2d-61.4544931!3d-11.4307568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c82f120d4e0633%3A0x1f814be8a6334a5f!2sPar%C3%B3quia%20S%C3%A3o%20Judas%20Tadeu!5e0!3m2!1spt-BR!2sbr!4v1737857940216!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;