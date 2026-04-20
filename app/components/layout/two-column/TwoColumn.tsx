import styles from "./TwoColumn.module.css"
import clsx from "clsx"

const gapMap = {
  small: "var(--space-4)",
  medium: "var(--space-5)",
  large: "var(--space-6)",
} as const

export type TwoColumnLayout = {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  columns?: string
  gap?: keyof typeof gapMap
  className?: string
  responsive?: boolean
}

type CSSVars = {
  "--columns": string
  "--gap": string
} & React.CSSProperties

export function TwoColumn({
  leftContent,
  rightContent,
  columns = "1fr 1fr",
  gap = "medium",
  className,
  responsive = true,
}: TwoColumnLayout) {
  const style: CSSVars = {
    "--columns": columns,
    "--gap": gapMap[gap],
  }

  return (
    <div
      className={clsx(
        styles.twoColumn,
        responsive && styles.responsive,
        className,
      )}
      style={style}>
      {leftContent}
      {rightContent}
    </div>
  )
}

