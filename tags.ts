import { TagObject } from "openapi3-ts";

const tags = $tags({
  esa: {
    description: "",
    "x-displayName": " ",
    "x-traitTag": true,
  },
  category: {
    description: "記事のカテゴリの管理を行うAPIです。",
    "x-displayName": "カテゴリ",
  },
  comment: {
    description: "記事のコメントの投稿や取得などを行うAPIです。",
    "x-displayName": "コメント",
  },
  emoji: {
    description: "絵文字の管理を行うAPIです。",
    "x-displayName": "絵文字",
  },
  invitation: {
    description: "メンバーの招待を行うAPIです。",
    "x-displayName": "招待",
  },
  member: {
    description: "メンバーの管理を行うAPIです。",
    "x-displayName": "メンバー",
  },
  post: {
    description: "記事の投稿や取得などを行うAPIです。",
    "x-displayName": "記事",
  },
  star: {
    description: "記事やコメントのStarに関するAPIです。",
    "x-displayName": "Star",
  },
  tag: {
    description: "記事のタグに関するAPIです。",
    "x-displayName": "タグ",
  },
  team: {
    description: "所属するチームに関するAPIです。",
    "x-displayName": "チーム",
  },
  user: {
    description: "認証中のユーザーを参照するAPIです。",
    "x-displayName": "ユーザー",
  },
  watch: {
    description: "記事のWatchに関するAPIです。",
    "x-displayName": "Watch",
  },
} as const);

type Tags = {
  readonly [K: string]: {
    readonly description?: string;
    /**
     * ReDocのメニューに表示する文言
     */
    readonly ["x-displayName"]?: string;
    /**
     * ReDocのメニューに表示するかどうか
     */
    readonly ["x-traitTag"]?: boolean;
  };
};

function $tags<T extends Tags>(tags: T): T {
  return tags;
}

function toTagObjects(tags: Tags): ReadonlyArray<TagObject> {
  return Object.entries(tags).map(([name, value]) => ({
    name,
    ...value,
  }));
}

type TagNames<T extends Tags> = { [K in keyof T]: K };

function toTagNames<T extends Tags>(tags: T): Readonly<TagNames<T>> {
  const names: TagNames<T> = {} as TagNames<T>;

  for (const key of Object.keys(tags) as Array<keyof T>) {
    names[key] = key;
  }

  return names;
}

const tagNames = toTagNames(tags);

export { tagNames as tags };

export const tagObjects = toTagObjects(tags);
