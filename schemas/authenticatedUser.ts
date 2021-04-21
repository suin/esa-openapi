import { SchemaObjectWithTitle, schemaRef } from "../dsl";
import { team } from "./team";

export const authenticatedUser: SchemaObjectWithTitle = {
  title: "AuthenticatedUser",
  description: "現在のアクセストークンで認証中のユーザの情報を表します。",
  type: "object",
  properties: {
    id: {
      type: "integer",
      description: "サービス内で一意なユーザIDです",
      example: 1,
    },
    name: {
      type: "string",
      description: "ユーザの名前です",
      example: "Atsuo Fukaya",
    },
    screen_name: {
      type: "string",
      description: "ユーザのスクリーンネームです",
      example: "fukayatsu",
    },
    created_at: {
      type: "string",
      description: "ユーザの作成日時です",
      format: "date-time",
      example: "2014-05-10T11:50:07+09:00",
    },
    updated_at: {
      type: "string",
      description: "ユーザの更新日時です",
      format: "date-time",
      example: "2016-04-17T12:35:16+09:00",
    },
    icon: {
      type: "string",
      description: "ユーザのアイコンのURLです",
      format: "url",
      example:
        "https://img.esa.io/uploads/production/users/1/icon/thumb_m_402685a258cf2a33c1d6c13a89adec92.png",
    },
    email: {
      type: "string",
      description: "ユーザのemailアドレスです",
      format: "email",
      example: "fukayatsu@esa.io",
    },
    teams: {
      type: "array",
      description: "所属するチームです",
      items: schemaRef(team),
    },
  },
  required: [
    "id",
    "name",
    "screen_name",
    "created_at",
    "updated_at",
    "icon",
    "email",
  ],
};
