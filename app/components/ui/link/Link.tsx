import NextLink from "next/link"
import clsx from "clsx"
import style from "./Link.module.css"
import buttonLikeStyle from "../button-like/button-like.module.css"

type BaseProps = {
  href: string
  children: React.ReactNode
  kind?: "anchor" | "next"
  className?: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
}

type TextLinkProps = {
  variant?: "text"
} & BaseProps

type ButtonLinkProps = {
  variant: "button"
  size?: "small" | "medium" | "large"
} & BaseProps

type LinkProps = TextLinkProps | ButtonLinkProps

export function Link({
  href,
  children,
  kind = "next",
  className,
  target,
  rel,
  ...variantProps
}: LinkProps) {
  const linkClassName = clsx(
    style.link,
    variantProps.variant === "button"
      ? [
          buttonLikeStyle.buttonLike,
          buttonLikeStyle[variantProps.size ?? "medium"],
        ]
      : style.text,
    className,
  )

  if (kind === "anchor") {
    return (
      <a href={href} className={linkClassName} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={linkClassName} target={target} rel={rel}>
      {children}
    </NextLink>
  )
}

