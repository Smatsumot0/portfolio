import { Title } from "@/app/components/common"

export type SectionProps = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Title title={title} />
      {children}
    </section>
  )
}

