import { About } from "@/app/components/features/home/about/About"
import { Hero } from "@/app/components/features/home/hero/Hero"
import { SectionGroup } from "@/app/components/features/home/section-group/SectionGroup"
import { Timeline } from "@/app/components/features/home/timeline/Timeline"
import { TwoColumn } from "@/app/components/layout"

export function Home() {
  return (
    <div className="home">
      <Hero />
      <SectionGroup>
        <About />
        <TwoColumn leftContent={<Timeline />} rightContent={<div>WORKS</div>} />
        {/* CONTACT */}
      </SectionGroup>
    </div>
  )
}

