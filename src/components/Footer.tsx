import { contact, footer, navLinks, siteName, siteTagline } from '../data/content'
import { ArrowUpRightIcon, FurrowMark, GithubIcon, LinkedinIcon, MailIcon } from '../lib/icons'
import { RevealGroup, RevealItem } from './ui/Reveal'

/* ============================================================================
   Footer — forêt profonde (contraste inversé), marque, navigation, contact.
   Les trois colonnes se révèlent en cascade douce au scroll.
   ========================================================================== */

export function Footer() {
  return (
    <footer className="bg-forest-950 text-paper-100">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <RevealGroup as="div" className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]" stagger={0.1}>
          {/* Marque */}
          <RevealItem as="div">
            <a href="#" className="flex items-center gap-2.5" aria-label={`${siteName} — retour à l’accueil`}>
              <FurrowMark className="size-7 text-forest-300" />
              <span className="font-display text-xl font-semibold tracking-tight text-paper-50">{siteName}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper-200/70">{footer.tagline}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-forest-300">{siteTagline}</p>
          </RevealItem>

          {/* Navigation */}
          <RevealItem as="nav" aria-label="Navigation pied de page">
            <h3 className="legend text-forest-300">{footer.navTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-paper-100/80 transition-colors hover:text-forest-300">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-paper-100/80 transition-colors hover:text-forest-300">
                  Contact
                </a>
              </li>
            </ul>
          </RevealItem>

          {/* Contact & réseaux */}
          <RevealItem as="div">
            <h3 className="legend text-forest-300">{footer.contactTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 font-mono text-sm text-paper-100/80 transition-colors hover:text-forest-300">
                  <MailIcon className="size-4" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex size-10 items-center justify-center rounded-full border border-paper-100/25 text-paper-100/85 transition-all hover:border-forest-300 hover:text-forest-300"
                >
                  <GithubIcon className="size-4.5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full border border-paper-100/25 text-paper-100/85 transition-all hover:border-forest-300 hover:text-forest-300"
                >
                  <LinkedinIcon className="size-4.5" />
                </a>
              </li>
            </ul>
          </RevealItem>
        </RevealGroup>

        {/* Barre basse */}
        <div className="mt-14 flex flex-col gap-4 border-t border-paper-100/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-paper-200/50">{footer.bottom}</p>
          <div className="flex items-center gap-5">
            {footer.legal.map((label) => (
              <a key={label} href="#" className="font-mono text-xs text-paper-200/50 transition-colors hover:text-forest-300">
                {label}
              </a>
            ))}
            <a href="#" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-forest-300 transition-colors hover:text-paper-50">
              {footer.backToTop}
              <ArrowUpRightIcon className="size-3.5 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}