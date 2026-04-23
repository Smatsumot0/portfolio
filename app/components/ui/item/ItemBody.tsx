import styles from "./Item.module.css"
import clsx from "clsx"

export type ItemBodyProps = {
  children?: React.ReactNode
  className?: string
}

export function ItemBody({ children, className }: ItemBodyProps) {
  return <div className={clsx(styles.body, className)}>{children}</div>
}

