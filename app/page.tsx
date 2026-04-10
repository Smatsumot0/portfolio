import { About, Header, Hero, SectionGroup, Timeline } from "@/app/components"

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Hero />
      <SectionGroup>
        <section>
          <About />
          <section>
            <Timeline />
            {/* WORKS */}
          </section>
          {/* CONTACT */}
        </section>
      </SectionGroup>
    </main>
  )
}

