"use client"

import { Events, Link } from "react-scroll"
import { navigationItems } from "@/app/constants/navigation"
import styles from "./HeaderNav.module.css"
import { useEffect } from "react"
import { scrollOptions } from "../Header"

const GROW_CLASS_NAME = "is-grow"

export function HeaderNav() {
  useEffect(() => {
    const handleEnd = (to: string) => {
      if (window.innerWidth < 768) return

      const section = document.getElementById(String(to))
      if (!section) return

      section.classList.remove(GROW_CLASS_NAME)
      void section.offsetWidth
      section.classList.add(GROW_CLASS_NAME)

      window.setTimeout(() => {
        section.classList.remove(GROW_CLASS_NAME)
      }, 800)
    }
    Events.scrollEvent.register("end", handleEnd)

    return () => {
      Events.scrollEvent.remove("end")
    }
  }, [])

  return (
    <nav>
      {navigationItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          offset={-90}
          className={styles.link}
          {...scrollOptions}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

