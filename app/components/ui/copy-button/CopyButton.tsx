"use client"

import { useState } from "react"
import { Button, ButtonProps } from "../button/Button"
import { useToast } from "../toast"

export type CopyButtonProps = {
  value: string
  copiedMessage?: string
  errorMessage?: string
  emptyMessage?: string
  onCopy?: (value: string) => void
} & Omit<ButtonProps, "type" | "onClick">

export function CopyButton({
  value,
  children,
  copiedMessage = "コピーしました",
  errorMessage = "コピーに失敗しました",
  emptyMessage = "コピーする内容がありません",
  className,
  onCopy,
}: CopyButtonProps) {
  const { showToast } = useToast()
  const [isCopying, setIsCopying] = useState(false)

  async function handleClick() {
    if (isCopying) return

    if (!value) {
      showToast(emptyMessage, { type: "error" })
      return
    }

    setIsCopying(true)
    try {
      await navigator.clipboard.writeText(value)
      onCopy?.(value)
      showToast(copiedMessage, { type: "success" })
    } catch (error) {
      console.error("Failed to copy text:", error)
      showToast(errorMessage, { type: "error" })
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <Button
      className={className}
      type="button"
      onClick={handleClick}
      disabled={isCopying}>
      {children ?? "コピーする"}
    </Button>
  )
}

