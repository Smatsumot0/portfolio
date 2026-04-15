import styles from "./Thumbnail.module.css"
import clsx from "clsx"

export type ThumbnailProps = {
  src?: string
}

export function Thumbnail({ src }: ThumbnailProps) {
  if (src) {
    return <div className={styles.root}></div>
  }

  return (
    <div className={clsx(styles.root, styles.comingSoon)}>
      <svg
        className={styles.waveBack}
        viewBox="0 0 800 450"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,120 C180,70 300,70 420,120 C540,170 660,170 800,120 L800,450 L0,450 Z" />
      </svg>

      <svg
        className={styles.waveFront}
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,120 C160,60 320,90 420,120 C520,150 680,160 800,110 L800,600 L0,600 Z" />
      </svg>
    </div>
  )
}

