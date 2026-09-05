import { useState, type FormEvent } from 'react'
import { contact } from '../data/content'
import { CheckIcon, MailIcon, MapPinIcon, SendIcon } from '../lib/icons'
import { SectionHeader } from './ui/SectionHeader'
import { Button } from './ui/Button'
import { StatusDot } from './ui/Badge'
import { Reveal } from './ui/Reveal'

/* ============================================================================
   Contact — formulaire simple (démo, sans backend) + coordonnées.
   Soumission -> état de confirmation inline, sans popup.
   Les deux colonnes se révèlent au scroll.
   ========================================================================== */

const inputClasses =
  'w-full rounded-xl border border-line bg-surface-raised px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/60 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25'

const labelClasses = 'mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface-sunken py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-8">
        {/* Présentation + coordonnées */}
        <Reveal as="div" delay={0.05}>
          <SectionHeader eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />

          <ul className="mt-10 flex flex-col gap-5">
            <li className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                <MailIcon className="size-4.5" />
              </span>
              <a href={`mailto:${contact.email}`} className="font-mono text-sm text-ink transition-colors hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bark-soft text-bark-600 dark:text-bark-300">
                <MapPinIcon className="size-4.5" />
              </span>
              <span className="text-sm text-ink">{contact.location}</span>
            </li>
            <li className="flex items-center gap-3.5">
              <StatusDot color="bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{contact.availability}</span>
            </li>
          </ul>
        </Reveal>

        {/* Formulaire */}
        <Reveal as="div" delay={0.15} className="rounded-2xl border border-line bg-surface-raised p-7 shadow-paper md:p-9">
          {sent ? (
            <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                <CheckIcon className="size-7" />
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">{contact.form.successTitle}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{contact.form.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Formulaire de contact">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClasses}>
                    {contact.form.nameLabel}
                  </label>
                  <input id="contact-name" name="name" required placeholder={contact.form.namePlaceholder} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>
                    {contact.form.emailLabel}
                  </label>
                  <input id="contact-email" name="email" type="email" required placeholder={contact.form.emailPlaceholder} className={inputClasses} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClasses}>
                  {contact.form.subjectLabel}
                </label>
                <input id="contact-subject" name="subject" required placeholder={contact.form.subjectPlaceholder} className={inputClasses} />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClasses}>
                  {contact.form.messageLabel}
                </label>
                <textarea id="contact-message" name="message" required rows={5} placeholder={contact.form.messagePlaceholder} className={`${inputClasses} resize-y`} />
              </div>

              <Button type="submit" size="lg" className="self-start" iconRight={<SendIcon />}>
                {contact.form.submit}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}