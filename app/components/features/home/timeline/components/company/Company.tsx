import styles from "./Company.module.css"
import { TimelineCompany } from "../../types"
import { ProjectItem } from "../project-item/ProjectItem"

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
    <li className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.lineArea}>
          <span className={styles.year}>{joinedYear}</span>
        </div>

        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.meta}>
              <span className={styles.companyName}>{companyName}</span>
              <span className={styles.period}>
                {formatYM(period.from)} - {formatYM(period.to)}
              </span>
            </p>
          </header>

          <ul className={styles.projectList}>
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

