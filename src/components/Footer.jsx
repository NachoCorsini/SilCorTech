export default function Footer() {
  return (
    <footer className="py-8 border-t border-graphite/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-graphite/50">
        <span className="font-display">
          SilCor<span className="text-cobalt"> Tech</span>
        </span>
        <span>© {new Date().getFullYear()}</span>
        <a href="https://instagram.com/SilCorTech" target="_blank" rel="noreferrer" className="hover:text-cobalt transition-colors" aria-label="Instagram de SilCor Tech">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}