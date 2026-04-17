import NextLink from "next/link"
import clsx from "clsx"
import style from "./Link.module.css"
import buttonLikeStyle from "../button-like/button-like.module.css"
import { ButtonProps } from "@/app/components/ui/button/Button"

type BaseProps = {
  href: string
  children: React.ReactNode
  kind?: "anchor" | "next"
  className?: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
}

type TextLinkProps = {
  appearance?: "text"
} & BaseProps

type ButtonLinkProps = {
  appearance: "button"
} & BaseProps &
  Pick<ButtonProps, "size" | "tone">

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
    variantProps.appearance === "button"
      ? [
          buttonLikeStyle.buttonLike,
          buttonLikeStyle[variantProps.size ?? "medium"],
          buttonLikeStyle[variantProps.tone ?? "primary"],
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

