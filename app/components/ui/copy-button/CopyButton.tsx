"use client"

import { Button } from "../button/Button"
import { useToast } from "../toast"

export type CopyButtonProps = {
  value: string
  label?: string
  copiedMessage?: string
  errorMessage?: string
  className?: string
  onCopy?: () => void
}

export function CopyButton({
  value,
  label = "コピーする",
  copiedMessage = "コピーしました",
  errorMessage = "コピーに失敗しました",
  className,
  onCopy,
}: CopyButtonProps) {
  const { showToast } = useToast()

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(value)
      onCopy?.()
      showToast(copiedMessage, { type: "success" })
    } catch (error) {
      console.error("Failed to copy text:", error)
      showToast(errorMessage, { type: "error" })
    }
  }

  return (
    <Button className={className} onClick={handleClick}>
      {label}
    </Button>
  )
}

