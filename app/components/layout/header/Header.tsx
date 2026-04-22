"use client"
import { Splash } from "./splash/Splash"
import style from "./Header.module.css"
import Image from "next/image"
import clsx from "clsx"
import { HeaderNav } from "./header-nav/HeaderNav"
import { animateScroll } from "react-scroll"

export const scrollOptions = {
  duration: 150,
  smooth: "linear",
}

export function Header() {
  const handleClickLogo = () => {
    animateScroll.scrollToTop(scrollOptions)
  }

  return (
    <header className={clsx("container", style.header)}>
      <div className={clsx("container", style.navigation)}>
        <div className={style.logo} onClick={handleClickLogo}>
          <Image src="/images/logo.svg" alt="logo" width={100} height={50} />
        </div>
        <HeaderNav />
      </div>
      <Splash />
    </header>
  )
}

