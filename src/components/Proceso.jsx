const pasos = [
  {
    titulo: "Diagnóstico",
    descripcion: "Charlamos sobre tu negocio y vemos qué necesita primero.",
  },
  {
    titulo: "Propuesta",
    descripcion: "Te mostramos un plan y precio cerrado, sin sorpresas.",
  },
  {
    titulo: "Desarrollo y entrega",
    descripcion: "Construimos, testeamos y lanzamos, con seguimiento post-entrega.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-semibold text-graphite mb-12">
          Cómo trabajamos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso, i) => (
            <div key={paso.titulo} className="relative pl-6 border-l-2 border-cobalt/40">
              <span className="font-mono text-cobalt text-sm">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-graphite mt-1 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-graphite/60 text-sm">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
