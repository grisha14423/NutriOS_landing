import SectionHeading from './SectionHeading'
import { profileTags } from '../../data/landingContent'
import { Icon } from './Icons'

export default function PersonalizationSection() {
  return (
    <section className="section personalization-section" aria-labelledby="personalization-title">
      <div className="container personalization-grid">
        <div className="personalization-copy">
          <SectionHeading
            eyebrow="Персонализация"
            id="personalization-title"
            title="План строится вокруг вас, а не вокруг усреднённого меню."
            description="NutriOS собирает только те вводные, которые делают ежедневные решения о еде удобнее."
          />
          <p className="personalization-footnote"><Icon name="check" size={17} /> Вы сами решаете, чем делиться и что важно учитывать.</p>
        </div>
        <div className="profile-preview" aria-label="Демонстрация профиля NutriOS">
          <div className="profile-preview-top"><span className="profile-dot" aria-hidden="true" /><div><p>Ваш профиль</p><span>Основа вашего плана</span></div><Icon name="user" size={21} /></div>
          <div className="profile-preview-body">
            <p>Что NutriOS будет учитывать</p>
            <div className="tag-cloud">
              {profileTags.map((tag, index) => <span className={`profile-tag profile-tag--${index + 1}`} key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="profile-preview-bottom"><span><Icon name="spark" size={16} /> Можно менять в любой момент</span><Icon name="arrow" size={17} /></div>
        </div>
      </div>
    </section>
  )
}
