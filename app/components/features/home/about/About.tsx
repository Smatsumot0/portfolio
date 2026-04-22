import { Section, Stack, StackItem } from "@/app/components/layout"
import styles from "./About.module.css"

export function About() {
  return (
    <Section title="about" className={styles.about}>
      <Stack as="div">
        <StackItem as="div" className={styles.stackItem}>
          <p className={styles.lead}>
            ユーザー体験を意識したフロントエンド設計と、
            <span className={styles.break} />
            バックエンドまで含めた一貫した開発ができるエンジニアです。
          </p>
          <p>
            <strong>React / Next.js</strong>
            を中心に、使いやすさと保守性を両立した
            <span className={styles.break} />
            Webアプリケーション開発を行っています。
          </p>
          <p>
            フロントエンドからバックエンドまで一貫して開発できることや、
            <span className={styles.break} />
            <strong>TypeScript</strong>による型安全な設計を強みとしています。
          </p>
          <p>
            フロントエンドだけでなくAPI設計やデータ設計まで関わることで、
            <span className={styles.break} />
            全体最適な実装ができる点を強みとしています。
          </p>

          <p>
            現在は個人開発として、日常の課題をシンプルに解決する
            <span className={styles.break} />
            アプリケーションの開発に取り組んでいます。
          </p>
        </StackItem>
      </Stack>
    </Section>
  )
}

