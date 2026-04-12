import { Title } from "@/app/components/ui"
import styles from "./Section.module.css"
import clsx from "clsx"

export type SectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={clsx(styles.section, className)}>
      <Title>{title}</Title>
      {children}
    </section>
  )
}

