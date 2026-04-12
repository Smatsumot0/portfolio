import styles from "./Company.module.css"
import { TimelineCompany } from "../../types"
import { ProjectItem } from "../project-item/ProjectItem"
import { StackItem, TwoColumn } from "@/app/components/layout"
import { ItemStack, ItemHeader } from "@/app/components/ui"

type CompanyProps = {
  company: TimelineCompany
}

function formatYM(date: string) {
  const [year, month] = date.split("-")
  return `${year}/${Number(month)}`
}

export function Company({ company }: CompanyProps) {
  const { companyName, period, projects } = company
  const joinedYear = period.from.split("-")[0]

  return (
    <StackItem className={styles.root}>
      <TwoColumn
        columns="auto 1fr"
        gap="small"
        leftContent={
          <div className={styles.lineArea}>
            <span className={styles.year}>{joinedYear}</span>
          </div>
        }
        rightContent={
          <ItemStack className={styles.content}>
            <ItemHeader className={styles.header}>
              <p className={styles.meta}>
                <span className={styles.companyName}>{companyName}</span>
                <span className={styles.period}>
                  {formatYM(period.from)} - {formatYM(period.to)}
                </span>
              </p>
            </ItemHeader>

            <ul className={styles.projectList}>
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </ul>
          </ItemStack>
        }
      />
    </StackItem>
  )
}

