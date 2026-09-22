import SectionHeading from './SectionHeading'
import { problemCards } from '../../data/landingContent'
import { Icon } from './Icons'

const problemVisuals = ['clock', 'bulb', 'route', 'grid']

export default function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeading
          eyebrow="Почему привычные планы ломаются"
          id="problem-title"
          title="Идеальный план не переживает обычный вторник."
          description="Советы часто слишком общие, а трекеры требуют постоянного контроля. Когда меняется день, план питания быстро перестаёт помогать."
        />
        <ul className="problem-grid">
          {problemCards.map((card, index) => (
            <li className="problem-card" key={card.title}>
              <div className="problem-card-top">
                <span className="card-index">{card.marker}</span>
                <span className="problem-card-icon" aria-hidden="true"><Icon name={problemVisuals[index]} size={25} /></span>
              </div>
              <div className={`problem-visual problem-visual--${index + 1}`} aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
