import { Card } from "@/app/components/features/home/works/components/Card"
import { worksData } from "@/app/components/features/home/works/data/works-data"
import { Section, Stack } from "@/app/components/layout"

export function Works() {
  return (
    <Section title="Works">
      <Stack>
        {worksData.map((work) => (
          <Card work={work} key={work.id} />
        ))}
      </Stack>
    </Section>
  )
}

