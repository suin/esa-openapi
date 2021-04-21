import { SchemaObjectWithTitle } from "../dsl";

export const teamStats: SchemaObjectWithTitle = {
  title: "TeamStats",
  description: "チームの統計情報を表します。",
  type: "object",
  properties: {
    members: {
      type: "integer",
      description: "チーム内のメンバーの総数です",
      example: 20,
    },
    posts: {
      type: "integer",
      description: "チーム内の記事の総数です",
      example: 1959,
    },
    posts_wip: {
      type: "integer",
      description: "チーム内の記事(wip)の総数です",
      example: 59,
    },
    posts_shipped: {
      type: "integer",
      description: "チーム内の記事(shipped)の総数です",
      example: 1900,
    },
    comments: {
      type: "integer",
      description: "チーム内の記事につけられたコメントの総数です",
      example: 2695,
    },
    stars: {
      type: "integer",
      description: "チーム内の記事につけられたスターの総数です",
      example: 3115,
    },
    daily_active_users: {
      type: "integer",
      description:
        "過去24時間以内に記事の新規投稿/更新・コメント・Star等の活動を行ったメンバー数です。",
      example: 8,
    },
    weekly_active_users: {
      type: "integer",
      description:
        "過去7日間以内にに記事の新規投稿/更新・コメント・Star等の活動を行ったメンバー数です。",
      example: 14,
    },
    monthly_active_users: {
      type: "integer",
      description:
        "過去30日間以内にに記事の新規投稿/更新・コメント・Star等の活動を行ったメンバー数です。",
      example: 15,
    },
  },
  required: [
    "members",
    "posts",
    "posts_wip",
    "posts_shipped",
    "comments",
    "stars",
    "daily_active_users",
    "weekly_active_users",
    "monthly_active_users",
  ],
};
