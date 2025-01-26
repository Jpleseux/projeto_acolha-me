import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const slides = [
  {
    image: "../../public/imgs/1.jpeg",
    quote: "Ama o teu próximo como a ti mesmo. - Marcos 12:31",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/2.jpeg",
    quote: "Repartam com os necessitados o que vocês têm. - Romanos 12:13",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/3.jpeg",
    quote: "Quem é generoso será abençoado, pois reparte o seu pão com o pobre. - Provérbios 22:9",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/4.jpeg",
    quote: "Ajudem a carregar as cargas uns dos outros. - Gálatas 6:2",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/5.jpeg",
    quote: "Se alguém tiver recursos materiais e não ajudar o necessitado, como pode permanecer nele o amor de Deus? - 1 João 3:17",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/6.jpeg",
    quote: "Dê a quem pede e não volte as costas àquele que deseja pedir algo emprestado. - Mateus 5:42",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/7.jpeg",
    quote: "Quem dá ao pobre não terá necessidade. - Provérbios 28:27",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/8.jpeg",
    quote: "Pratiquem a justiça, amem a misericórdia e andem humildemente com o seu Deus. - Miquéias 6:8",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/9.jpeg",
    quote: "É melhor dar do que receber. - Atos 20:35",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/10.jpeg",
    quote: "Sejam bondosos e compassivos uns para com os outros. - Efésios 4:32",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/11.jpeg",
    quote: "Levem os fardos uns dos outros e, assim, cumpram a lei de Cristo. - Gálatas 6:2",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/12.jpeg",
    quote: "Quem oprime o pobre insulta o seu Criador, mas quem é bondoso com o necessitado honra a Deus. - Provérbios 14:31",
    alt: "Projeto Acolha-me"
  },
  {
    image: "../../public/imgs/13.jpeg",
    quote: "Façam o bem, sejam ricos em boas obras, generosos e prontos a repartir. - 1 Timóteo 6:18",
    alt: "Projeto Acolha-me"
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
            <p className="font-serif text-2xl italic">{slide.quote}</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default Carousel;