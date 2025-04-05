"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selectedCategory, setSelectedCategory] = useState<
    "decorado" | "imagens"
  >("decorado");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images =
    selectedCategory === "decorado" ? decoradoImages : imagensImages;

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
              style={{ minWidth: "80%" }}
            >
              <div className="h-[600px] lg:h-[950px] relative">
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
    </section>
  );
}
