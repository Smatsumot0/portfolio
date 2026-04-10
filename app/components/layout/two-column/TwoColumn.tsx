export type TwoColumnLayout = {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
}

export function TwoColumn({ leftContent, rightContent }: TwoColumnLayout) {
  return (
    <div>
      {leftContent}
      {rightContent}
    </div>
  )
}

