import { Title } from "@/app/components/ui"
import styles from "./ProjectItem.module.css"
import { TimelineProject } from "../../types"

type ProjectItemProps = {
  project: TimelineProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  const { title, role, description, techStack } = project

  return (
    <li className={styles.root}>
      <div className={styles.header}>
        <Title as="h3" variant="small">
          {role}
        </Title>
      </div>

      <p className={styles.title}>{title}</p>

      {description ? <p className={styles.description}>{description}</p> : null}

      {techStack.length > 0 ? (
        <ul className={styles.techList}>
          {techStack.map((tech) => (
            <li key={tech} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

