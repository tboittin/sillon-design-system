import { useEffect, useState } from 'react'
import { siteName, navLinks } from '../data/content'
import { useDarkMode } from '../hooks/useDarkMode'
import { CloseIcon, FurrowMark, MenuIcon, MoonIcon, SunIcon, ArrowUpRightIcon } from '../lib/icons'
import { Button } from './ui/Button'

/* ============================================================================
   Header — fixe, flou au défilement, logo + menu + CTA contact + thème.
   Mobile-first : burger avec panneau déroulant, cibles ≥ 44px.
   ========================================================================== */

export function Header() {
  const { dark, toggle } = useDarkMode()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-surface/85 backdrop-blur-md transition-all duration-300 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5" aria-label={`${siteName} — retour à l’accueil`}>
          <FurrowMark className="size-7 text-accent transition-transform duration-300 group-hover:rotate-3" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">{siteName}</span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Bascule clair / sombre */}
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? 'Activer le thème clair' : 'Activer le thème sombre'}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/8 hover:text-ink"
          >
            {dark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
          </button>

          <Button href="#contact" size="sm" className="hidden md:inline-flex" iconRight={<ArrowUpRightIcon />}>
            Contact
          </Button>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/8 md:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      {open && (
        <div id="menu-mobile" className="border-t border-line bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-lg text-ink transition-colors hover:bg-accent/10"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" size="md" className="mt-3" iconRight={<ArrowUpRightIcon />}>
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}