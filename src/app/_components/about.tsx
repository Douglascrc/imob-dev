"use client";

import {
  Barbell,
  Car,
  MapPin,
  Shower,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import { YouTubePlayer } from "./youtube-player";
import { useTracking } from "./useTracking";

export function About() {
  const { trackConversion } = useTracking();

  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden rounded-3xl">
              <YouTubePlayer />
            </div>
          </div>

          <div className="space-y-6 pl-4">
            <h2 className="text-4xl font-bold text-black">Saiba Mais</h2>

            <p className="text-black text-lg font-bold word-wrap">
              Viva no Recreio um bairro planejado com segurança para sua
              família, um estilo de vida único perto das melhores praias, da
              natureza e de tudo o que importa!
            </p>

            <ul className="space-y-4 text-black">
              <li className="flex items-center gap-3">
                <MdAirlineSeatIndividualSuite
                  className="w-8 h-8 text-red-500"
                  aria-hidden="true"
                />
                <span className="text-lg">
                  2 e 3 quartos com Suítes e acabamento premium.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Barbell className="w-8 h-8 text-red-500" aria-hidden="true" />
                <span className="text-lg">
                  Academia completa com equipamentos modernos.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Shower
                  className="w-7 h-7 text-red-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-lg">Sauna premium para relaxamento.</span>
              </li>

              <li className="flex items-center gap-3">
                <Car
                  className="w-7 h-7 text-red-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-lg">Vaga de garagem garantida.</span>
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                id="whatsapp-button"
                href={`https://wa.me/${process.env.PHONE}?text=Olá vim pelo site e queria mais informações`}
                target="_blank"
                className="bg-[#E84C3D] items-center flex justify-center w-fit gap-2 px-4 py-2 rounded-md"
                onClick={() =>
                  trackConversion("whatsapp_falar_com_especialista")
                }
              >
                <WhatsappLogo className="text-white w-5 h-5" />
                Fale com um especialista
              </a>

              <a
                href="https://maps.app.goo.gl/W36THoMaECqiMNBz7"
                target="_blank"
                className="items-center flex justify-center w-fit gap-2 px-4 py-2 border border-solid text-black rounded-md"
              >
                <MapPin className="w-5 h-5" />
                Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
