import React from 'react';
import { Copy } from 'lucide-react';

const Donation = () => {
  const pixKey = "56828306287";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave PIX copiada!");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-8">Faça sua Doação</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">          
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Chave PIX:</p>
            <div className="flex items-center justify-center space-x-2">
              <code className="bg-gray-100 px-4 py-2 rounded">{pixKey}</code>
              <button
                onClick={copyToClipboard}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                aria-label="Copiar chave PIX"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Sua doação ajuda a manter nosso projeto e auxilia aqueles que mais precisam.
            Deus abençoe sua generosidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donation;