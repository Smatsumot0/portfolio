import {
  ItemSection,
  ItemContent,
  ItemHeader,
  Link,
  TechStack,
  Title,
  ItemBody,
} from "@/app/components/ui"
import { Work } from "../../types"
import styles from "./Card.module.css"
import { CheckCircleIcon } from "@/app/components/ui/icon"
import { StackItem, TwoColumn } from "@/app/components/layout"
import { Thumbnail } from "../thumbnail/Thumbnail"
import { Badge } from "../badge/Badge"

export type CardProps = {
  work: Work
}

export function Card({ work }: CardProps) {
  const {
    title,
    description,
    highlights,
    techStack,
    appUrl,
    githubUrl,
    status,
  } = work
  const buttons = [
    appUrl ? { label: "View App", url: appUrl } : null,
    githubUrl ? { label: "GitHub", url: githubUrl } : null,
  ].filter(
    (button): button is { label: string; url: string } => button !== null,
  )

  return (
    <StackItem className={styles.root}>
      <TwoColumn
        columns="auto 1fr"
        gap="small"
        responsive={false}
        leftContent={
          <div className={styles.media}>
            <Thumbnail />
            <Badge status={status} />
          </div>
        }
        rightContent={
          <ItemBody className={styles.content}>
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
                      <span>{highlight}</span>
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
                    {buttons.map((button) => (
                      <li key={button.label}>
                        <Link
                          href={button.url}
                          appearance="button"
                          kind="anchor"
                          target="_blank"
                          rel="noopener noreferrer">
                          {button.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ItemSection>
            </ItemContent>
          </ItemBody>
        }
      />
    </StackItem>
  )
}

