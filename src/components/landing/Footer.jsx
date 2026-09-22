import { navigation } from '../../data/landingContent'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <a className="brand brand--footer" href="#main-content" aria-label="NutriOS — перейти к содержимому">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>NutriOS</span>
          </a>
          <p>Personal Nutrition OS<br />для реальной жизни.</p>
        </div>
        <nav aria-label="Навигация в подвале">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>NutriOS не предоставляет медицинских консультаций, не ставит диагнозы и не заменяет обращение к специалисту.</p>
        <p>© {new Date().getFullYear()} NutriOS</p>
      </div>
    </footer>
  )
}
