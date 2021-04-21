# @suin/esa-openapi

esa.io API v1 を OpenAPI 規格に基づいて定義したものです。

OpenAPI 定義ファイルは[esa-api.json](./esa-api.json)になります。

## 使い方

### Swagger Editor で見る

> TODO

### openapi-generator-cli でクライアントを生成する

> TODO

## 開発に参加する

このプロジェクトの開発に参加する方法について説明します。

- 変更等はプルリクエストを下さい。
- esa-api.json は**直接編集しない**ようにお願いします。

### パッケージマネージャー

パッケージマネージャーは PNPM をお使い下さい。

このプロジェクトをクローンしたら次のコマンドでパッケージをインストールします:

```shell
pnpm install
```

### 本プロジェクトのアプローチ

esa API はそれなりの規模になるため、OpenAPI のファイルひとつとして管理するのが難しいです。そこで、このプロジェクトでは esa API を TypeScript で記述し、プログラムによって esa-api.json を生成するアプローチをとっています。

### TypeScript ファイルの構成

esa API の記述は複数の TypeScript ファイルに分割しています。これらファイルの構造は主に次の通りになっています。

- headers/: リクエストレスポンスヘッダに関する記述
- parameters/: リクエストのパスやクエリーのパラメーター関する記述
- paths/: パスに関する記述。このディレクトリ構成は URL と一致するようになっています。
- schemas/: リクエストやレスポンスに含まれる JSON などのオブジェクトの記述
- spec.ts: API 仕様の全体像を記述

### esa-api.json の変更方法

esa-api.json を生成するには次のコマンドを実行してください:

```shell
pnpm generate:spec
```

### esa-api.json のバリデーション

esa-api.json をバリデーションするには次のコマンドを実行してください:

```shell
pnpm validate:spec
```

※実行には Java8 が必要です。

### esa-api.json に基づいて TypeScript クライアントを生成する

クライアントライブラリを生成するには次のコマンドを実行してください:

```shell
pnpm generate:client
```

※実行には Java8 が必要です。
