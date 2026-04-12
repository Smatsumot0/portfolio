import clsx from "clsx"
import style from "./Container.module.css"

export type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx(style.container, className)}>{children}</div>
}

