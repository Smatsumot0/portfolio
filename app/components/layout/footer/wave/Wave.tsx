import styles from "./Wave.module.css"

export function Wave() {
  return (
    <div className={styles.waveLayer}>
      <svg
        className={`${styles.wave} ${styles.waveFront}`}
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path
          d="
          M0 72
          C120 56, 240 58, 360 78
          C500 102, 640 100, 760 76
          C860 56, 960 60, 1040 78
          C1100 92, 1150 96, 1200 92
          L1200 220
          L0 220
          Z
        "
        />
      </svg>

      <svg
        className={`${styles.wave} ${styles.waveBack}`}
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path
          d="
          M0 86
          C140 44, 280 46, 390 88
          C500 130, 660 132, 810 90
          C920 60, 1030 66, 1120 90
          C1160 100, 1185 106, 1200 110
          L1200 220
          L0 220
          Z
        "
        />
      </svg>

      <svg
        className={`${styles.wave} ${styles.waveBase}`}
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path
          d="
          M0 64
          C130 42, 250 48, 360 72
          C490 100, 650 102, 780 80
          C900 60, 1010 66, 1110 84
          C1150 92, 1180 106, 1200 118
          L1200 220
          L0 220
          Z
        "
        />
      </svg>
    </div>
  )
}

