import { Section, Stack, StackItem, TwoColumn } from "@/app/components/layout"
import styles from "./Contact.module.css"
import { CopyButton, Link, QrCode } from "@/app/components/ui"

const EMAIL_ADDRESS = "s.orca.matsumoto@gmail.com"
const MAIL_SUBJECT = "お問い合わせ"

export function Contact() {
  const params = new URLSearchParams({
    subject: MAIL_SUBJECT,
  })
  const mailtoHref = `mailto:${EMAIL_ADDRESS}?${params.toString()}`

  return (
    <Section title="contact">
      <Stack as="div">
        <StackItem as="div" className={styles.stackItem}>
          <TwoColumn
            className={styles.twoColumn}
            leftContent={
              <div className={styles.content}>
                <dl className={styles.list}>
                  <dt className={styles.term}>メールアドレス</dt>
                  <dd className={styles.email}>{EMAIL_ADDRESS}</dd>
                </dl>
                <p>ご相談・カジュアル面談などお気軽にご連絡ください。</p>
                <div className={styles.actions}>
                  <CopyButton value={EMAIL_ADDRESS} />
                  <Link href={mailtoHref} appearance="button" tone="secondary">
                    メールを送る
                  </Link>
                </div>
              </div>
            }
            rightContent={
              <div className={styles.qrArea}>
                <QrCode
                  value={mailtoHref}
                  alt="メール作成画面を開くQRコード"
                  size="medium"
                  title="QRコード"
                  description="スマートフォンで読み取るとメール作成画面が開きます。"
                />
              </div>
            }
          />
        </StackItem>
      </Stack>
    </Section>
  )
}

