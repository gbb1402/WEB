import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>One Piece TCG</h3>
            <p className={styles.text}>
              Votre destination ultime pour les actualités, les stratégies et les informations
              sur les cartes du jeu de cartes à collectionner One Piece.
            </p>
          </div>
          
          {/* Colonne centrale vide */}
          <div></div>
          
          <div className={styles.column}>
            <h3 className={styles.title}>Rejoignez nous</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://twitter.com/onepiece_tcg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Twitter
              </a>
              <a 
                href="https://www.youtube.com/@ONEPIECE_tcg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                YouTube
              </a>
              <a 
                href="https://www.instagram.com/onepiece_tcg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <p>&copy; 2024 One Piece TCG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
