"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import apartment from "@/../../public/galeria-millenium-01.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#272b76cc] text-white relative overflow-hidden">
      <div className="lg:h-[500px]">
        <Image
          src={apartment}
          alt="Foto da fachada do Viure"
          className="object-cover opacity-60"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Condições especiais no Ilha Pura{" "}
            </h1>
            <p className="lg:text-lg">
              Venha morar no Bairro mais seguro, Barra Olimpíca
            </p>
            <a
              href={`https://wa.me/5521978809444?text=Olá vim pelo site e queria mais informações`}
              target="_blank"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">
                  Com Condições imperdíveis
                </b>
              </p>
            </div>

            <div className="hidden md:block h-full relative">
              <Image
                src={apartment}
                alt="Foto da fachada do Viure"
                className="object-contain"
                fill
                sizes="(max-width:768px) 0vw, 50vw"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
