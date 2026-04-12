import { Container } from "@/app/components/layout"
import clsx from "clsx"
import styles from "./SectionGroup.module.css"

export type SectionGroupProps = {
  children: React.ReactNode
  className?: string
}

export function SectionGroup({ children, className }: SectionGroupProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <Container className={styles.container}>{children}</Container>
    </section>
  )
}

