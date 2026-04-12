import clsx from "clsx"
import styles from "./Stack.module.css"

export type StackProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Stack({ children, className, as: Tag = "ul" }: StackProps) {
  return <Tag className={clsx(styles.stack, className)}>{children}</Tag>
}

