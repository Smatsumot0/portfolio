"use client"

import { useEffect, useState } from "react"
import { Events, Link } from "react-scroll"
import { navigationItems } from "@/app/constants/navigation"
import styles from "./HeaderNav.module.css"
import { scrollOptions } from "../Header"
import clsx from "clsx"

const GROW_CLASS_NAME = "is-grow"

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false)

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

  function handleToggleMenu() {
    setIsOpen((prev) => !prev)
  }

  function handleCloseMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <nav className={styles.pcNav} aria-label="グローバルナビゲーション">
        <ul className={styles.list}>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                offset={-90}
                className={styles.link}
                {...scrollOptions}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.mobileNavWrapper}>
        <button
          type="button"
          className={clsx(styles.menuButton, isOpen && styles.menuButtonOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={handleToggleMenu}>
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav
          id="mobile-navigation"
          className={clsx(styles.mobileNav, isOpen && styles.mobileNavOpen)}
          aria-label="モバイルナビゲーション">
          <ul className={styles.mobileList}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  offset={-90}
                  className={clsx(styles.link, styles.mobileLink)}
                  onClick={handleCloseMenu}
                  {...scrollOptions}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

