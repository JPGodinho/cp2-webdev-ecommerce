import Card from "./Card"
export default function Section({ title, subtitle,children}) {
  return (
    <section>
      <div className=" bg-black text-white section banner">
        <div>
          <h2>{title}</h2>
          <p className="muted">{subtitle}</p>
        </div>
      </div>
      <div className="cards grid grid-cols-3">
        {children}
      </div>
    </section>
  )
}