import styles from "./Item.module.css"
import clsx from "clsx"

export type ItemHeaderProps = {
  children?: React.ReactNode
  className?: string
}

export function ItemHeader({ children, className }: ItemHeaderProps) {
  return <header className={clsx(styles.header, className)}>{children}</header>
}

