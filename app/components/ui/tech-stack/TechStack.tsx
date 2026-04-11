import clsx from "clsx"
import styles from "./TechStack.module.css"

export type TechStackProps = {
  items: string[]
  className?: string
}

export function TechStack({ items, className }: TechStackProps) {
  return (
    <ul className={clsx(styles.techList, className)}>
      {items.map((item) => (
        <li key={item} className={styles.techItem}>
          {item}
        </li>
      ))}
    </ul>
  )
}

