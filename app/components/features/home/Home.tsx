import { About } from "@/app/components/features/home/about/About"
import { Hero } from "@/app/components/features/home/hero/Hero"
import { SectionGroup } from "@/app/components/features/home/section-group/SectionGroup"
import { Timeline } from "@/app/components/features/home/timeline/Timeline"
import { Works } from "@/app/components/features/home/works/Works"
import { TwoColumn } from "@/app/components/layout"
import styles from "./Home.module.css"

export function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <SectionGroup>
        <About />
        <TwoColumn
          leftContent={<Timeline />}
          rightContent={<Works />}
          columns="1fr 1.2fr"
          gap="large"
        />
        {/* CONTACT */}
      </SectionGroup>
    </div>
  )
}

