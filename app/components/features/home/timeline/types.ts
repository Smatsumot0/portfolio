type Period = {
  from: string
  to: string
}

export type TimelineProject = {
  id: string
  title: string
  period?: Period
  role: string
  description: string
  techStack: string[]
  highlights: string[]
  isFeatured?: boolean
}

export type TimelineCompany = {
  id: string
  companyName: string
  period: Period
  projects: TimelineProject[]
}

