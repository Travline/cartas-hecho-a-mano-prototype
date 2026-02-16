import { useEffect, useState } from "react"
import styles from "../../styles/CardSelectorModal.module.css"

export default function CardSelectorModal() {
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

  if (loading) { return <p>Está cargando...</p> }

  return (
    <section className={styles.container}>
      {data.map((card, index) => (

        <div 
          key={card.card_id} 
          className={styles.card}
          onClick={() => alert(`card ${card.card_id} selected`)}
          role="button"
        >
          <img
            className={styles.image}
            src={`${API_URL}/cards/img/${card.card_id}`}
            alt={card.name}
            loading="lazy"
            fetchPriority="low"
          />
          <p>{card.details}</p>
        </div>
      ))}
    </section>
  );
}