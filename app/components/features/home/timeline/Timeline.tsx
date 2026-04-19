import { Section, Stack } from "@/app/components/layout"
import { timelineData } from "./data/timeline-data"
import { Company } from "./components"

export function Timeline() {
  const sorted = [...timelineData].sort((a, b) =>
    b.period.from.localeCompare(a.period.from),
  )

  return (
    <Section title="Timeline">
      <Stack>
        {sorted.map((company) => (
          <Company company={company} key={company.id} />
        ))}
      </Stack>
    </Section>
  )
}

