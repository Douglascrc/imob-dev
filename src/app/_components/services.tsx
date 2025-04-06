"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, House } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl mb-12 text-black">Consultoria</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div>
                        <div className="flex gap-2 my-1">
                          <span className="text-3xl">{item.icon}</span>
                          <h3 className=" font-bold text-xl">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 font-bold text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-center">
                      <a
                        className="flex items-center justify-center gap-2 hover:rounded-md p-2 duration-300 hover:bg-green-600"
                        href={`https://wa.me/${process.env.PHONE}?text=${item.linkText}`}
                        target="_blank"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato com um especialista
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2
            z-10 top-1/2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2
            z-10 top-1/2"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Outros imóveis",
    description:
      "Posso te orientar sobre imovéis de outras regiões que possa te interessar. Entre em contato para que eu possa te ajudar a encontrar o imóvel ideal para você.",
    icon: <House />,
    linkText:
      "Olá, vim do site e gostaria de mais informações sobre outros imóveis.",
  },
  {
    title: "Visita",
    description:
      "Podemos agendar uma visita ao imóvel para que você possa conhecê-lo pessoalmente e conversamos sobre o que você busca. Entre em contato para agendarmos um horário.",

    icon: <House />,
    linkText: "Olá, gostaria de agendar uma visita no Oceanside.",
  },
  {
    title: "Simulação de financiamento",
    description:
      "Podemos simular o financiamento do imóvel para que você tenha uma ideia de como ficaria o valor das parcelas e as condições de pagamento. Entre em contato para que eu possa te ajudar com isso.",

    icon: <House />,
    linkText: "Olá, gostaria de simular um financiamento para o imóvel.",
  },
];
