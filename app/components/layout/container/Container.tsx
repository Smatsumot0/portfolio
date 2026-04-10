import style from "./Container.module.css"

export type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className={`${style.container}`}>{children}</div>
}

