import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const whatsappNumbers = [
    { name: 'Lourinaldo', number: '+556992473982' },
    { name: 'Alessandra', number: '+556999539727' },
    { name: 'Rudimar', number: '+556999445994' }
  ];

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-800">Entre em Contato</h2>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-4">
          {whatsappNumbers.map((contact) => (
            <a
              key={contact.number}
              href={`https://wa.me/${contact.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors md:w-auto w-full"
            >
              <Phone className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-700">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
