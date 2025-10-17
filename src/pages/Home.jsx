import { useEffect, useState } from "react"
import Section from "../components/Section"
import Card from "../components/Card"

export default function Home() {
  const API = import.meta.env.VITE_API_URL
  const [electronics, setElectronics] = useState([])
  const [mens, setMens] = useState([])
  const [womens, setWomens] = useState([])

  useEffect(()=> {
      fetch(`${API}/products/category/electronics`)
    .then(res => res.json())
    .then(data => setElectronics(data))

      fetch(`${API}/products/category/men's clothing`)
    .then(res => res.json())
    .then(data => setMens(data))

      fetch(`${API}/products/category/women's clothing`)
    .then(res => res.json())
    .then(data => setWomens(data))
  }, [])

 
  return (
  <div className="p-6 flex-1 center">
    <Section title="Eletrônicos" subtitle="Produtos em destaque">
      {electronics.map(item => (
        <Card {...item} key={item.id} />
      ))}
    </Section>
 
    <Section title="Roupas Masculinas" subtitle="Produtos em destaque">
      {mens.map(item => (
        <Card {...item} key={item.id} />
       
      ))}
    </Section>
 
    <Section title="Roupas Femininas" subtitle="Produtos em destaque">
      {womens.map(item => (
        <Card {...item} key={item.id} />
      ))}
    </Section>
  </div>
);
}