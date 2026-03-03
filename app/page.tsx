export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <div className="logo">S</div>
        <nav>
          <a>ABOUT</a>
          <a>TIMELINE</a>
          <a>WORKS</a>
          <a>CONTACT</a>
        </nav>
      </header>
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

