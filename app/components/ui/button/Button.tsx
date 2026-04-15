import clsx from "clsx"
import style from "./Button.module.css"
import buttonLikeStyle from "../button-like/button-like.module.css"

export type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonLikeStyle.buttonLike,
        style.button,
        style[variant],
        style[size],
        className,
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

