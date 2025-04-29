import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>On dirait que cette page s'est perdu dans Grand line !</p>
      <img
        src="https://64.media.tumblr.com/155e19dd4b4064101fa18ef3e5091899/tumblr_ossumyDsUF1qc4c1zo1_r4_500.gif"
        alt="Lost at sea"
        className={styles.image}
      />
      <p className={styles.text}>Même l'Eternal Pose ne peux pas trouver cette page...</p>
    </div>
  )
}