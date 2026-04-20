import styles from "./Company.module.css"
import { TimelineCompany } from "../../types"
import { ProjectItem } from "../project-item/ProjectItem"
import { StackItem, TwoColumn } from "@/app/components/layout"
import { ItemStack, ItemHeader } from "@/app/components/ui"
import { formatYM } from "@/app/lib/date"

type CompanyProps = {
  company: TimelineCompany
}

export function Company({ company }: CompanyProps) {
  const { companyName, period, projects } = company
  const joinedYear = period.from.split("-")[0]
  const sortedProjects = [...projects].sort((a, b) => {
    const aFrom = a.period?.from
    const bFrom = b.period?.from

    // 両方ない → 順序そのまま
    if (!aFrom && !bFrom) return 0

    // aだけない → aを後ろへ
    if (!aFrom) return 1

    // bだけない → bを後ろへ
    if (!bFrom) return -1

    // 両方ある → 新しい順
    return bFrom.localeCompare(aFrom)
  })

  return (
    <StackItem className={styles.root}>
      <TwoColumn
        columns="auto 1fr"
        gap="small"
        responsive={false}
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
              {sortedProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </ul>
          </ItemStack>
        }
      />
    </StackItem>
  )
}

