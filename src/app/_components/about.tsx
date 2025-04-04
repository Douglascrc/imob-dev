import Image from "next/image";
import milenium from "@/../../public/galeria-millenium-02.jpg";
import mileniumC from "@/../../public/galeria-millenium-10.jpg";
import { Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden rounded-3xl">
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={mileniumC}
                alt="Foto da área de Lazer"
                fill
                quality={100}
                priority
              />
            </div>

            <div className="absolute w-40 h-40 overflow-hidden right-4 -bottom-8 border-4 rounded-3xl">
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={milenium}
                alt="Foto dos aptos"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold mt-4 text-black">SOBRE</h2>

            <p className="text-black">
              Um Bairro próprio, tenha um ambiente agradável para você e sua
              família
            </p>

            <ul className="space-y-4 text-black">
              <li className="flex items-center">
                <Check className="text-red-500" />
                Qualidade é a prioridade
              </li>
              <li className="flex items-center">
                <Check className="text-red-500" />
                Ambiente seguro e acolhedor
              </li>
              <li className="flex items-center">
                <Check className="text-red-500" />
                Área de Lazer completa
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/${process.env.PHONE}?text=Olá vim pelo site e queria mais informações`}
                target="_blank"
                className="bg-[#E84C3D] items-center flex justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="text-white w-5 h-5" />
                Fale com um especialista
              </a>

              <a
                href="#"
                className="items-center flex justify-center w-fit gap-2 px-4 py-2 text-black rounded-md"
              >
                <MapPin className=" w-5 h-5" />
                Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
