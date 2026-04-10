import { Title } from "@/app/components/ui"

export type SectionProps = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  )
}

