import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import vue from "@astrojs/vue";
// import image from "@astrojs/image";

// https://astro.build/config
// import sitemap from "@astrojs/sitemap";
// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // vue(),
    //  mdx(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    /* sitemap({
      // https://docs.astro.build/en/guides/integrations-guide/sitemap/
      // how to deal with robot.txt pages?
      filter: (page) => page !== "https://jasperyong.com/exp/",
    }), */
    // partytown(),
  ],
  site: "https://jasperyong.com",
  // SSR
  // output: "server"
});
