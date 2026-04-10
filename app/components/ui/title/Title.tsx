import clsx from "clsx"
import style from "./Title.module.css"

export type TitleProps = {
  children: React.ReactNode
  variant?: "hero" | "section" | "card" | "small"
  as?: "h1" | "h2" | "h3" | "h4"
  align?: "left" | "center"
  className?: string
}

export function Title({
  children,
  variant = "section",
  as = "h2",
  align = "left",
  className,
}: TitleProps) {
  const Tag = as
  return (
    <Tag
      className={clsx(
        style.title,
        style[variant],
        className,
        align === "center" && style.center,
      )}>
      {children}
    </Tag>
  )
}

