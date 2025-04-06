import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import apartment from "@/../../public/Perspectiva-Guarita-OceanSide_Recreio.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#272b76cc] text-white relative overflow-hidden">
      <div className="h-[400px] md:h-[380px] lg:h-[400px]">
        <Image
          src={apartment}
          alt="Foto da fachada do OceanSide"
          className="object-cover opacity-60"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container mx-auto pt-4 lg:pt-8 pb-8 md:pb-24 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-0">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Um condomínio no Pontal Oceânico{" "}
            </h1>
            <p className="lg:text-lg">
              Descubra o Oceanside: O mais novo lançamento no Pontal Oceânico
              que eleva sua qualidade de vida a um novo patamar
            </p>
            <a
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="300"
              href={`https://wa.me/${process.env.PHONE}?text=Olá vim pelo site e queria mais informações`}
              target="_blank"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
            >
              <WhatsappLogo className="w-5 h-5" />
              Agende sua visita
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-red-500 text-white px-2 py-1 rounded-md">
                  Condições exclusivas de lançamento
                </b>
              </p>
            </div>

            <div className="hidden h-full relative">
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
