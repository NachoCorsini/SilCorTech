const servicios = [
  {
    nombre: "Web institucional",
    descripcion:
      "Presencia profesional online: quiénes son, qué ofrecen y cómo contactarlos.",
  },
  {
    nombre: "Tienda / catálogo online",
    descripcion:
      "Vendé o mostrá tu catálogo con pedidos por WhatsApp o pago online.",
  },
  {
    nombre: "Sistemas a medida",
    descripcion:
      "Turnos, reservas, gestión interna: automatizamos lo que hoy hacen a mano.",
  },
  {
    nombre: "Integraciones y mantenimiento",
    descripcion:
      "Conectamos herramientas que ya usás y damos soporte continuo.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-graphite py-24 text-mist scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-semibold mb-2">
          Qué hacemos
        </h2>
        <p className="text-mist/60 max-w-lg mb-12">
          Elegís lo que tu negocio necesita hoy. Podemos sumar más adelante.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div
              key={s.nombre}
              className="border border-mist/15 rounded-xl p-6 hover:border-cobalt/60 transition-colors"
            >
              <h3 className="font-display text-xl font-semibold text-amber mb-2">
                {s.nombre}
              </h3>
              <p className="text-mist/60 text-sm">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}