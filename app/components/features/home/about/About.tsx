import { Section } from "@/app/components/layout"
import styles from "./About.module.css"

export function About() {
  return (
    <Section title="About" className={styles.about}>
      <p>
        フロントエンドエンジニアとして約2年、フルスタックエンジニアとして約4年の開発経験があります。
      </p>
      <p>
        現在はReact /
        Next.jsを中心に、ユーザー体験を意識したWebアプリケーション開発を行っています。
      </p>
      <p>
        フロントエンドからバックエンドまで一貫して開発できることや、TypeScriptによる型安全な設計を強みとしています。
      </p>
      <p>
        個人開発として生理周期管理アプリ「Lunimo」を開発しており、設計力やUI/UXの改善にも取り組んでいます。
      </p>
      <p>シンプルで使いやすいUIを作ることが好きです。</p>
    </Section>
  )
}

