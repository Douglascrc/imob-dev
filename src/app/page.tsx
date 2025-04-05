import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { ImagesCarousel } from "./_components/images-carousel";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ImagesCarousel />
      <Services />
      <Footer />
    </main>
  );
}
