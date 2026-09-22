import { Icon } from './Icons'

export default function PrimaryCta({ children, onClick, href, className = '', ariaDescribedby }) {
  const content = (
    <>
      <span>{children}</span>
      <Icon name="arrow" size={18} strokeWidth={2} />
    </>
  )

  if (href) {
    return (
      <a className={`primary-cta ${className}`} href={href} aria-describedby={ariaDescribedby}>
        {content}
      </a>
    )
  }

  return (
    <button className={`primary-cta ${className}`} type="button" onClick={onClick} aria-describedby={ariaDescribedby}>
      {content}
    </button>
  )
}
