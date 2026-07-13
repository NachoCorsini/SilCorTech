import { useState } from "react";

export default function Hero() {
  const [pos, setPos] = useState({ x: 400, y: 200 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left - 200,
      y: e.clientY - rect.top - 200,
    });
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="mouse-blob"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cobalt mb-4">
            Estudio de desarrollo · dos programadores, un objetivo
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-graphite">
            Software a medida para negocios
            <br />
            que se animan a lo digital.
          </h1>
          <p className="mt-6 text-graphite/70 text-lg max-w-md">
            Enfocate en tu negocio. De lo digital, nos encargamos nosotros.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="bg-cobalt text-mist font-body font-medium px-6 py-3 rounded-full hover:bg-cobalt-dark transition-colors">
              Contanos tu proyecto
            </a>
            <a href="#servicios" className="border border-graphite/20 text-graphite font-body font-medium px-6 py-3 rounded-full hover:border-graphite transition-colors">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] flex items-center justify-center">
          <div className="w-full h-full bg-graphite rounded-xl shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-mist/10">
              <span className="w-3 h-3 rounded-full bg-amber/70" />
              <span className="w-3 h-3 rounded-full bg-cobalt/70" />
              <span className="w-3 h-3 rounded-full bg-mist/30" />
              <span className="ml-2 text-mist/40 text-xs">deploy.sh</span>
            </div>
            <div className="p-6 space-y-2 text-mist/80">
              <p><span className="text-cobalt">$</span> analizando tu negocio...</p>
              <p><span className="text-cobalt">$</span> definiendo prioridades...</p>
              <p><span className="text-cobalt">$</span> construyendo solución...</p>
              <p className="text-amber">✓ versión digital lista</p>
              <p className="text-mist/40">tiempo estimado: según alcance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}