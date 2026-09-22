import SectionHeading from './SectionHeading'
import { dayTimeline } from '../../data/landingContent'
import { Icon } from './Icons'

export default function DayInNutriOSSection() {
  return (
    <section className="section day-section" aria-labelledby="day-title">
      <div className="container">
        <SectionHeading eyebrow="Один день с NutriOS" id="day-title" title="Один день — много вариантов. Без ощущения, что всё сорвалось." align="center" />
        <ol className="day-timeline">
          {dayTimeline.map((item, index) => (
            <li className={`timeline-item timeline-item--${item.color}`} key={item.time}>
              <div className="timeline-time"><span className="timeline-number">0{index + 1}</span><span>{item.time}</span></div>
              <span className="timeline-node" aria-hidden="true"><Icon name={index === 0 ? 'spark' : index === 1 ? 'swap' : 'note'} size={17} /></span>
              <div className="timeline-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
