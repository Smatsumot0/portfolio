import { Splash } from "./splash/Splash"
import style from "./Header.module.css"
import Image from "next/image"
import clsx from "clsx"

export function Header() {
  return (
    <header className={clsx("container", style.header)}>
      <div className={style.navigation}>
        <div className={style.logo}>
          <Image src="/images/logo.svg" alt="logo" width={100} height={50} />
        </div>
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

