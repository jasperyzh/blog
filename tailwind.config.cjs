/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: (theme) => ({
      // To center containers by default
      center: true,
      // To add horizontal padding by default
      // padding: theme("spacing.1"),
    }),
  },
  plugins: [],
  // prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  // safelist: ["tw-grid-cols-2"],
};
