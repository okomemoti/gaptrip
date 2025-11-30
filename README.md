# GapTrip概要

**「行く前の期待（妄想）」と「行った後の結果（現実）」のギャップを楽しむ、飯と旅の記録アプリ。**

## 🛠 技術スタック

Backend: Java 21 (Spring Boot 3)

Frontend: TypeScript (Next.js 14 / React)

Database: MySQL 8.0

Infrastructure: Docker Compose

## 📦 環境構築手順

このプロジェクトは Docker Compose を使用して環境を構築しています。

1. 前提条件

Docker Desktop がインストールされ、起動していること。

2. 初回セットアップ (Cloneした場合)

プロジェクトをクローンした後、以下のコマンドで実行権限を付与してください。

## Mac/Linux の場合だけ必要なこと (Backendのビルドツールに権限付与)
以下のコマンドを実行

`chmod +x backend/mvnw`

## 3. アプリケーションの起動

以下のコマンドを実行すると、Backend, Frontend, Database が全て起動します。

`docker compose up -d`


## 4. アクセスURL

Frontend (画面): http://localhost:3000

Backend (API): http://localhost:8080

### DB接続情報:

`Host: localhost`

`Port: 3306`

`User: user`

`Pass: password`
