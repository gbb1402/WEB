import React from 'react'
import styles from './Rules.module.css'

export default function Rules() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game Rules</h1>
      
      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Rules</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Game Setup</h3>
            <p className={styles.text}>Each player needs:</p>
            <ul className={styles.list}>
              <li>1 Leader card</li>
              <li>50-card deck</li>
              <li>Life cards</li>
            </ul>
          </div>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Turn Structure</h3>
            <ol className={styles.orderedList}>
              <li>Draw Phase</li>
              <li>DON!! Phase</li>
              <li>Main Phase</li>
              <li>End Phase</li>
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Types</h2>
          <div className={`${styles.grid} ${styles.cardTypesGrid}`}>
            <div>
              <h3 className={styles.subsectionTitle}>Leader</h3>
              <p className={styles.text}>Your deck's commander that starts in play and provides unique abilities.</p>
            </div>
            <div>
              <h3 className={styles.subsectionTitle}>Character</h3>
              <p className={styles.text}>Cards that can attack, block, and use special abilities.</p>
            </div>
            <div>
              <h3 className={styles.subsectionTitle}>Event</h3>
              <p className={styles.text}>One-time effects that can be played from your hand.</p>
            </div>
            <div>
              <h3 className={styles.subsectionTitle}>Stage</h3>
              <p className={styles.text}>Cards that provide continuous effects while in play.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Winning the Game</h2>
          <p className={styles.text}>
            You can win the game by either:
          </p>
          <ul className={styles.list}>
            <li>Reducing your opponent's life cards to 0</li>
            <li>Your opponent being unable to draw when required</li>
            <li>Achieving specific card-stated victory conditions</li>
          </ul>
        </section>
      </div>
    </div>
  )
}