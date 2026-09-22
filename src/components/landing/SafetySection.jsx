import SectionHeading from './SectionHeading'
import { safetyItems } from '../../data/landingContent'
import { Icon } from './Icons'

export default function SafetySection() {
  return (
    <section className="section safety-section" id="safety" aria-labelledby="safety-title">
      <div className="container safety-layout">
        <div className="safety-icon" aria-hidden="true"><span><Icon name="check" size={30} strokeWidth={2} /></span></div>
        <div className="safety-content">
          <SectionHeading
            eyebrow="Ясные границы"
            id="safety-title"
            title="Поддержка в повседневном питании — с ясными границами."
            description="NutriOS — wellness- и education-инструмент для планирования питания. Он не заменяет врача, диетолога или другую квалифицированную медицинскую помощь."
          />
          <ul className="safety-list">
            {safetyItems.map((item) => <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
