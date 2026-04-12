import styles from "./Stack.module.css"
import clsx from "clsx"

export type StackItemProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function StackItem({
  children,
  className,
  as: Tag = "li",
}: StackItemProps) {
  return <Tag className={clsx(styles.item, className)}>{children}</Tag>
}

