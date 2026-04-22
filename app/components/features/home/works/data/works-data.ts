import { Work } from "../types"

export const worksData: Work[] = [
  {
    id: "lunimo",
    title: "LuNimo",
    description:
      "生理日管理を手軽に行うためのWebアプリです。記録・確認のしやすさを重視して開発しました。",
    highlights: [
      "生理開始日や体調を手軽に記録できる設計",
      "継続しやすさを重視したシンプルな入力体験",
      "日々の記録をより手軽に続けられるよう、将来的な iOS アプリ化も見据えて設計",
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
    status: "inProgress",
  },
  {
    id: "event-schedule",
    title: "イベントスケジュール管理アプリ",
    description:
      "ライブや舞台のチケット申込や発売日を管理するためのアプリです。複雑になりがちな日程をシンプルに把握できるよう設計しています。",
    highlights: [
      "先行受付・一般発売・当落日を整理して管理",
      "複雑になりがちな申込スケジュールを迷わず把握できるUI",
      "推し活に特化した iOS アプリとして設計",
    ],
    techStack: ["Swift", "SwiftUI"],
    appUrl: "",
    githubUrl: "",
    thumbnailUrl: "",
    status: "planning",
  },
  {
    id: "recipe-app",
    title: "食材ベースレシピアプリ",
    description:
      "使いたい食材からレシピを検索・管理できるWebアプリです。日常使いしやすいシンプルな操作性を重視しています。",
    highlights: [
      "使いたい食材からレシピを直感的に絞り込み",
      "「何を作るか」ではなく「何で作るか」から探せる設計",
      "日常使いに特化したシンプルな登録・検索導線",
    ],
    techStack: ["Next.js", "React", "TypeScript"],
    appUrl: "",
    githubUrl: "",
    thumbnailUrl: "",
    status: "planning",
  },
]

