import { ItemContent, ItemHeader, TechStack, Title } from "@/app/components/ui"
import styles from "./ProjectItem.module.css"
import { TimelineProject } from "../../types"
import { ItemSection } from "@/app/components/ui/item/ItemSection"
import { formatYM } from "@/app/lib/date"

type ProjectItemProps = {
  project: TimelineProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  const { title, period, role, highlights, techStack } = project

  return (
    <ItemContent as="li">
      <ItemHeader className={styles.header}>
        <Title as="h4" variant="small" className={styles.title}>
          {title}
        </Title>
        {period && (
          <p className={styles.period}>
            {formatYM(period.from)} - {formatYM(period.to)}
          </p>
        )}
        <Title as="h3" variant="small">
          {role}
        </Title>
      </ItemHeader>

      <ItemSection>
        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </ItemSection>

      <ItemSection>
        <TechStack items={techStack} />
      </ItemSection>
    </ItemContent>
  )
}

