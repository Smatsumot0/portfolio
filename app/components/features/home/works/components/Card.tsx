import {
  ItemSection,
  ItemContent,
  ItemHeader,
  Link,
  TechStack,
  Title,
  ItemStack,
} from "@/app/components/ui"
import { Work } from "../types"
import styles from "./Card.module.css"
import { CheckCircleIcon } from "@/app/components/ui/icon"
import { StackItem, TwoColumn } from "@/app/components/layout"

export type CardProps = {
  work: Work
}

export function Card({ work }: CardProps) {
  const { title, description, highlights, techStack, appUrl, githubUrl } = work
  return (
    <StackItem className={styles.root}>
      <TwoColumn
        columns="auto 1fr"
        gap="small"
        leftContent={<div className={styles.thumbnail}>{/* App Image */}</div>}
        rightContent={
          <ItemStack className={styles.content}>
            <ItemHeader>
              <Title as="h3" variant="small" className={styles.title}>
                {title}
              </Title>
              <p className={styles.description}>{description}</p>
            </ItemHeader>

            <ItemContent>
              <ItemSection>
                <ul className={styles.highlights}>
                  {highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircleIcon className={styles.highlightIcon} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </ItemSection>

              <ItemSection>
                <TechStack items={techStack} className={styles.techStack} />
              </ItemSection>

              <ItemSection>
                <nav aria-label={`${title} links`}>
                  <ul className={styles.links}>
                    <li>
                      <Link href={appUrl} variant="button">
                        View App
                      </Link>
                    </li>
                    <li>
                      <Link href={githubUrl} variant="button">
                        GitHub
                      </Link>
                    </li>
                  </ul>
                </nav>
              </ItemSection>
            </ItemContent>
          </ItemStack>
        }
      />
    </StackItem>
  )
}

