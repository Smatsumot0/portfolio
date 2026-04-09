import style from "./Link.module.css"

export type LinkProps = {
  href: string
  title: string
}

export function Link({ href, title }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel={title}
      title={title}
      className={style.link}>
      {title}
    </a>
  )
}

