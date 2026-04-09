import type { CSSProperties } from "react"
import styles from "./Splash.module.css"
import { splashDrops } from "./SplashDrops"

type DropStyle = CSSProperties & {
  "--size": string
  "--start-x": string
  "--start-y": string
  "--end-x": string
  "--end-y": string
  "--delay": string
  "--duration": string
  "--drop-color": string
}

export function Splash() {
  // ドロップのサイズに応じて、移動距離やアニメーションのタイミングを調整するためのパラメータ
  const minSize = 4
  const maxSize = 16

  const base = 0.005 // 最小移動量
  const scale = 0.03 // 距離に応じた増加量

  return (
    <div className={styles.splash} aria-hidden="true">
      {splashDrops.map((drop) => {
        // ドロップのサイズを0から1の範囲に正規化
        const sizeRatio = (drop.size - minSize) / (maxSize - minSize)

        const distance = Math.abs(drop.xRatio - 0.5) // ドロップの位置に応じて、移動距離を計算（中央から遠いほど大きくなる）
        const direction = drop.xRatio > 0.5 ? -1 : 1 // ドロップが右側にある場合は左に、左側にある場合は右に移動

        // ドロップのサイズと位置に基づいて、移動距離を計算
        const xOffset = base + distance * scale + sizeRatio * 0.015
        const yOffset = distance * 0.3 + sizeRatio * 0.02

        // ドロップの開始位置を計算
        const startXRatio = drop.xRatio + xOffset * direction
        const startYRatio = drop.yRatio + yOffset

        // ドロップのサイズと位置に基づいて、アニメーションの遅延と持続時間を計算
        const delay = Math.pow(distance, 1.2) * 0.1 + sizeRatio * 0.1
        const duration = 0.5 + distance * 0.2 + sizeRatio * 0.1

        const style: DropStyle = {
          "--size": `${drop.size}px`,
          "--start-x": `${startXRatio * 100}%`,
          "--start-y": `${startYRatio * 100}%`,
          "--end-x": `${drop.xRatio * 100}%`,
          "--end-y": `${drop.yRatio * 100}%`,
          "--delay": `${delay}s`,
          "--duration": `${duration}s`,
          "--drop-color": drop.color,
        }

        return <span key={drop.id} className={styles.drop} style={style} />
      })}
    </div>
  )
}

