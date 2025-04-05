import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#272b76cc] py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/20 pb-2">
          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-5 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Corretora: Lucinda Racca
              </h3>
              <p className="mb-4">
                Adquira seu imóvel na área mais atrativa do Rio de Janeiro
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
              <p className="mb-4">Email: lucindaracca48@gmail.com</p>
              <p>Telefone: (21) 96405-9493 </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Redes Sociais</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.instagram.com/raccaimoveis"
                  target="_blank"
                >
                  <InstagramLogo className="relative w-8 h-8 left-16 cursor-pointer" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
