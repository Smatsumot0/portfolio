import styles from "./Stack.module.css"
import clsx from "clsx"

export type StackItemProps = {
  children: React.ReactNode
  className?: string
}

export function StackItem({ children, className }: StackItemProps) {
  return <li className={clsx(styles.item, className)}>{children}</li>
}

