import styles from "./TwoColumn.module.css"
import clsx from "clsx"

const gapMap = {
  small: "var(--space-4)",
  medium: "var(--space-5)",
  large: "var(--space-6)",
} as const

const tabletGapMap = {
  small: "var(--space-3)",
  medium: "var(--space-4)",
  large: "var(--space-5)",
} as const

const mobileGapMap = {
  small: "var(--space-2)",
  medium: "var(--space-3)",
  large: "var(--space-4)",
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
  "--gap-tablet": string
  "--gap-mobile": string
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
    "--gap-tablet": tabletGapMap[gap],
    "--gap-mobile": mobileGapMap[gap],
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

