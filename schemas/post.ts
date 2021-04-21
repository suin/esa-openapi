import { outdent } from "outdent";
import { SchemaObjectWithTitle, schemaRef } from "../dsl";
import { comment } from "./comment";
import { stargazer } from "./stargazer";
import { user } from "./user";

export const post: SchemaObjectWithTitle = {
  title: "Post",
  description: "ユーザが作成した記事を表します。",
  type: "object",
  properties: {
    number: {
      type: "integer",
      description: "チーム内で記事を特定するためのIDです",
      example: 123,
    },
    name: {
      type: "string",
      description: "記事名です。タグやカテゴリー部分は含みません。",
      example: "hi!",
    },
    full_name: {
      type: "string",
      description: "カテゴリとタグを含む、記事名です。",
      example: "日報/2015/05/09/hi! #api #dev",
    },
    wip: {
      type: "boolean",
      description: "記事がWIP(Working In Progress)状態かどうかを表します。",
      example: true,
    },
    body_md: {
      type: "string",
      description: "Markdownで書かれた記事の本文です",
      example: "# Getting Started",
    },
    body_html: {
      type: "string",
      description: "HTMLに変換された記事の本文です。",
      example: "<h1>Getting Started</h1>",
    },
    created_at: {
      type: "string",
      format: "date-time",
      description: "記事が作成された日時です",
      example: "2014-05-10T12:08:55+09:00",
    },
    message: {
      type: "string",
      description: "記事更新時の変更メモです。",
      example: "Add Getting Started section",
    },
    url: {
      type: "string",
      format: "url",
      description: "記事のURLです。",
      example: "https://docs.esa.io/posts/1",
    },
    updated_at: {
      type: "string",
      format: "date-time",
      description: "記事が更新された日時です。",
      example: "2014-05-11T19:21:00+09:00",
    },
    tags: {
      type: "array",
      description: "記事に紐付けられたタグです。",
      items: {
        type: "string",
      },
      example: ["api", "dev"],
    },
    category: {
      type: "string",
      nullable: true,
      description: outdent`
            記事が属するカテゴリです
            
            設定されていない場合は\`null\`になります
            `.trim(),
      example: "日報/2015/05/09",
    },
    revision_number: {
      type: "integer",
      description: "記事のリビジョン番号です。",
      example: 47,
    },
    created_by: {
      allOf: [schemaRef(user)],
      description: "記事を作成したユーザを表します。",
    },
    updated_by: {
      allOf: [schemaRef(user)],
      description: "記事を最後に更新したユーザを表します。",
    },
    kind: {
      type: "string",
      enum: ["stock", "flow"],
      description: "記事の種別を表します",
      example: "flow",
    },
    comments_count: {
      type: "integer",
      description: "記事へのコメント数を表します",
      example: 1,
    },
    tasks_count: {
      type: "integer",
      description: "記事中のタスクの総数を表します",
      example: 1,
    },
    done_tasks_count: {
      type: "integer",
      description: "記事中の完了済みのタスクの総数を表します",
      example: 1,
    },
    stargazers_count: {
      type: "integer",
      description: "記事にStarをしている人数を表します",
      example: 1,
    },
    watchers_count: {
      type: "integer",
      description: "記事をWatchしている人数を表します",
      example: 1,
    },
    star: {
      type: "boolean",
      description: "ユーザーが記事をStarしているかどうかを表します",
      example: true,
    },
    watch: {
      type: "boolean",
      description: "ユーザーが記事をWatchしているかどうかを表します",
      example: true,
    },
    sharing_urls: {
      type: "object",
      description:
        "外部公開のURLです。外部公開が有効になっていない場合`null`になります。",
      nullable: true,
      properties: {
        html: {
          type: "string",
          description: "HTMLページのURLです。",
          example:
            "https://esa-pages.io/p/sharing/11666/posts/2/1c6cad6275b311d53dbe.html",
        },
        slides: {
          type: "string",
          description: "スライドページのURLです。",
          example:
            "https://esa-pages.io/p/sharing/11666/posts/2/1c6cad6275b311d53dbe-slides.html",
        },
      },
      required: ["html", "slides"],
    },
    comments: {
      type: "array",
      description: "記事のコメント一覧を更新日の降順で返却します。",
      items: schemaRef(comment),
    },
    stargazers: {
      type: "array",
      description: "指定された記事にStarをしたユーザ一覧です",
      items: schemaRef(stargazer),
    },
  },
  required: [
    "number",
    "name",
    "full_name",
    "wip",
    "body_md",
    "body_html",
    "created_at",
    "message",
    "kind",
    "comments_count",
    "tasks_count",
    "done_tasks_count",
    "url",
    "updated_at",
    "tags",
    "category",
    "revision_number",
    "created_by",
    "updated_by",
    "stargazers_count",
    "watchers_count",
    "star",
    "watch",
    "sharing_urls",
  ],
};
