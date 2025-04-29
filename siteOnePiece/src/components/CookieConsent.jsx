import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styles from './CookieConsent.module.css'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 })
    setShow(false)
  }

  if (!show) return null

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>🍪 Nous utilisons des cookies pur améliorer votre expérience utilisateur.</p>
          <p className={styles.description}>En continuant sur ce site, vous acceptez notre utilisation de cookies.</p>
        </div>
        <button
          onClick={acceptCookies}
          className={styles.button}
        >
          Accepter
        </button>
      </div>
    </div>
  )
}