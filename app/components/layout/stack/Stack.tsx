import clsx from "clsx"
import styles from "./Stack.module.css"

export type StackProps = {
  children: React.ReactNode
  className?: string
}

export function Stack({ children, className }: StackProps) {
  return <ul className={clsx(styles.stack, className)}>{children}</ul>
}

