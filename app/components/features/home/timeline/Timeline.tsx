import { Section, Stack } from "@/app/components/layout"
import { timelineData } from "./data/timeline-data"
import { Company } from "./components"

export function Timeline() {
  return (
    <Section title="Timeline">
      <Stack>
        {timelineData.map((company) => (
          <Company company={company} key={company.id} />
        ))}
      </Stack>
    </Section>
  )
}

