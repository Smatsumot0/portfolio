import styles from "./Item.module.css"
import clsx from "clsx"

export type ItemContentProps = {
  children?: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function ItemContent({
  children,
  className,
  as: Tag = "div",
}: ItemContentProps) {
  return <Tag className={clsx(styles.content, className)}>{children}</Tag>
}

