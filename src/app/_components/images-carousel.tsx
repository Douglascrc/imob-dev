"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ReactDOM from "react-dom";
import { useSwipeable } from "react-swipeable";

const decoradoImages = [
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Sala01-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Sala02-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Cozinha-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Varanda-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Banheiro-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-QuartoSuite-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-QuartoInfantil-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Decorado-Isometrico-OceanSide_Recreio.jpg",
];

const imagensImages = [
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Coworking-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-LazerInterno-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Lavanderia-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Brinquedoteca-OceanSide_Recreio.jpg",

  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-BeachTennis-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-QuadraGramada-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Playground-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-PetPlace-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-PetCare-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Bicicletario-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Fotomontagem01-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Fotomontagem02-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Guarita-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Fachada-OceanSide_Recreio.jpg",
  "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Piscina-OceanSide_Recreio.jpg",
];

export function ImagesCarousel() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<
    "decorado" | "imagens"
  >("decorado");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const images =
    selectedCategory === "decorado" ? decoradoImages : imagensImages;
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const prevModal = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextModal = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextModal(),
    onSwipedRight: () => prevModal(),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const getSlideWidth = () => {
    if (typeof window === "undefined") return "100%";
    return window.innerWidth < 768 ? "100%" : "80%";
  };

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (!isMounted) return null;

  const modalContent = (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 px-8"
      style={{ touchAction: "pan-x" }}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
        {...swipeHandlers}
      >
        <button
          onClick={closeModal}
          className="absolute z-50 top-24 sm:top-12 md:-top-3 right-0 cursor-pointer text-white text-3xl font-bold"
          aria-label="Fechar"
        >
          <X className="hover:bg-red-500 rounded-md" size={40} />
        </button>
        <button
          onClick={prevModal}
          className="absolute z-50 -left-2 top-1/2 flex items-center transform -translate-y-1/2 text-black bg-white rounded-full text-3xl"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextModal}
          className="absolute z-50 -right-2 top-1/2 flex items-center transform -translate-y-1/2 text-black bg-white rounded-full text-3xl"
          aria-label="Próxima"
        >
          <ChevronRight size={32} />
        </button>
        <div className="w-full h-[80vh] relative">
          <a
            href={images[modalIndex]}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (isTouchDevice) {
                e.preventDefault();
              }
            }}
          >
            <Image
              src={images[modalIndex]}
              alt={`Imagem ${modalIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white px-4 py-16">
      <div className="flex justify-start px-4 mb-4">
        <button
          onClick={() => setSelectedCategory("decorado")}
          className={`px-4 py-2 rounded-md border ${selectedCategory === "decorado" ? "bg-red-500 text-white" : "bg-white text-red-500"}`}
        >
          Decorado
        </button>
        <button
          onClick={() => setSelectedCategory("imagens")}
          className={`px-4 py-2 rounded-md border ${selectedCategory === "imagens" ? "bg-red-500 text-white" : "bg-white text-red-500"}`}
        >
          Imagens
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] relative"
              style={{ minWidth: getSlideWidth() }}
            >
              <div
                className="h-[600px] md:h-[300px] lg:h-[950px] relative"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} className="text-gray-600" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>

      {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
    </section>
  );
}
