import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <Link to="/" className={styles.logo}>One Piece TCG</Link>
            
            <button 
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
              <Link to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Accueil</Link>
              <Link to="/cards" className={styles.link} onClick={() => setIsMenuOpen(false)}>Carte</Link>
              <Link to="/rules" className={styles.link} onClick={() => setIsMenuOpen(false)}>Regle</Link>
              <Link to="/beginners" className={styles.link} onClick={() => setIsMenuOpen(false)}>pour débuter</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}