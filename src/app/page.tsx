import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { ImagesCarousel } from "./_components/images-carousel";
import { Services } from "./_components/services";
import { WhatsappSticker } from "./_components/whatsapp-sticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ImagesCarousel />
      <Services />
      <WhatsappSticker />
      <Footer />
    </main>
  );
}
