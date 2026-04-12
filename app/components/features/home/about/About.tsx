import { Section, Stack, StackItem } from "@/app/components/layout"
import styles from "./About.module.css"

export function About() {
  return (
    <Section title="About" className={styles.about}>
      <Stack as="div">
        <StackItem as="div" className={styles.stackItem}>
          <p className={styles.lead}>
            フロントエンドエンジニアとして約2年、フルスタックエンジニアとして約4年の開発経験があります。
          </p>
          <p>
            現在は<strong>React / Next.js</strong>
            を中心に、ユーザー体験を意識したWebアプリケーション開発を行っています。
          </p>
          <p>
            フロントエンドからバックエンドまで一貫して開発できることや、
            <br />
            <strong>TypeScript</strong>による型安全な設計を強みとしています。
          </p>
          <p>
            個人開発として生理周期管理アプリ<strong>Lunimo</strong>
            を開発しており、
            <br />
            設計力やUI/UXの改善にも取り組んでいます。
          </p>
          <p>シンプルで使いやすいUI設計を大切にしています。</p>
        </StackItem>
      </Stack>
    </Section>
  )
}

