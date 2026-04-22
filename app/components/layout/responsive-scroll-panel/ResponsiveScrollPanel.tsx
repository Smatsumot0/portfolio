import styles from "./ResponsiveScrollPanel.module.css"

export type ResponsiveScrollPanelProps = {
  maxHeight: string
  children?: React.ReactNode
}

type CSSVars = {
  "--max-height-scroll-panel-override": string
} & React.CSSProperties

export function ResponsiveScrollPanel({
  maxHeight,
  children,
}: ResponsiveScrollPanelProps) {
  const style: CSSVars = { "--max-height-scroll-panel-override": maxHeight }

  return (
    <div style={style} className={styles.panel}>
      {children}
    </div>
  )
}

