import { defineConfig } from "astro/config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://jasperyong.com",
  experimental: {
    assets: true,
    viewTransitions: true
  },
  integrations: [
    sitemap({
      // https://docs.astro.build/en/guides/integrations-guide/sitemap/
      filter: (page) => page !== "https://jasperyong.com/",
    }),
    //   partytown(),
  ],
});
