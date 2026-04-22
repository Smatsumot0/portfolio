import { WORK_STATUS, WorkStatus } from "../../types"
import styles from "./Badge.module.css"
import clsx from "clsx"

export type BadgeProps = {
  status: WorkStatus
}

export function Badge({ status }: BadgeProps) {
  return (
    <p className={clsx(styles.badge, styles[status])}>
      {WORK_STATUS[status].label}
    </p>
  )
}

