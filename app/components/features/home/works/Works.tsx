import { Card } from "./components"
import { worksData } from "./data/works-data"
import { ResponsiveScrollPanel, Section, Stack } from "@/app/components/layout"

export function Works() {
  return (
    <Section title="works">
      <ResponsiveScrollPanel maxHeight="var(--max-height-scroll-panel">
        <Stack>
          {worksData.map((work) => (
            <Card work={work} key={work.id} />
          ))}
        </Stack>
      </ResponsiveScrollPanel>
    </Section>
  )
}

