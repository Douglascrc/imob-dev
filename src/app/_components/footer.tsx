import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#272b76cc] py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/20 pb-2">
          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Corretor</h3>
              <p className="mb-4">
                Adquira seu imóvel na área mais atrativa do Rio de Janeiro
              </p>
              <a
                href={`https://wa.me/${process.env.PHONE}?text=Olá vim pelo site e queria mais informações`}
                className="bg-green-500 px-4 py-2 rounded-md"
              >
                {" "}
                Contato via Whatsapp
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
              <p className="mb-4">Emial: example@mail.com</p>
              <p>Telefone: (21) 91234-5678</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Redes Sociais</h3>
              <div className="flex gap-4 mt-2">
                <a href="" target="_blank"></a>
                <FacebookLogo className="w-8 h-8" />

                <a href="" target="_blank"></a>
                <InstagramLogo className="w-8 h-8" />

                <a href="" target="_blank"></a>
                <YoutubeLogo className="w-8 h-8" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
