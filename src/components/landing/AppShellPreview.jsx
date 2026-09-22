import { useState } from 'react'
import { Icon } from './Icons'

const menu = [
  ['grid', 'Сегодня'],
  ['calendar', 'План'],
  ['bulb', 'Идеи'],
  ['chart', 'История'],
  ['spark', 'Наблюдения'],
  ['user', 'Профиль'],
]

const states = {
  compact: {
    switchLabel: 'Мало времени',
    meal: 'Обед · 15 минут',
    title: 'Боул с нутом и овощами',
    tags: ['из продуктов дома', 'без молочных продуктов'],
    tip: 'Нет нута? Попробуйте фасоль или чечевицу.',
  },
  relaxed: {
    switchLabel: 'Есть время',
    meal: 'Обед · 35 минут',
    title: 'Тёплая тарелка с овощами и крупой',
    tags: ['спокойный темп', 'можно приготовить на завтра'],
    tip: 'Хотите другой вариант? Можно собрать тарелку из того, что уже есть дома.',
  },
}

export default function AppShellPreview() {
  const [mode, setMode] = useState('compact')
  const [showReplacement, setShowReplacement] = useState(false)
  const current = states[mode]

  const changeMode = () => {
    setMode((value) => (value === 'compact' ? 'relaxed' : 'compact'))
    setShowReplacement(false)
  }

  return (
    <div className="app-preview-wrap">
      <span className="preview-orbit preview-orbit--one" aria-hidden="true" />
      <span className="preview-orbit preview-orbit--two" aria-hidden="true" />
      <div className="app-preview" aria-label="Демонстрация интерфейса NutriOS">
        <aside className="app-sidebar" aria-label="Разделы будущего приложения">
          <div className="app-logo-mark" aria-hidden="true"><i /><i /><i /></div>
          <nav>
            {menu.map(([icon, label], index) => (
              <span className={`app-nav-item ${index === 0 ? 'is-active' : ''}`} key={label}>
                <Icon name={icon} size={18} />
                <span>{label}</span>
              </span>
            ))}
          </nav>
          <span className="sidebar-plus" aria-hidden="true"><Icon name="plus" size={18} /></span>
        </aside>
        <div className="app-main">
          <div className="app-topline">
            <div>
              <span className="app-kicker">Вторник, 12 сентября</span>
              <h3>Доброе утро, Маша</h3>
            </div>
            <button type="button" className="mode-toggle" onClick={changeMode} aria-label={`Сменить контекст. Сейчас: ${current.switchLabel}`}>
              <span className="mode-dot" aria-hidden="true" />
              {current.switchLabel}
              <Icon name="chevron" size={15} />
            </button>
          </div>
          <div className="daily-path" aria-hidden="true">
            <span className="path-dot is-complete" />
            <span className="path-line" />
            <span className="path-dot is-current" />
            <span className="path-line" />
            <span className="path-dot" />
          </div>
          <p className="path-labels" aria-hidden="true"><span>Завтрак</span><span>Обед</span><span>Вечер</span></p>
          <article className="meal-card">
            <div className="meal-card-top">
              <p><Icon name="clock" size={15} /> {current.meal}</p>
              <span className="meal-more" aria-hidden="true">•••</span>
            </div>
            <div className="meal-visual" aria-hidden="true">
              <span className="bowl bowl--large" />
              <span className="bowl-leaf bowl-leaf--one" />
              <span className="bowl-leaf bowl-leaf--two" />
              <span className="bowl-seed bowl-seed--one" />
              <span className="bowl-seed bowl-seed--two" />
            </div>
            <h4>{current.title}</h4>
            <div className="meal-tags">
              {current.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <button className="replacement-button" type="button" onClick={() => setShowReplacement((value) => !value)} aria-expanded={showReplacement}>
              {showReplacement ? 'Скрыть замену' : 'Показать замену'}
              <Icon name="arrow" size={16} />
            </button>
          </article>
          <div className={`assistant-note ${showReplacement ? 'is-visible' : ''}`} aria-live="polite">
            <span className="assistant-spark"><Icon name="spark" size={15} /></span>
            <p>{showReplacement ? current.tip : 'План можно менять — он не должен быть идеальным.'}</p>
          </div>
        </div>
      </div>
      <p className="preview-caption"><span aria-hidden="true" /> Сценарий в приложении · демонстрация</p>
    </div>
  )
}
