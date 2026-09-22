export default function SectionHeading({ eyebrow, title, description, align = 'left', id }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}
