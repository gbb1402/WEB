import { useParams, Link } from "react-router-dom";
import cardsData from "./cards.json";
import styles from "./CardDetail.module.css";

export default function CardDetail() {
  const { id } = useParams();
  const card = cardsData.find((c) => c.id === id);

  if (!card) {
    return (
      <div className={styles.container}>
        <Link to="/cards" className={styles.backLink}>
          ← retour
        </Link>
        <h1 className={styles.notFoundTitle}>Carte non trouvé</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/cards" className={styles.backLink}>
        ← retour
      </Link>

      <div className={styles.cardGrid}>
        <div className={styles.cardImageWrapper}>
          <img
            src={card.images?.large || "https://via.placeholder.com/400x500"}
            alt={card.name}
            className={styles.cardImage}
          />
        </div>

        <div className={styles.cardDetails}>
          <h1 className={styles.cardTitle}>{card.name}</h1>
          <div className={styles.infoGrid}>
            <InfoBlock title="Rarity" value={card.rarity} />
            <InfoBlock title="Type" value={card.type} />
            <InfoBlock title="Power" value={card.power ?? "N/A"} />
            <InfoBlock title="Cost" value={card.cost ?? "N/A"} />
            <InfoBlock title="Color" value={card.color ?? "N/A"} />
            <InfoBlock title="Family" value={card.family ?? "N/A"} />
          </div>

          {card.ability && (
            <div className={styles.abilityBlock}>
              <h3 className={styles.blockTitle}>Abilité</h3>
              <p className={styles.blockContent}>{card.ability}</p>
            </div>
          )}

          {card.trigger && (
            <div className={styles.triggerBlock}>
              <h3 className={styles.blockTitle}>Déclencheur</h3>
              <p className={styles.blockContent}>{card.trigger}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, value }) {
  return (
    <div className={styles.infoBlock}>
      <h3 className={styles.infoTitle}>{title}</h3>
      <p className={styles.infoValue}>{value}</p>
    </div>
  );
}
