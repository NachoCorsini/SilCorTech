import nachoFoto from "../assets/nacho.png";
import andresFoto from "../assets/andres.png";

const equipo = [
  {
    nombre: "Ignacio Andrés Corsini",
    foto: nachoFoto,
  },
  {
    nombre: "Andrés Silva Romero",
    foto: andresFoto,
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-semibold text-graphite mb-6">
          Quiénes somos
        </h2>
        <p className="text-graphite/70 text-lg mb-12">
          Somos dos programadores recibidos que decidimos emprender juntos.
          Ayudamos a negocios de cualquier rubro a sumar tecnología a su
          operación, con la misma seriedad con la que trabajamos en
          proyectos grandes, pero con el trato cercano de un equipo chico.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {equipo.map((persona) => (
            <div key={persona.nombre} className="flex flex-col items-center">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-32 h-32 rounded-full object-cover object-[center_20%] border-2 border-cobalt/30 transition-shadow duration-300 hover:shadow-[0_0_25px_6px_rgba(52,87,213,0.5)]"
              />
              <span className="mt-3 font-body text-sm font-medium text-graphite">
                {persona.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
