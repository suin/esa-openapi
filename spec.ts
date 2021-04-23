import { OpenAPIObject } from "openapi3-ts";
import { outdent } from "outdent";
import { OpenApiBuilder } from "./builder";
import { rateLimit } from "./headers/rateLimit";
import { commentId } from "./parameters/commentId";
import { includeCommentsAndStargazers } from "./parameters/includeCommentsAndStargazers";
import { order } from "./parameters/order";
import { pagination } from "./parameters/pagination";
import { postNumber } from "./parameters/postNumber";
import { teamName } from "./parameters/teamName";
import { importPaths } from "./paths";
import { authenticatedUser } from "./schemas/authenticatedUser";
import { batchMoveOptions } from "./schemas/batchMoveOptions";
import { batchMoveResult } from "./schemas/batchMoveResult";
import { comment } from "./schemas/comment";
import { createdEmoji } from "./schemas/createdEmoji";
import { createPostBody } from "./schemas/createPostBody";
import { newComment } from "./schemas/newComment";
import { updateCommentBody } from "./schemas/updateCommentBody";
import { editPost } from "./schemas/editPost";
import { updatePostBody } from "./schemas/updatePostBody";
import { inviteBody } from "./schemas/inviteBody";
import { emoji } from "./schemas/emoji";
import { emojiList } from "./schemas/emojiList";
import { invitation } from "./schemas/invitation";
import { invitationList } from "./schemas/invitationList";
import { member } from "./schemas/member";
import { createCommentBody } from "./schemas/createCommentBody";
import { createEmojiBody } from "./schemas/createEmojiBody";
import { newEmoji } from "./schemas/newEmoji";
import { newPost } from "./schemas/newPost";
import { newStar } from "./schemas/newStar";
import { paginatedComments } from "./schemas/paginatedComments";
import { paginatedMembers } from "./schemas/paginatedMembers";
import { paginatedPosts } from "./schemas/paginatedPosts";
import { paginatedStargazers } from "./schemas/paginatedStargazers";
import { paginatedTeams } from "./schemas/paginatedTeams";
import { paginatedWatchers } from "./schemas/paginatedWatchers";
import { post } from "./schemas/post";
import { stargazer } from "./schemas/stargazer";
import { team } from "./schemas/team";
import { teamStats } from "./schemas/teamStats";
import { user } from "./schemas/user";
import { watcher } from "./schemas/watcher";
import { tagObjects, tags } from "./tags";

export async function getSpec(): Promise<OpenAPIObject> {
  const builder = new OpenApiBuilder()
    .addTags(tagObjects)
    .addInfo({
      title: "esa API v1",
      description:
        "チームのナレッジ共有サービス[esa.io](https://esa.io/)のAPI v1の仕様書",
      version: "1.0.0",
      termsOfService: "https://docs.esa.io/posts/5",
      "x-logo": {
        url:
          "https://img.esa.io/uploads/production/attachments/3/2018/11/13/2/fe8f24a1-a23d-4c96-951c-f6f4433d1399.png",
        altText: "esa",
      },
    })
    .addExternalDocs({
      description: "esa API v1公式ドキュメント",
      url: "https://docs.esa.io/posts/102",
    })
    .addServer({ url: "https://api.esa.io/v1" })
    .addPaths(await importPaths())
    .addHeaders({
      ...rateLimit,
    })
    .addParameters([
      ...pagination,
      commentId,
      includeCommentsAndStargazers,
      order,
      postNumber,
      teamName,
    ])
    .addSchemas([
      authenticatedUser,
      batchMoveOptions,
      batchMoveResult,
      comment,
      createCommentBody,
      createCommentBody,
      createEmojiBody,
      createEmojiBody,
      createPostBody,
      createdEmoji,
      editPost,
      emoji,
      emojiList,
      invitation,
      invitationList,
      inviteBody,
      member,
      newComment,
      newEmoji,
      newPost,
      newStar,
      paginatedComments,
      paginatedMembers,
      paginatedPosts,
      paginatedStargazers,
      paginatedTeams,
      paginatedWatchers,
      post,
      stargazer,
      team,
      teamStats,
      updateCommentBody,
      updatePostBody,
      user,
      watcher,
    ])
    .addSecurityScheme("OAuth2", {
      type: "oauth2",
      description: "",
      flows: {
        authorizationCode: {
          authorizationUrl: "https://api.esa.io/oauth/authorize",
          tokenUrl: "https://api.esa.io/oauth/token",
          scopes: {
            read:
              "Read your profile (include email address). Read resources in your teams (Posts, Comments, Members, etc)",
            write:
              "Write resources in your teams (Posts, Comments, Members, etc)",
          },
        },
      },
    })
    .addSecurityScheme("AccessTokenHeader", {
      type: "http",
      scheme: "bearer",
      description: outdent`
        アクセストークンは、以下のようにリクエストヘッダに含められます。
        
        \`\`\`
        Authorization: Bearer 1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
        \`\`\``,
    })
    .addSecurityScheme("AccessTokenQueryParam", {
      type: "apiKey",
      in: "query",
      name: "access_token",
      description: outdent`
        また、URIクエリ文字列として指定することも可能です。
        
        \`\`\`
        api.esa.io/v1/teams?access_token=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
        \`\`\``,
    })
    .addSecurity({ AccessTokenHeader: ["read"] })
    .addSecurity({ AccessTokenQueryParam: ["read"] })
    .addSecurity({ OAuth2: ["read"] })
    .addTagsToAllOperations(tags.esa);

  return builder.getSpec();
}
