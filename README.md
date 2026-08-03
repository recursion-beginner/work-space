# ソフトウェア開発みくじ

ソフトウェア開発に関する運勢をランダムに表示する、Web版のおみくじアプリです。

3人のチームで、GitHubのブランチとプルリクエストを使用して開発しました。

## アプリの概要

「おみくじを引く」ボタンを押すと、おみくじ箱のアニメーションが再生され、ソフトウェア開発に関する運勢がランダムに表示されます。

## 主な機能

* おみくじ結果のランダム表示
* おみくじ箱のアニメーション
* おみくじを繰り返し引く機能
* アプリの説明ページ
* 開発者一覧ページ

## 使用技術

* HTML
* CSS
* JavaScript

## 使い方

1. このリポジトリをクローンします。

```bash
git clone <リポジトリのURL>
```

2. クローンしたディレクトリに移動します。

```bash
cd <リポジトリ名>
```

3. `index.html` をWebブラウザで開きます。

4. 「おみくじを引く」ボタンを押すと、おみくじの結果が表示されます。

## 主なファイル構成

```text
.
├── index.html
├── about.html
├── developers.html
├── css
│   ├── about.css
│   ├── developers.css
│   ├── index.css
│   └── style.css
├── js
│   └── main.js
├── imgs
│   ├── omikuji.png
│   └── fortune
│       ├── xxx.png
│       └── xxx.png
└── README.md
```

## チーム開発の進め方

機能ごとにブランチを作成し、作業完了後にプルリクエストを作成しました。

プルリクエストでは、次の内容を確認してからマージしています。

* 実装内容が要件を満たしているか
* HTML、CSS、JavaScriptに不具合がないか
* 他のページの表示に影響していないか
* コードが読みやすいか

## 開発メンバー

* [Kou](https://github.com/KotaroY1630)
* [Naoki](https://github.com/elmoterate)
* [Tsuyoshi](https://github.com/tsuyoshikojima)

## ライセンス

このプロジェクトは学習目的で作成しています。

