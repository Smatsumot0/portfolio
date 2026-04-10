export type TimelineProject = {
  id: string
  title: string
  period: {
    from: string
    to: string
  }
  role: string
  description: string
  skills: string[]
}

export type TimelineCompany = {
  id: string
  companyName: string
  period: {
    from: string
    to: string
  }
  projects: TimelineProject[]
}

