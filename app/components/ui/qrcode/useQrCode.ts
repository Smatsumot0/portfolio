import { useEffect, useState } from "react"
import QRCode from "qrcode"

export type UseQrCodeOptions = {
  pixelSize: number
  margin?: number
}

export function useQrCode(value: string, options: UseQrCodeOptions) {
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const { pixelSize, margin } = options

  useEffect(() => {
    let isMounted = true

    async function generate() {
      try {
        setIsLoading(true)
        setHasError(false)

        const url = await QRCode.toDataURL(value, {
          width: pixelSize,
          margin: margin ?? 1,
        })

        if (!isMounted) return
        setImageUrl(url)
      } catch (error) {
        console.error("Failed to generate QR code:", error)

        if (!isMounted) return
        setHasError(true)
        setImageUrl("")
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    generate()

    return () => {
      isMounted = false
    }
  }, [value, pixelSize, margin])

  return {
    imageUrl,
    isLoading,
    hasError,
  }
}

