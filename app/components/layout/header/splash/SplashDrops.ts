type SplashDrop = {
  id: number
  size: number
  color: string
  xRatio: number
  yRatio: number
}

const colors = ["var(--drop-blue)", "var(--drop-light)", "var(--drop-pale)"]

export const splashDrops: SplashDrop[] = [
  { id: 1, size: 16, color: colors[1], xRatio: 0.08, yRatio: 0.78 },
  { id: 2, size: 10, color: colors[0], xRatio: 0.12, yRatio: 0.55 },
  { id: 3, size: 6, color: colors[2], xRatio: 0.16, yRatio: 0.88 },
  { id: 4, size: 14, color: colors[0], xRatio: 0.2, yRatio: 0.72 },
  { id: 5, size: 5, color: colors[1], xRatio: 0.24, yRatio: 0.48 },
  { id: 6, size: 12, color: colors[2], xRatio: 0.28, yRatio: 0.83 },
  { id: 7, size: 7, color: colors[0], xRatio: 0.32, yRatio: 0.66 },
  { id: 8, size: 4, color: colors[1], xRatio: 0.36, yRatio: 0.42 },
  { id: 9, size: 11, color: colors[1], xRatio: 0.4, yRatio: 0.76 },
  { id: 10, size: 6, color: colors[0], xRatio: 0.44, yRatio: 0.58 },
  { id: 11, size: 4, color: colors[1], xRatio: 0.47, yRatio: 0.89 },
  { id: 12, size: 9, color: colors[2], xRatio: 0.5, yRatio: 0.7 },
  { id: 13, size: 4, color: colors[0], xRatio: 0.53, yRatio: 0.9 },
  { id: 14, size: 10, color: colors[1], xRatio: 0.57, yRatio: 0.74 },
  { id: 15, size: 6, color: colors[2], xRatio: 0.6, yRatio: 0.6 },
  { id: 16, size: 13, color: colors[0], xRatio: 0.64, yRatio: 0.87 },
  { id: 17, size: 5, color: colors[1], xRatio: 0.68, yRatio: 0.44 },
  { id: 18, size: 16, color: colors[2], xRatio: 0.72, yRatio: 0.73 },
  { id: 19, size: 7, color: colors[0], xRatio: 0.76, yRatio: 0.86 },
  { id: 20, size: 4, color: colors[1], xRatio: 0.8, yRatio: 0.67 },
  { id: 21, size: 12, color: colors[2], xRatio: 0.84, yRatio: 0.52 },
  { id: 22, size: 6, color: colors[0], xRatio: 0.88, yRatio: 0.8 },
  { id: 23, size: 14, color: colors[0], xRatio: 0.92, yRatio: 0.46 },
  { id: 24, size: 8, color: colors[2], xRatio: 0.96, yRatio: 0.69 },
]

