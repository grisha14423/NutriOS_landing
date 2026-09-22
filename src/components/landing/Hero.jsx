import PrimaryCta from './PrimaryCta'
import AppShellPreview from './AppShellPreview'
import { Icon } from './Icons'

export default function Hero({ onPrimaryCta }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--hero"><Icon name="spark" size={15} /> Personal Nutrition OS</p>
          <h1 id="hero-title">Питание, которое<br className="desktop-break" /> работает в <em>реальной</em><br className="desktop-break" /> жизни.</h1>
          <p className="hero-description">NutriOS помогает планировать еду с учётом ваших целей, вкусов, ограничений и повседневного ритма.</p>
          <div className="hero-actions">
            <PrimaryCta onClick={onPrimaryCta}>Попробовать NutriOS</PrimaryCta>
            <p id="hero-cta-note">Без жёстких диет и чувства вины.</p>
          </div>
          <div className="hero-principles" aria-label="Принципы NutriOS">
            <span><Icon name="check" size={16} /> Учитывает ваш контекст</span>
            <span><Icon name="check" size={16} /> Меняется вместе с планами</span>
          </div>
        </div>
        <AppShellPreview />
      </div>
    </section>
  )
}
