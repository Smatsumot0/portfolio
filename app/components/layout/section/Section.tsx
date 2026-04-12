import { Title } from "@/app/components/ui"

export type SectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={className}>
      <Title>{title}</Title>
      {children}
    </section>
  )
}

