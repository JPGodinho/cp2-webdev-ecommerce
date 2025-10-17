export default function Card({ price, title, image }) {
  const prices = new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(price)
  return (
    <div className="bg-purple-800 p-4 rounded-lg flex items-center mb-2 border-2 border-b-blue-50 m-2">
      <div className="w-20 h-25 mr-2">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <div className="title ">{title}</div>
        <div className="row">
          <span className="price">{prices}</span>
        </div>
        <button className="bg-black py-2 px-8 rounded-lg">Detalhes</button>
      </div>
    </div>
  )
}