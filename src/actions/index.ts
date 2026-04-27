import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { fetchVideoPosts } from "../utils/bluesky-api";
import { parseRichText } from "../utils/richtext";

export const server = {
  /** Loads the next page of video posts for a handle using the stored cursor. */
  loadMorePosts: defineAction({
    input: z.object({
      handle: z.string(),
      cursor: z.string(),
    }),
    handler: async ({ handle, cursor }) => {
      const videoFeed = await fetchVideoPosts(handle, cursor, 30);

      const posts = videoFeed.posts.map(post => ({
        postId: post.postId,
        thumbnail: post.thumbnail,
        captionHtml: parseRichText(post.caption),
      }));
      
      return {
        posts,
        nextCursor: videoFeed.cursor || null,
      };
    },
  }),
};
