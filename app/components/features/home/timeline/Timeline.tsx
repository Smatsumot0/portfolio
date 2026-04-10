import { Section } from "@/app/components/layout"
import style from "./Timeline.module.css"
import { timelineData } from "./data/timeline-data"
import { Company } from "./components"

export function Timeline() {
  return (
    <Section title="Timeline">
      <ul className={style.timeline}>
        {timelineData.map((company) => (
          <Company company={company} key={company.id} />
        ))}
      </ul>
    </Section>
  )
}

