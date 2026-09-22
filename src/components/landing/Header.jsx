import PrimaryCta from './PrimaryCta'
import { navigation } from '../../data/landingContent'

export default function Header({ onPrimaryCta }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#main-content" aria-label="NutriOS — перейти к содержимому">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>NutriOS</span>
        </a>
        <nav className="header-nav" aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <PrimaryCta className="header-cta" onClick={onPrimaryCta}>Попробовать NutriOS</PrimaryCta>
      </div>
    </header>
  )
}
