import style from "./Header.module.css"

export function Header() {
  return (
    <header className={style.header}>
      <div className="logo">S</div>
      <nav>
        <a>ABOUT</a>
        <a>TIMELINE</a>
        <a>WORKS</a>
        <a>CONTACT</a>
      </nav>
    </header>
  )
}

