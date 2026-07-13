import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proceso from "./components/Proceso";
import Casos from "./components/Casos";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div className="min-h-screen bg-mist text-graphite">
      <Navbar />
      <Hero />
      <FadeIn><Servicios /></FadeIn>
      <FadeIn><Proceso /></FadeIn>
      <FadeIn><Casos /></FadeIn>
      <FadeIn><Nosotros /></FadeIn>
      <FadeIn><Contacto /></FadeIn>
      <Footer />
    </div>
  );
}

export default App;