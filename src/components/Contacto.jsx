export default function Contacto() {
  return (
    <section id="contacto" className="bg-graphite text-mist py-24 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-semibold mb-4">
          Hablanos de tu proyecto
        </h2>
        <p className="text-mist/70 mb-8">
          Contanos qué necesitás y te respondemos por WhatsApp al instante.
        </p>
        <a
          href="https://wa.me/3564612478"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-cobalt text-mist font-body font-semibold px-8 py-4 rounded-full hover:bg-amber hover:text-graphite transition-colors"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}
