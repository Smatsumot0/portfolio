"use client"

import clsx from "clsx"
import styles from "./Toast.module.css"

export type ToastType = "success" | "error"

export type ToastViewProps = {
  message: string | null
  type?: ToastType
}

export function Toast({ message, type = "success" }: ToastViewProps) {
  if (!message) return null

  return (
    <div
      className={clsx(styles.root, styles[type])}
      aria-live="polite"
      aria-atomic="true">
      {message}
    </div>
  )
}

