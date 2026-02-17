import { useEffect, useState } from "react"
import styles from "../../styles/CardSelector.module.css"

export default function CardSelector() {
  const [data, setData] = useState([{}])
  const [loading, setLoading] = useState(true)

  const API_URL = "https://cartas-hecho-a-mano-back-prototype.vercel.app"

  useEffect(() => {
    fetch(`${API_URL}/cards`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) { return <p align="center" >Cargando cartas...</p> }

  return (
    <section className={styles.container}>
      {data.map((card, index) => (

        <a
          key={card.card_id} 
          className={styles.card}
          href={`/order?card=${card.card_id}`}
        >
          <img
            className={styles.image}
            src={`${API_URL}/cards/img/${card.card_id}`}
            alt={card.name}
            loading="lazy"
            fetchPriority="low"
          />
          <p>{card.details}</p>
        </a>
      ))}
    </section>
  );
}