import { TechStack, Title } from "@/app/components/ui"
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

      <div className={styles.content}>
        <Title as="h4" variant="small" className={styles.title}>
          {title}
        </Title>
        <p className={styles.description}>{description}</p>
        <TechStack techStack={techStack} className={styles.techStack} />
      </div>
    </li>
  )
}

