import { About } from "./about/About"
import { Hero } from "./hero/Hero"
import { SectionGroup } from "./section-group/SectionGroup"
import { Timeline } from "./timeline/Timeline"
import { Works } from "./works/Works"
import { TwoColumn } from "@/app/components/layout"
import styles from "./Home.module.css"
import { Contact } from "./contact/Contact"
import clsx from "clsx"

export function Home() {
  return (
    <div className={clsx("container", styles.home)}>
      <Hero />
      <SectionGroup>
        <About />
        <TwoColumn
          leftContent={<Timeline />}
          rightContent={<Works />}
          columns="1fr 1.18fr"
          gap="large"
          className={styles.twoColumn}
        />
        <Contact />
      </SectionGroup>
    </div>
  )
}

