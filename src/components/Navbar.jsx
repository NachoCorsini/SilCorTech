export default function Navbar() {
  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajamos", href: "#proceso" },
    { label: "Proyectos", href: "#casos" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-mist/90 backdrop-blur-sm border-b border-graphite/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold tracking-tight text-graphite">
          SilCor<span className="text-cobalt"> Tech</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-graphite/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cobalt transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="font-body text-sm font-medium bg-graphite text-mist px-4 py-2 rounded-full hover:bg-cobalt transition-colors"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
