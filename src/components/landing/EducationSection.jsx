import SectionHeading from './SectionHeading'
import { educationItems } from '../../data/landingContent'
import { Icon } from './Icons'

export default function EducationSection() {
  return (
    <section className="section education-section" aria-labelledby="education-title">
      <div className="container education-grid">
        <div className="education-copy">
          <SectionHeading
            eyebrow="Мягкое обучение"
            id="education-title"
            title="Не только предлагает. Помогает понимать."
            description="Короткие понятные объяснения помогают увереннее собирать приёмы пищи, выбирать замены и замечать собственные привычки."
          />
          <p className="education-disclaimer"><Icon name="spark" size={16} /> Это общая образовательная информация, а не медицинская консультация.</p>
        </div>
        <div className="education-panel">
          <p className="education-panel-kicker">Небольшие знания на каждый день</p>
          <ul>
            {educationItems.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><p>{item}</p><Icon name="arrow" size={17} /></li>
            ))}
          </ul>
          <div className="education-panel-quote"><Icon name="bulb" size={20} /><p>Не нужно знать всё о питании, чтобы сделать следующий подходящий выбор.</p></div>
        </div>
      </div>
    </section>
  )
}
