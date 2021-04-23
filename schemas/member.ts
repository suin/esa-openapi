import { schema } from "../dsl";

export const member = schema({
  title: "Member",
  description: "チームのメンバーを表します。",
  type: "object",
  properties: {
    myself: {
      type: "boolean",
      description: "自分自身であるかどうかのフラグです。",
      example: true,
    },
    name: {
      type: "string",
      description: "メンバーの名前です",
      example: "Atsuo Fukaya",
    },
    screen_name: {
      type: "string",
      description: "メンバーのスクリーンネームです",
      example: "fukayatsu",
    },
    icon: {
      type: "string",
      format: "url",
      description: "メンバーのアイコンのURLです",
      example:
        "https://img.esa.io/uploads/production/users/1/icon/thumb_m_402685a258cf2a33c1d6c13a89adec92.png",
    },
    role: {
      type: "string",
      enum: ["owner", "member"],
      description: "メンバーのロール(owner, member)です。",
      example: "owner",
    },
    posts_count: {
      type: "integer",
      description: "チーム内でメンバーが作成した記事数です",
      example: 222,
    },
    joined_at: {
      type: "string",
      format: "date-time",
      description: "チームにメンバーが参加した日時です",
      example: "2014-07-01T08:10:55+09:00",
    },
    last_accessed_at: {
      type: "string",
      format: "date-time",
      description: "チームにメンバーがアクセスした最後の日時です",
      example: "2019-12-27T16:23:23+09:00",
    },
    email: {
      type: "string",
      format: "email",
      description:
        "メンバーのemailです。このフィールドは team の owner だけが取得可能です",
      example: "fukayatsu@esa.io",
    },
  },
  required: [
    "myself",
    "name",
    "screen_name",
    "icon",
    "role",
    "posts_count",
    "joined_at",
    "last_accessed_at",
  ],
} as const);
