# @suin/esa-openapi

esa.io API v1 を OpenAPI 規格に基づいて定義したものです。

OpenAPI 定義ファイルは[esa-api.json](./esa-api.json)になります。

## 使い方

### Swagger Editor で見る

Swagger Editor は、ブラウザ上で OpenAPI を編集したり、API ドキュメントをプレビューが見れるエディタです。

Swagger Editor で esa API を読み込むには次の手順を行ってください:

1. [Swagger Editor を開く](https://editor.swagger.io/#)
1. メニューの「File」→「Import URL」でダイアログを開き、次の URL を入力する:

   ```
   https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json
   ```

エディタのプレビュー画面上では、認証情報を入力することで、実際の API にリクエストを送信することもできます。認証情報はプレビュー画面右上の「Authorize」を開き、「AccessTokenHeader」に本物の esa API アクセストークンを入力してください。(OAuth2 による認証方法はうまく動きません。)

### ReDoc で見る

<a href="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json"><img width="1280" alt="ReDocのプレビュー" src="https://user-images.githubusercontent.com/855338/115491377-d0ff7d00-a29a-11eb-85a7-ef0d7ff7bc3d.png"></a>

[ReDoc](https://redoc.ly/) は OpenAPI のファイルを読み込むだけで API ドキュメントを表示できる React ベースのウェブアプリケーションです。

<p align="center"><a href="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json"><strong>» esa API を ReDoc で見る «</strong></a></p>

### OpenAPI Generator でクライアントを生成する

OpenAPI Generator は様々な言語の API クライアントを生成できるツールです。

#### OpenAPI Generator のインストール

OpenAPI Generator は次の複数の方法でインストールできます。

- NPM
- Homebrew
- Docker
- JAR

詳細は[公式ドキュメント](https://openapi-generator.tech/docs/installation)をご覧ください。

ここでは NPM でインストールした OpenAPI Generator を用いてクライアントを生成する方法を説明します。

#### TypeScript のクライアントを生成する

TypeScript のクライアントを生成するには次のコマンドを実行します:

```shell
npx @openapitools/openapi-generator-cli generate \
    -g typescript-axios \
    -i https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json \
    -o client \
    --additional-properties=supportsES6=true,typescriptThreePlus=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models
```

クライアントは`client`ディレクトリに生成されます。これを TypeScript で使うには次のようにします:

```typescript
import { Configuration, EsaApi } from "./client";

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN })
  );
  const { data } = await esaApi.getPosts({ teamName: "doc" });

  for (const post of data.posts) {
    console.log(post.name);
  }
})();
```

TypeScript は typescript-axios の他にも次のクライアントが生成できます:

- typescript (experimental)
- typescript-angular
- typescript-angularjs-deprecated (deprecated)
- typescript-aurelia
- typescript-fetch
- typescript-inversify
- typescript-jquery
- typescript-nestjs (experimental)
- typescript-node
- typescript-redux-query
- typescript-rxjs

#### PHP のクライアントを生成する

Guzzle を用いた PHP クライアントライブラリが生成できます。

PHP のクライアントを生成するには次のコマンドを実行します:

```shell
npx @openapitools/openapi-generator-cli generate \
    -g php \
    -i https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json \
    -o client \
    --additional-properties=invokerPackage='YourOrg\YourProject'
```

### NPM でインストールして使う

esa-api.json は NPM パッケージとして配布しています。npm でインストールすると JavaScript 上で読み込めます。

インストール方法:

```shell
npm install @suin/esa-openapi
```

Node.js で読み込む方法:

```js
const esaOpenApi = require("@suin/esa-openapi");

console.log(esaOpenApi);
//=> {
//   openapi: '3.0.0',
//   info: {
//     title: 'esa API v1',
//     description: 'チームのナレッジ共有サービス[esa.io](https://esa.io/)のAPI v1の仕様書',
//     version: '1.0.0',
//     termsOfService: 'https://docs.esa.io/posts/5',
//     'x-logo': {
//       url: 'https://img.esa.io/uploads/production/attachments/3/2018/11/13/2/fe8f24a1-a23d-4c96-951c-f6f4433d1399.png',
//       altText: 'esa'
//     }
//   },
// ...
```

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
