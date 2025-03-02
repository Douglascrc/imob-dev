"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, House } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
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
        <h2 className="font-bold text-4xl mb-12 text-black">Imovéis</h2>

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
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className=" my-1 font-bold text-xl">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-center">
                      <a
                        className="flex items-center justify-center gap-2 hover:rounded-md p-2 duration-300 hover:bg-green-600"
                        href=""
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
    title: "Consulta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh suscipit risus vestibulum rhoncus. Maecenas gravida mi ac sapien gravida, eu maximus arcu gravida. Vestibulum vel dolor sit amet neque fermentum vestibulum eget eget elit. Nulla facilisis ex id libero ultrices, sed euismod purus placerat. Praesent sed ipsum ac lorem placerat semper pretium in tortor. Aliquam commodo semper mauris, nec aliquet dolor sollicitudin feugiat. Donec ut ligula nibh. Suspendisse volutpat est justo, at tempus nibh lacinia vitae. Ut pulvinar ut mi nec faucibus.",
    duration: "1h",
    price: "$45",
    icon: <House />,
    linkText:
      "Olá, vi no site sobre Consultoria e gostaria de mais informações.",
  },
  {
    title: "Visita",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, lectus eget semper imperdiet, nunc magna dapibus metus, eu porta ante libero et mauris. Donec sed rhoncus justo, vitae viverra risus. Aliquam non purus tortor. In sit amet ultrices tellus, in porta mauris. Praesent consectetur orci sem, vitae pharetra urna pharetra porta. Donec eu elit nec turpis ornare tincidunt in sit amet ante. Ut non dictum nibh. Duis sit amet magna nec dolor pharetra egestas. Maecenas eget ipsum mi.",
    duration: "2h",
    price: "$80",
    icon: <House />,
    linkText: "Olá, vi no site e gostaria de mais informações.",
  },
  {
    title: "Oferta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh suscipit risus vestibulum rhoncus. Maecenas gravida mi ac sapien gravida, eu maximus arcu gravida. Vestibulum vel dolor sit amet neque fermentum vestibulum eget eget elit. Nulla facilisis ex id libero ultrices, sed euismod purus placerat. Praesent sed ipsum ac lorem placerat semper pretium in tortor. Aliquam commodo semper mauris, nec aliquet dolor sollicitudin feugiat. Donec ut ligula nibh. Suspendisse volutpat est justo, at tempus nibh lacinia vitae. Ut pulvinar ut mi nec faucibus.",
    duration: "1h",
    price: "$45",
    icon: <House />,
    linkText:
      "Olá, vi no site sobre Consultoria e gostaria de mais informações.",
  },
];
