export const navigationItems = [
  { id: "about", label: "ABOUT" },
  { id: "timeline", label: "TIMELINE" },
  { id: "works", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
] as const

export type NavigationItem = (typeof navigationItems)[number]
export type SectionId = NavigationItem["id"]
