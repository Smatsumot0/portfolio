"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { Toast, ToastType } from "./Toast"

type ShowToastOptions = {
  type?: ToastType
  duration?: number
}

type ToastContextValue = {
  showToast: (message: string, options?: ShowToastOptions) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

type ToastProviderProps = {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState<string | null>(null)
  const [type, setType] = useState<ToastType>("success")

  const showToast = useCallback(
    (nextMessage: string, options?: ShowToastOptions) => {
      const nextType = options?.type ?? "success"

      setMessage(null)

      window.setTimeout(() => {
        setMessage(nextMessage)
        setType(nextType)
      }, 0)
    },
    [],
  )

  const value = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast message={message} type={type} />
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider")
  }

  return context
}

