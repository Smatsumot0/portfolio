import { Wave } from "./wave/Wave"
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© 2026 S.Matsumoto</p>
      <Wave />
    </footer>
  )
}

