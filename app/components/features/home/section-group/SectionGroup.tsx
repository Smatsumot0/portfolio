import { Container } from "@/app/components/layout"

export type SectionGroupProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function SectionGroup({
  children,
  className,
  containerClassName,
}: SectionGroupProps) {
  return (
    <section className={className}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

