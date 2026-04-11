import clsx from "clsx"
import styles from "./TechStack.module.css"

export type TechStackProps = {
  techStack: string[]
  className?: string
}

export function TechStack({ techStack, className }: TechStackProps) {
  return (
    <ul className={clsx(styles.techList, className)}>
      {techStack.map((tech) => (
        <li key={tech} className={styles.techItem}>
          {tech}
        </li>
      ))}
    </ul>
  )
}

