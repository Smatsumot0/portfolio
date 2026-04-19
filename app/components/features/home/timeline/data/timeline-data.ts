import { TimelineCompany } from "../types"

export const timelineData: TimelineCompany[] = [
  {
    id: "sou",
    companyName: "株式会社SOU",
    period: {
      from: "2016-07",
      to: "2017-03",
    },
    projects: [
      {
        id: "sou-helpdesk",
        title: "社内情報システム運用・ヘルプデスク",
        description:
          "情報システム課にて社内システムの運用管理、PCキッティング、障害対応などを担当。",
        role: "System Administrator",
        techStack: ["Windows"],
        highlights: [
          "社内システムの運用管理",
          "PCキッティング",
          "社内障害対応",
          "発注などの事務処理",
        ],
      },
    ],
  },
  {
    id: "thinkup",
    companyName: "シンクアップソリューション株式会社",
    period: {
      from: "2019-07",
      to: "2023-04",
    },
    projects: [
      {
        id: "thinkup-1",
        title: "企業向けWebアプリケーション新規開発",
        period: { from: "2019-12", to: "2020-05" },
        description: "Webアプリの新規開発において実装およびDB設計を担当。",
        role: "Fullstack Engineer",
        techStack: ["HTML", "SCSS", "JavaScript", "Java", "PostgreSQL"],
        highlights: ["実装", "DB設計"],
      },
      {
        id: "thinkup-2",
        title: "自社プロダクトWebアプリ新規開発",
        period: { from: "2020-06", to: "2020-09" },
        description:
          "自社プロダクトのWebアプリ開発にてフロントエンド設計および実装を担当。",
        role: "Frontend Engineer",
        techStack: ["HTML", "SCSS", "JavaScript"],
        highlights: ["フロントエンド設計", "実装"],
      },
      {
        id: "thinkup-3",
        title: "出版社社内向けWebアプリ開発",
        period: { from: "2020-10", to: "2022-03" },
        role: "Fullstack Engineer",
        description: "",
        techStack: [
          "HTML",
          "SCSS",
          "JavaScript",
          "Java",
          "Spring MVC",
          "Vue.js",
          "MyBatis",
          "PostgreSQL",
        ],
        highlights: ["実装", "データ移行"],
      },
      {
        id: "thinkup-4",
        title: "出版社・印刷所相互連携Webアプリ 開発支援",
        period: { from: "2022-04", to: "2022-06" },
        description:
          "既存プロジェクトの開発支援として参画し、短期間でキャッチアップを行い実装を担当。",
        role: "Fullstack Engineer",
        techStack: ["HTML", "SCSS", "JavaScript", "Java", "PostgreSQL"],
        highlights: ["開発支援", "実装", "短期キャッチアップ"],
      },
      {
        id: "thinkup-5",
        title: "営業支援向けスマートフォン用PWA開発",
        period: { from: "2022-07", to: "2023-04" },
        description:
          "Python（Dash）とReactを用いたPWA開発。Azureへのデプロイも担当。",
        role: "Fullstack Engineer",
        isFeatured: true,
        techStack: [
          "HTML",
          "SCSS",
          "JavaScript",
          "Python",
          "Dash",
          "React",
          "Snowflake",
          "Azure",
        ],
        highlights: [
          "PWA開発",
          "Dash導入",
          "Azureデプロイ",
          "技術選定",
          "リード",
        ],
      },
    ],
  },
  {
    id: "upward",
    companyName: "UPWARD株式会社",
    period: {
      from: "2023-05",
      to: "2025-04",
    },
    projects: [
      {
        id: "agent-web",
        title: "営業支援アプリ管理画面開発",
        period: { from: "2023-05", to: "2024-08" },
        description: "",
        role: "Frontend Engineer",
        techStack: ["TypeScript", "React"],
        highlights: ["UIリファクタリング", "テスト実装", "運用改善"],
      },
    ],
  },
]

