import SectionHeading from './SectionHeading'
import { howItWorks } from '../../data/landingContent'
import { Icon } from './Icons'

function StepIllustration({ type }) {
  if (type === 'profile') {
    return <div className="step-illustration step-illustration--profile" aria-hidden="true"><span /><i /><i /><i /><i /><b>Ваш ритм</b><em>15 минут</em></div>
  }
  if (type === 'plan') {
    return <div className="step-illustration step-illustration--plan" aria-hidden="true"><span /><i /><i /><i /><b>План дня</b><em>3 варианта</em></div>
  }
  return <div className="step-illustration step-illustration--adapt" aria-hidden="true"><span><Icon name="swap" size={28} /></span><i /><i /><i /><b>Планы изменились</b><em>Вариант найден</em></div>
}

export default function HowItWorksSection() {
  return (
    <section className="section how-section" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading eyebrow="Как это работает" id="how-title" title="Система, которая начинает с вашей реальности." align="center" />
        <ol className="steps-grid">
          {howItWorks.map((step) => (
            <li className="step-card" key={step.number}>
              <div className="step-card-head"><span>{step.number}</span><span className="step-line" /></div>
              <StepIllustration type={step.illustration} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
