import { ProfileLinks } from "../ProfileLinks/ProfileLinks"
import style from "./Hero.module.css"

export function Hero() {
  return (
    <section className={style.hero}>
      <h1 className={style.title}>S.Matsumoto</h1>
      <p className={style.subtitle}>
        Hello, I`m a<br />
        Frontend Developer
      </p>
      <ProfileLinks />
    </section>
  )
}

