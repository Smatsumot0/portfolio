"use client"

import styles from "./QrCode.module.css"
import Image from "next/image"
import clsx from "clsx"
import { useQrCode } from "./useQrCode"

const sizeMap = {
  small: 100,
  medium: 140,
  large: 180,
} as const

type QrCodeSize = keyof typeof sizeMap

export type QrCodeProps = {
  value: string
  alt: string
  title?: string
  description?: React.ReactNode
  size?: QrCodeSize
  className?: string
}

export function QrCode({
  value,
  alt,
  title = "QRコード",
  description,
  size = "medium",
  className,
}: QrCodeProps) {
  const pixelSize = sizeMap[size]
  const { imageUrl } = useQrCode(value, { pixelSize })

  return (
    <div className={clsx(styles.root, className)}>
      <p className={styles.title}>{title}</p>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          className={styles.image}
          width={pixelSize}
          height={pixelSize}
        />
      ) : (
        <div
          className={styles.placeholder}
          style={{ width: pixelSize, height: pixelSize }}
          aria-hidden="true"
        />
      )}

      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
    </div>
  )
}

