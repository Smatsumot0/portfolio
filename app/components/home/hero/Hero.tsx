import { ProfileLinks } from "./profile-links/ProfileLinks"
import style from "./Hero.module.css"
import { Container } from "@/app/components/layout"

export function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.title}>S.Matsumoto</h1>
        <p className={style.subtitle}>
          Hello, I`m a<br />
          Frontend Developer / React, TypeScript
        </p>
        <ProfileLinks />
      </Container>
    </section>
  )
}

