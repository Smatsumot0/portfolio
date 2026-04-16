# Portfolio

## 🔗 URL

Coming soon...

---

## 🧑‍💻 About

フロントエンドを中心に開発しているエンジニアです。
React / Next.js を用いたWebアプリケーション開発を得意としています。

バックエンド（NestJS / Prisma）も含めたフルスタック開発経験があります。

---

## 🎯 このポートフォリオについて

本ポートフォリオは、これまでの経験・スキル・制作物をまとめたものです。
「シンプルで見やすく、直感的に理解できるUI」を意識して設計しています。

---

## 🧩 コンテンツ

- About（自己紹介）
- Timeline（職歴）
- Works（制作物）
- Contact

---

## 🛠 技術スタック

### Frontend

- Next.js (App Router)
- React
- TypeScript

### Styling

- CSS Modules
- Design Tokens

### その他

- ESLint
- Prettier

---

## 💡 こだわりポイント

- feature単位でのコンポーネント分割による責務の明確化
- 再利用性を意識したUI設計（ui / layout の分離）
- Design Tokenによるスタイル管理とテーマ分離
- Server / Client Componentの責務を意識した構成
- クライアントコンポーネントを最小限に抑えた設計

---

## 📸 スクリーンショット

![top](./docs/top.png)

---

## 🏗 ディレクトリ構成

```plaintext
app/
  components/
    layout/     # レイアウト系コンポーネント
    ui/         # 汎用UIコンポーネント
    features/   # 機能単位のコンポーネント
  globals.css
  layout.tsx
  page.tsx
  icon.png
```

---

## 🧠 設計意図

- App Router構成に準拠し、`app/`配下に集約
- `components`は責務ごとに分割（layout / ui / features）
- feature単位で分離することで拡張性を確保
- UIは再利用可能な粒度で設計
- グローバルスタイルとコンポーネントスタイルを分離

---

## 🚧 今後の改善

- アニメーションの強化
- パフォーマンス最適化
- アクセシビリティ向上
- スマホ向け最適化

---

## 🧑‍💻 セットアップ

```bash
pnpm install
pnpm dev
```

