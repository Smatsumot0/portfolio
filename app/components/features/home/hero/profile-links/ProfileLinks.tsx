import { Link } from "@/app/components/ui"
import style from "./ProfileLinks.module.css"

export function ProfileLinks() {
  const links = [
    {
      title: "GitHub",
      href: "https://github.com/Smatsumot0",
    },
    {
      title: "Zenn",
      href: "https://zenn.dev/matsumot0",
    },
  ]

  return (
    <ul className={style.links}>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.href} variant="button" className={style.profileLink}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

