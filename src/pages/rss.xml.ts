/* import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
 */
import { getCollection, CollectionEntry } from "astro:content";

import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { formatBlogPosts } from "../layouts/Utils";

const postImportResult = await getCollection("blog");
const posts: CollectionEntry<"blog">[] = formatBlogPosts(postImportResult);

export async function get(context) {
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "My Astro Blog",
    description: "A humble Astrojs guide to the stars",
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: `
        <category>${post.data.category}</category>
      `
    })),
  });
}
