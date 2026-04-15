"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./CopyButton.module.css"
import { Button } from "../button/Button"

export type CopyButtonProps = {
  value: string
  label?: string
  copiedLabel?: string
  className?: string
  onCopy?: () => void
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  textarea.style.pointerEvents = "none"
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  document.body.removeChild(textarea)
}

export function CopyButton({
  value,
  label = "コピーする",
  copiedLabel = "コピーしました",
  className,
  onCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  async function handleClick() {
    try {
      await copyToClipboard(value)
      setCopied(true)
      onCopy?.()

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Failed to copy text:", error)
    }
  }

  return (
    <div className={styles.root}>
      <Button
        className={`${styles.button} ${className ?? ""}`}
        onClick={handleClick}>
        {label}
      </Button>

      <p
        className={`${styles.feedback} ${copied ? styles.feedbackVisible : ""}`}
        aria-live="polite">
        {copiedLabel}
      </p>
    </div>
  )
}

