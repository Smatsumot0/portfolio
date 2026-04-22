export const WORK_STATUS = {
  release: { label: "リリース" },
  inProgress: { label: "開発中" },
  planning: { label: "設計中" },
} as const

export type WorkStatus = keyof typeof WORK_STATUS

export type Work = {
  id: string
  title: string
  description: string
  highlights: string[]
  techStack: string[]
  appUrl: string
  githubUrl: string
  thumbnailUrl: string
  status: WorkStatus
}

