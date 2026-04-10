import { Container } from "@/app/components/layout"

export type SectionGroupProps = {
  children: React.ReactNode
}

export function SectionGroup({ children }: SectionGroupProps) {
  return (
    <section className="section-group">
      <Container>{children}</Container>
    </section>
  )
}

