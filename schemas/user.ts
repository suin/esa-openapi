import { SchemaObjectWithTitle } from "../dsl";

export const user: SchemaObjectWithTitle = {
  title: "User",
  description:
    "記事を作成したユーザ、記事を最後に更新したユーザ、コメントを作成したユーザ、スターをしたユーザなどを表します。",
  type: "object",
  properties: {
    myself: {
      type: "boolean",
      description: "自分自身であるかどうかのフラグです。",
      example: true,
    },
    name: {
      type: "string",
      description: "ユーザ名です。",
      example: "Atsuo Fukaya",
    },
    screen_name: {
      type: "string",
      description: "ユーザを一意に識別するIDです。",
      example: "fukayatsu",
    },
    icon: {
      type: "string",
      format: "url",
      description: "ユーザのアイコンのURLです。",
      example:
        "http://img.esa.io/uploads/production/users/1/icon/thumb_m_402685a258cf2a33c1d6c13a89adec92.png",
    },
  },
  required: ["myself", "name", "screen_name", "icon"],
};
