import { Splash } from "../Splash/Splash"
import style from "./Header.module.css"

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.navigation}>
        <div className="logo">S</div>
        <nav>
          <a>ABOUT</a>
          <a>TIMELINE</a>
          <a>WORKS</a>
          <a>CONTACT</a>
        </nav>
      </div>
      <Splash />
    </header>
  )
}

