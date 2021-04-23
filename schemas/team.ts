import { schema } from "../dsl";

export const team = schema({
  title: "Team",
  description: "esa上で所属しているチームを表します。",
  type: "object",
  properties: {
    name: {
      type: "string",
      description:
        "チームを特定するための一意なIDです。サブドメインになります。",
      example: "docs",
    },
    privacy: {
      type: "string",
      enum: ["closed", "open"],
      description:
        'チームの公開範囲です。closed: "チームメンバーだけが情報にアクセスできます。open: "ShipItされた記事はインターネット上に公開されます。"',
      example: "closed",
    },
    description: {
      type: "string",
      description:
        'チームの説明です。登録がない場合には空文字列("")になります。',
      example: "esa.io official documents",
    },
    icon: {
      type: "string",
      format: "url",
      description: "チームのアイコンです。",
      example:
        "https://img.esa.io/uploads/production/teams/105/icon/thumb_m_0537ab827c4b0c18b60af6cdd94f239c.png",
    },
    url: {
      type: "string",
      format: "url",
      description: "チームのURLです。",
      example: "https://docs.esa.io/",
    },
  },
  required: ["name", "privacy", "description", "icon", "url"],
} as const);
