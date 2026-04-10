import { TimelineCompany } from "../types/Company"

export const timelineData: TimelineCompany[] = [
  {
    id: "company-1",
    companyName: "株式会社サンプル",
    period: {
      from: "2023-04",
      to: "2024-12",
    },
    projects: [
      {
        id: "project-1",
        title: "会員向けWebアプリ開発",
        role: "フロントエンドエンジニア",
        period: {
          from: "2023-04",
          to: "2023-12",
        },
        description:
          "既存Webアプリのフロントエンド改修および新規画面開発を担当。",
        skills: ["React", "TypeScript", "CSS Modules", "GraphQL"],
      },
      {
        id: "project-2",
        title: "社内管理画面リプレイス",
        role: "フロントエンドエンジニア",
        period: {
          from: "2024-01",
          to: "2024-12",
        },
        description:
          "旧来システムの管理画面を Next.js ベースで再構築。API連携や状態管理も担当。",
        skills: ["Next.js", "TypeScript", "REST API", "React Hook Form"],
      },
    ],
  },
  {
    id: "company-2",
    companyName: "株式会社サンプル",
    period: {
      from: "2023-04",
      to: "2024-12",
    },
    projects: [
      {
        id: "project-1",
        title: "会員向けWebアプリ開発",
        role: "フロントエンドエンジニア",
        period: {
          from: "2023-04",
          to: "2023-12",
        },
        description:
          "既存Webアプリのフロントエンド改修および新規画面開発を担当。",
        skills: ["React", "TypeScript", "CSS Modules", "GraphQL"],
      },
      {
        id: "project-2",
        title: "社内管理画面リプレイス",
        role: "フロントエンドエンジニア",
        period: {
          from: "2024-01",
          to: "2024-12",
        },
        description:
          "旧来システムの管理画面を Next.js ベースで再構築。API連携や状態管理も担当。",
        skills: ["Next.js", "TypeScript", "REST API", "React Hook Form"],
      },
    ],
  },
]

