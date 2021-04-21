import { TagObject } from "openapi3-ts";

const tags = {
  category: { description: "記事のカテゴリ" },
  comment: { description: "記事のコメント" },
  emoji: { description: "絵文字" },
  invitation: { description: "招待" },
  member: { description: "メンバー" },
  post: { description: "記事" },
  star: { description: "Star" },
  team: { description: "チーム" },
  user: { description: "認証中のユーザー" },
  watch: { description: "Watch" },
} as const;

type Tags = {
  readonly [K: string]: {
    readonly description: string;
  };
};

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
