import { ItemContent, ItemHeader, TechStack, Title } from "@/app/components/ui"
import styles from "./ProjectItem.module.css"
import { TimelineProject } from "../../types"
import { ItemSection } from "@/app/components/ui/item/ItemSection"

type ProjectItemProps = {
  project: TimelineProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  const { title, role, description, techStack } = project

  return (
    <ItemContent as="li">
      <ItemHeader className={styles.header}>
        <Title as="h3" variant="small">
          {role}
        </Title>
      </ItemHeader>

      <ItemSection>
        <Title as="h4" variant="small" className={styles.title}>
          {title}
        </Title>
        <p className={styles.description}>{description}</p>
      </ItemSection>

      <ItemSection>
        <TechStack items={techStack} />
      </ItemSection>
    </ItemContent>
  )
}

