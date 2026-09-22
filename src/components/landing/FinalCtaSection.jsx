import PrimaryCta from './PrimaryCta'
import { Icon } from './Icons'

export default function FinalCtaSection({ onPrimaryCta }) {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <div className="container final-cta-inner">
        <span className="final-leaf final-leaf--one" aria-hidden="true" />
        <span className="final-leaf final-leaf--two" aria-hidden="true" />
        <div className="final-cta-copy">
          <p className="eyebrow eyebrow--light"><Icon name="spark" size={15} /> Ваш следующий небольшой шаг</p>
          <h2 id="final-cta-title">Соберите свою<br /> систему питания.</h2>
          <p>Начните с того, как вы живёте сейчас: времени, вкусов, привычек и продуктов дома.</p>
          <PrimaryCta className="primary-cta--light" onClick={onPrimaryCta}>Начать с моего ритма</PrimaryCta>
          <small>Общие wellness- и образовательные рекомендации. Не медицинская услуга.</small>
        </div>
        <div className="final-cta-plan" aria-hidden="true">
          <div className="final-plan-head">
            <span><Icon name="grid" size={18} /></span>
            <div><small>Сегодня</small><strong>Ваш ритм</strong></div>
            <i>готово</i>
          </div>
          <div className="final-plan-body">
            <p>Следующий приём пищи</p>
            <div className="final-meal-row">
              <span className="final-meal-art"><i /><i /><i /></span>
              <div><strong>Ужин без спешки</strong><small>2 подходящих варианта</small></div>
              <Icon name="arrow" size={17} />
            </div>
            <div className="final-plan-context"><Icon name="spark" size={15} /><span>Учли время, продукты дома и ваш день</span></div>
          </div>
          <div className="final-plan-tabs"><span className="is-active"><Icon name="grid" size={15} /> Сегодня</span><span><Icon name="calendar" size={15} /> План</span><span><Icon name="bulb" size={15} /> Идеи</span></div>
        </div>
      </div>
    </section>
  )
}
