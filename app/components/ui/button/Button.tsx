import buttonLikeStyle from "../button-like/button-like.module.css"
import clsx from "clsx"

export type ButtonProps = {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset"
  tone?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  type = "button",
  tone = "primary",
  size = "medium",
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonLikeStyle.buttonLike,
        buttonLikeStyle[size],
        buttonLikeStyle[tone],
        className,
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

