import styles from "./Item.module.css"
import clsx from "clsx"

export type ItemStackProps = {
  children?: React.ReactNode
  className?: string
}

export function ItemStack({ children, className }: ItemStackProps) {
  return <div className={clsx(styles.stack, className)}>{children}</div>
}

