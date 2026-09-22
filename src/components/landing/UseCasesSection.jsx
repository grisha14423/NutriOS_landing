import SectionHeading from './SectionHeading'
import { useCases } from '../../data/landingContent'
import { Icon } from './Icons'

export default function UseCasesSection() {
  return (
    <section className="section use-cases-section" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="use-cases-top">
          <SectionHeading
            eyebrow="Возможности"
            id="features-title"
            title="Помощь в тех моментах, когда она действительно нужна."
          />
          <p className="use-cases-aside">Не новый набор правил.<br />Новая опора в момент выбора.</p>
        </div>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <article className={`use-case-card use-case-card--${index + 1}`} key={useCase.situation}>
              <div className={`use-case-icon use-case-icon--${index + 1}`}>
                {index === 2 ? (
                  <span className="route-visual" aria-hidden="true">
                    <i className="route-point route-point--start" />
                    <i className="route-stroke" />
                    <i className="route-point route-point--finish"><Icon name="check" size={13} /></i>
                  </span>
                ) : <Icon name={useCase.icon} size={27} />}
              </div>
              <p className="use-case-label">Ситуация</p>
              <h3>{useCase.situation}</h3>
              <p className="use-case-response">{useCase.response}</p>
              <div className="use-case-answer"><Icon name="spark" size={15} /><span>{useCase.label}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
