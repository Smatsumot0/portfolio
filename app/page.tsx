import { Header } from "@/app/components"

export default function Home() {
  return (
    <main className="home">
      <Header />
      <div className="wave" />

      <section className="hero">
        <h1 className="title">S.Matsumoto</h1>
        <p className="subtitle">
          Hello, I`m a<br />
          Frontend Developer
        </p>

        <ul className="links">
          <li>GitHub</li>
          <li>Zenn</li>
        </ul>
      </section>
    </main>
  )
}

