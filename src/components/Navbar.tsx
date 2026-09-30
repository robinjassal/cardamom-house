interface NavbarProps {
  isOpen: boolean;
  statusLabel: string;
}

export function Navbar({ isOpen, statusLabel }: NavbarProps) {
  return (
    <nav
      className="no-print sticky top-0 z-40 border-b border-stone-100 bg-white/95 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            CH
          </span>
          <span
            className="font-display text-lg font-bold tracking-tight text-ink hidden sm:inline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cardamom House
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <a href="#menu" className="text-brand font-semibold">
            Menu
          </a>
          <a href="#hours-heading" className="hover:text-brand transition-colors">
            Hours
          </a>
          <a
            href="https://instagram.com/cardamomhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Status + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-stone-50 px-2.5 py-1.5 ring-1 ring-stone-200/80">
            <span
              className={`h-2 w-2 rounded-full ${
                isOpen ? "bg-emerald-500" : "bg-stone-400"
              }`}
              aria-hidden
            />
            <span className="text-xs font-medium text-ink max-w-[90px] truncate sm:max-w-none">
              {statusLabel}
            </span>
          </div>
          <a
            href="tel:+351211234567"
            className="hidden sm:inline-flex items-center rounded-full border-2 border-brand px-4 py-1.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
