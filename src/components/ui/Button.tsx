import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'

/* ============================================================================
   Button — primaire (accent), outline, soft, ghost · tailles sm/md/lg.
   Rendu <a> dès que `href` est fourni (CTA, liens).
   Classes écrites en clair (Tailwind v4 ne scanne pas les chaînes dynamiques).
   ========================================================================== */

export type ButtonVariant = 'primary' | 'outline' | 'soft' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconRight?: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined }
type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-paper-50 hover:bg-accent-strong shadow-paper dark:text-forest-950',
  outline: 'border border-ink/25 text-ink hover:border-accent hover:text-accent',
  soft: 'bg-accent-soft text-accent-strong hover:bg-accent/20',
  ghost: 'text-ink-soft hover:text-accent hover:bg-accent/8',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'gap-1.5 px-3.5 py-2 text-sm',
  md: 'gap-2 px-5 py-2.5 text-[15px]',
  lg: 'gap-2.5 px-7 py-3.5 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, iconRight, children, className = '', ...props },
  ref,
) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  const content = (
    <>
      {icon && <span className="shrink-0 [&>svg]:size-[1.15em]">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0 [&>svg]:size-[1.15em]">{iconRight}</span>}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsLink
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
      {content}
    </button>
  )
})