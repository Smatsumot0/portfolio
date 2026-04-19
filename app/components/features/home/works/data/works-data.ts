import { Work } from "../types"

export const worksData: Work[] = [
  {
    id: "lunimo",
    title: "Lunimo",
    description:
      "生理日管理を手軽に行うためのWebアプリです。記録・確認のしやすさを重視して開発しました。",
    highlights: [
      "入力ステップを減らし、継続しやすいUXを意識",
      "TypeScriptとバリデーションを用いて安全にデータを扱えるよう設計",
      "フロントエンドとバックエンドの責務を分離し、保守しやすい構成にした",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
    appUrl: "",
    githubUrl: "https://github.com/Smatsumot0/lunimo",
    thumbnailUrl: "",
  },
]

