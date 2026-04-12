import styles from "./TwoColumn.module.css"

export type TwoColumnLayout = {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  columns?: string
  gap?: "small" | "medium" | "large"
}

type CSSVars = {
  "--columns": string
  "--gap": string
} & React.CSSProperties

const gapValues = {
  small: "16px",
  medium: "24px",
  large: "32px",
}

export function TwoColumn({
  leftContent,
  rightContent,
  columns = "1fr 1fr",
  gap = "medium",
}: TwoColumnLayout) {
  const style: CSSVars = {
    "--columns": columns,
    "--gap": gapValues[gap],
  }

  return (
    <div className={styles.twoColumn} style={style}>
      {leftContent}
      {rightContent}
    </div>
  )
}

