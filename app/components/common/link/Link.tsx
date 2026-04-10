import NextLink from "next/link"
import clsx from "clsx"
import style from "./Link.module.css"
import buttonLikeStyle from "../../ui/button-like/button-like.module.css"

export type LinkProps = {
  href: string
  children: React.ReactNode
  variant?: "text" | "button"
  className?: string
}

export function Link({
  href,
  children,
  variant = "text",
  className,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={clsx(
        style.link,
        variant === "button" ? buttonLikeStyle.buttonLike : style[variant],
        className,
      )}>
      {children}
    </NextLink>
  )
}

