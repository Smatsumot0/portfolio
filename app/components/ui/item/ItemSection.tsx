import styles from "./Item.module.css"
import clsx from "clsx"

export type ItemSectionProps = {
  children?: React.ReactNode
  className?: string
}

export function ItemSection({ children, className }: ItemSectionProps) {
  return <div className={clsx(styles.section, className)}>{children}</div>
}

