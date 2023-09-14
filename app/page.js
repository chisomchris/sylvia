import { Footer } from "./components/Footer";
import { GridBox } from "./components/GridBox";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <GridBox />
      </main>
      <Footer />
    </div>
  );
}
