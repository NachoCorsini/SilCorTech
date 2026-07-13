const casos = [
  {
    negocio: "Estudio Contable Rivas",
    resultado: "Web institucional + sistema de turnos online",
  },
  {
    negocio: "Distribuidora Norte",
    resultado: "Catálogo digital + integración con WhatsApp",
  },
];

export default function Casos() {
  return (
    <section id="casos" className="bg-graphite py-24 text-mist scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-semibold mb-12">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((c) => (
            <div
              key={c.negocio}
              className="border border-mist/15 rounded-xl p-8 hover:border-cobalt/60 transition-colors"
            >
              <h3 className="font-display text-xl font-semibold text-amber mb-2">
                {c.negocio}
              </h3>
              <p className="text-mist/70 text-sm">{c.resultado}</p>
            </div>
          ))}
        </div>

        <p className="text-mist/40 text-xs font-mono mt-8">
          * Casos de referencia — reemplazar por proyectos reales apenas los tengan.
        </p>
      </div>
    </section>
  );
}
