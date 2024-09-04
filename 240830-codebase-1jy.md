# tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "preserve",
    "allowJs": true
  }
}
```

# postcss.config.cjs

```cjs
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 0,
    }),
  ],
};

```

# package.json

```json
{
  "name": "jyblog",
  "type": "module",
  "version": "1.0.1",
  "private": true,
  "browserslist": [
    "defaults"
  ],
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/partytown": "^2.1.1",
    "@astrojs/rss": "^4.0.7",
    "@astrojs/sitemap": "^3.1.6",
    "astro": "^4.12.3",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3",
    "marked": "^13.0.3",
    "postcss": "^8.4.40",
    "postcss-preset-env": "^9.6.0"
  },
  "devDependencies": {
    "sass": "^1.77.8"
  }
}

```

# astro.config.mjs

```mjs
// https://astro.build/config
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import partytown from "@astrojs/partytown";
// import tailwind from "@astrojs/tailwind";
// import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://jasperyong.com",
  base: '/',
  // experimental: {
  //   assets: true,
  //   viewTransitions: true
  // },
  integrations: [
    sitemap({
      // https://docs.astro.build/en/guides/integrations-guide/sitemap/
      filter: (page) => page !== "https://jasperyong.com/",
    }),
    // partytown(),
    // tailwind(),
    // mdx(),
  ],

  // markdown: {
  //   drafts: true,
  //   shikiConfig: {
  //     theme: "css-variables"
  //   }
  // },

  // shikiConfig: {
  //   wrap: true,
  //   skipInline: false,
  //   drafts: true
  // },
});


```

# README.md

```md
# mywebsite

- [ ] dark mode (BsThemeButton.astro - issue with cross-page)


## content_setup

1. homepage2024
    - have fun with homepage
2. portfolio2024
    - features portfolio & work process
    - downloadable PDF to showcase everything
3. resume2024
    - resume in PDF format
4. blog

## website_development_setup

- terminal + nodejs + npm

- vsc
- figma

- astrojs
- sass
- bootstrapcss

- git
- github actions
- github page

- perplexity.ai
- codeium

## logs

- 240731 - astro-theme-microblog - using it as reference to improve jy-blog
- 240104 - added formspree for receiving guest's messages thru emails
- 231204 - completed setup p5js boilerplate template
- 230821-[Deploy Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)


---


Project Overview
----------------

**Project Name**: (Your project name here) **Purpose and Goals**:  
This project aims to (describe the main purpose of your project). Our primary goals are:

*   (Goal 1)
*   (Goal 2)
*   (Goal 3)

**Key Features**:

*   Feature 1: (Brief description)
*   Feature 2: (Brief description)
*   Feature 3: (Brief description)

Getting Started
---------------

Prerequisites
-------------

Before you begin, ensure you have the following installed:

*   (Required software 1)
*   (Required software 2)
*   (Any other dependencies)

Installation
------------

1.  Clone the repository:\`\`\`bash
    git clone https://github.com/yourusername/your-repo-name.git
    \`\`\`
    
2.  Navigate to the project directory:\`\`\`bash
    cd your-repo-name
    \`\`\`
    
3.  Install dependencies:\`\`\`bash
    npm install  # or yarn install, depending on your package manager
    \`\`\`
    

Configuration
-------------

(If your project requires configuration, explain the process here. For example:)

1.  Copy the `.env.example` file to `.env`:\`\`\`bash
    cp .env.example .env
    \`\`\`
    
2.  Open the `.env` file and fill in the required values:\`\`\`text
    API_KEY=your_api_key_here
    DATABASE_URL=your_database_url_here
    \`\`\`
    

Usage Guide
-----------

Basic Commands
--------------

*   To start the application:\`\`\`bash
    npm start
    \`\`\`
    
*   To run tests:\`\`\`bash
    npm test
    \`\`\`
    
*   (Add any other important commands)

Common Use Cases
----------------

1.  **Use Case 1**: (Describe a common use case)\`\`\`javascript
    // Example code for use case 1
    \`\`\`
    
2.  **Use Case 2**: (Describe another use case)\`\`\`javascript
    // Example code for use case 2
    \`\`\`
    

(Add screenshots or more detailed explanations as needed)

API Reference
-------------

(If your project has an API, document its endpoints here. For example:)

GET /api/items
--------------

Retrieves a list of items. **Parameters**:

*   `limit` (optional): Number of items to return (default: 10)

**Response**:

\`\`\`json
{
  "items": [
    {
      "id": 1,
      "name": "Item 1"
    },
    {
      "id": 2,
      "name": "Item 2"
    }
  ]
}
\`\`\`

POST /api/items
---------------

Creates a new item. **Request Body**:

\`\`\`json
{
  "name": "New Item"
}
\`\`\`

**Response**:

\`\`\`json
{
  "id": 3,
  "name": "New Item"
}
\`\`\`

Configuration Options
---------------------

(List and explain any configuration options your project uses. For example:)

*   `DEBUG_MODE`: Set to `true` to enable debug logging
*   `MAX_CONNECTIONS`: Maximum number of concurrent connections (default: 100)

Troubleshooting
---------------

Common Issues
-------------

1.  **Issue**: (Describe a common issue)  
    **Solution**: (Provide the solution)
2.  **Issue**: (Describe another issue)  
    **Solution**: (Provide the solution)

Error Messages
--------------

*   `Error: Connection refused`: This usually means the database is not running. Ensure your database server is started and the connection details in `.env` are correct.

Contributing Guidelines
-----------------------

We welcome contributions to this project! Here's how you can help:

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please ensure your code adheres to our style guidelines and includes appropriate tests.

License Information
-------------------

This project is licensed under the (Your chosen license, e.g., MIT License). See the [LICENSE](/LICENSE) file for details.

Version History
---------------

*   1.0.0 (YYYY-MM-DD)
    
    *   Initial release
    *   Feature A added
    *   Feature B added
    
*   1.1.0 (YYYY-MM-DD)
    
    *   Bug fix in Feature A
    *   Feature C added
    

This template provides a solid foundation for your project documentation. Remember to replace the placeholder text with specific information about your project. As your project evolves, keep this documentation up-to-date to ensure it remains a valuable resource for users and contributors.

```

# CNAME

```
jasperyong.com
```

# .gitignore

```
# build output
dist/

# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# astro
.astro
```

# src/env.d.ts

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

```

# src/consts.ts

```ts
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_YEAR = new Date().getFullYear();
export const SITE_TITLE = 'jyzh';
export const SITE_DESCRIPTION = 'Welcome to my website!';

```

# public/favicon.svg

This is a file of the type: SVG Image

# .astro/types.d.ts

```ts
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"231126-mvp of blog and portfolio.md": {
	id: "231126-mvp of blog and portfolio.md";
  slug: "231126-mvp-of-blog-and-portfolio";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"231202-nice_ai_art.md": {
	id: "231202-nice_ai_art.md";
  slug: "231202-nice_ai_art";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"231204-circles_goes_wiggling.md": {
	id: "231204-circles_goes_wiggling.md";
  slug: "231204-circles_goes_wiggling";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"240505-new_chapter.md": {
	id: "240505-new_chapter.md";
  slug: "240505-new_chapter";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Building GPT for my EDM Music Journey.md": {
	id: "Building GPT for my EDM Music Journey.md";
  slug: "building-gpt-for-my-edm-music-journey";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"On capturing my processing work - ccapturejs.md": {
	id: "On capturing my processing work - ccapturejs.md";
  slug: "on-capturing-my-processing-work---ccapturejs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Setup for Blog & Portfolio.md": {
	id: "Setup for Blog & Portfolio.md";
  slug: "setup-for-blog--portfolio";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Setup for my generative art.md": {
	id: "Setup for my generative art.md";
  slug: "setup-for-my-generative-art";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Setup for my webdev.md": {
	id: "Setup for my webdev.md";
  slug: "setup-for-my-webdev";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Setup for website development.md": {
	id: "Setup for website development.md";
  slug: "setup-for-website-development";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"The Malaysian's Favourite Clock.md": {
	id: "The Malaysian's Favourite Clock.md";
  slug: "the-malaysians-favourite-clock";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}

```

# .astro/settings.json

```json
{
	"_variables": {
		"lastUpdateCheck": 1723536377935
	}
}
```

# .vscode/launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "command": "./node_modules/.bin/astro dev",
      "name": "Development server",
      "request": "launch",
      "type": "node-terminal"
    }
  ]
}

```

# .vscode/extensions.json

```json
{
  "recommendations": ["astro-build.astro-vscode"],
  "unwantedRecommendations": []
}

```

# src/layouts/Layout.astro

```astro
---
import "../global/global.scss";

import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

import Head from "./Head.astro";
// import Link from "./Link.astro";
// import EffectGrain from "./_EffectGrain.astro";

import Header from "./Header.astro";
import Footer from "./Footer.astro";

export interface Props {
  empty_canvas?: boolean;
  title?: string;
  description?: string;
  image?: string;
  large_banner?: boolean;
}

const {
  empty_canvas = false,
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  image,
  large_banner = false,
} = Astro.props as Props;
---

<!doctype html>
<html lang="en">
  <Head {title} {description} {image} />

  <body class="sticky-footer">
    <div class="wrapper">
      {!empty_canvas && <Header {large_banner} />}

      <slot />

      {!empty_canvas && <Footer />}
    </div>
    <style is:global>
      /* sticky_footer */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body.sticky-footer {
        & .wrapper {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        & .wrapper > header,
        & .wrapper > footer {
          flex-grow: 0;
          flex-shrink: 0;
        }
        & .wrapper > main {
          flex-grow: 1;
        }
      }
    </style>
    <script>
      import "bootstrap";
    </script>
  </body>
</html>

<!-- 
microblog/src/layouts/BaseLayout.astro

---
import BaseHead from "@/components/BaseHead.astro";
import Navigation from "@/components/global/Navigation.astro";
import Footer from "@/components/global/Footer.astro";
---

<html lang="en">
  <head>
    <BaseHead />
  </head>
  <body class="bg-white flex flex-col min-h-screen">
    <Navigation />
    <main class="flex-grow"><slot /></main>
    <Footer />
  </body>
</html>

-->

```

# src/layouts/Header.astro

```astro
---
// source: https://getbootstrap.com/docs/5.3/examples/navbars/
// import BsThemeButton from "../components/BsThemeButton.astro";

import { SITE_TITLE } from "../consts";

export interface Props {
  large_banner?: boolean;
}

const { large_banner } = Astro.props as Props;
---

<header class="my-3">
  <nav class="navbar navbar-expand-sm">
    <div class="container header_layout">
      <!-- pagebanner -->
      <div class={`page-banner${large_banner ? " page-banner--large" : ""}`}>
      </div>

      <!-- logo -->
      <a class="navbar-brand" href="/">
        <div class="logo">{SITE_TITLE}</div>
      </a>

      <!-- menu_toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar_primary"
        aria-controls="navbar_primary"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- menu -->
      <div class="collapse navbar-collapse" id="navbar_primary">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="/posts">blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/portfolio">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/about">about</a>
          </li>
        </ul>
      </div>

      <!-- soc_med -->
      <div class="nav-social">
        <a href="https://www.instagram.com/"
          ><img src="/images/instagram.png" /></a
        >
      </div>
    </div>
  </nav>
</header>

<style>
  .page-banner {
    width: 100%;
    background-color: #ddd; /* placeholder color */
    background-size: cover;
    background-position: center;
    aspect-ratio: 3/1;

    @media screen and (min-width: 768px) {
      aspect-ratio: 5/1;
    }
  }

  .page-banner--large {
    aspect-ratio: 3/1;
  }

  .header_layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr auto;
      .navbar-brand {
        display: block;
        height: 100%;
        grid-column: 1/1;
        grid-row: 1/-1;
        z-index: 10;
        align-self: self-start;
      }
      .page-banner {
        grid-column: 1/-1;
        grid-row: 1/2;
      }
      .navbar-toggler {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      .navbar-collapse {
        grid-column: 2/ -1;
        grid-row: 2/-1;
      }
      .nav-social {
        display: none;
        /* grid-column: -1/ -1;
        grid-row: 1/1; */
      }
    }
  }

  .navbar-brand {
    margin: 1rem;
    .logo {
      position: sticky;
      top: 1rem;
      aspect-ratio: 1/1;
      width: 120px;
      background: #ccc;
    }
  }
</style>

```

# src/layouts/Head.astro

```astro
---
export interface Props {
  title?: string;
  description?: string;
  image?: string;
}

import { ViewTransitions } from "astro:transitions";
import { SITE_TITLE } from "../consts";

const canonicalURL = new URL(Astro.url.pathname, Astro.site);

const {
  title,
  description,
  image = "/placeholder-post.jpg",
} = Astro.props as Props;

const seo_title = title !== SITE_TITLE ? `${title} | ${SITE_TITLE}` : title;
---

<head>
  <!-- Global Metadata -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="generator" content={Astro.generator} />

  <!-- Canonical URL -->
  <link rel="canonical" href={canonicalURL} />

  <title>{seo_title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <!-- tracking -->

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={Astro.url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image, Astro.url)} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={Astro.url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={new URL(image, Astro.url)} />

  <!-- Google tag (gtag.js) -->
  <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-LQ2S4M9E6S"
  ></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-LQ2S4M9E6S");
  </script>

  <ViewTransitions />
</head>
<!-- 
---
import "../styles/global.css";
import { AstroSeo } from "@astrolib/seo";
---
Use AstroSeo in all the pages you want different Seo than the index page
<AstroSeo
  title="Lexington Themes"
  description="Your site description goes here"
  canonical="https://www.lexingtonthemes.com"
  openGraph={{
    url: "https://www.lexingtonthemes.com",
    title: "Open Graph Title",
    description: "Open Graph Description",
    images: [
      {
        url: "https://www.lexingtonthemes.com/opengraph/social-og.jpg",
        width: 1200,
        height: 630,
        alt: "Social open graph",
        type: "image/jpeg",
      },
      {
        url: "https://www.lexingtonthemes.com/opengraph/twitter-og.jpg",
        width: 4096,
        height: 4096,
        alt: "Twitter open graph",
        type: "image/jpeg",
      },
      { url: "https://www.lexingtonthemes.com/opengraph/social-og.jpg" },
      { url: "https://www.lexingtonthemes.com/opengraph/twitter-og.jpg" },
    ],
    site_name: "YourSitesName",
  }}
  twitter={{
    handle: "@TwitterHandle",
    site: "@site",
    cardType: "summary_large_image",
  }}
/>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="author" content="Michael Andreuzza" />
<meta name="your keywords" content="Add ypour keywords here" />
!-- Favicon guidelines generated with https://favicon.io/ --
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/images/favicons/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/images/favicons/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/images/favicons/favicon-16x16.png"
/>
<link rel="manifest" href="/images/favicons/site.webmanifest" />
<link
  rel="mask-icon"
  href="/images/favicons/safari-pinned-tab.svg"
  color="#ffffff"
/>
<meta name="msapplication-TileColor" content="#ffffff" />
<meta name="theme-color" content="#ffffff" />
<link rel="manifest" href="/favicons/site.webmanifest" />
<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff" />
!-- HTML in your document's head --
<link rel="preconnect" href="https://rsms.me/" />
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
<link
  href="https://api.fontshare.com/v2/css?f[]=jet-brains-mono@1,2&display=swap"
  rel="stylesheet"
/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet">
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
-->

```

# src/layouts/Footer.astro

```astro
---
// source: https://getbootstrap.com/docs/5.3/examples/footers/

import { SITE_TITLE, SITE_DESCRIPTION, SITE_YEAR } from "../consts";
---

<footer class="pt-5">
  <div class="container text-center">
    <p class="hello_world">
      {`(`}。・∀・{`)`}ﾉ*:･ﾟhello_world
      <span class="stars">
        <span class="star animate--moveUpDown" style="--animation-delay: 0">🌟</span>
        <span class="star animate--moveUpDown" style="--animation-delay: .314s"
          >🌟</span
        >
        <span class="star animate--moveUpDown" style="--animation-delay: .628s"
          >🌟</span
        >
      </span>
    </p>

    <p>
      A blog with collection of learnings and experiments.
      <br />Hope you enjoy your visit!
    </p>
    <p>
      <a
        class="text-body-secondary"
        target="_blank"
        href="https://www.instagram.com/jasperyzh/"
        ><i class="bi-instagram"></i></a
      >
    </p>

    <p class="copy">
      &copy;{SITE_YEAR}
      {SITE_TITLE}
    </p>
  </div>
</footer>

<style>
  .copy,
  .hello_world {
    font-size: 0.8rem;
  }
  .hello_world {
    display: inline-block;
    position: relative;
  }
  span.stars {
    position: absolute;
    right: -3rem;
    top: 0;
    span.star {
      display: inline-block;
      font-family: monospace;
      filter: drop-shadow(3px 3px 12px rgba(252 213 63 / 1));
    }
  }
  .animate--moveUpDown {
    animation: moveUpDown 2s ease-in-out infinite;
    animation-delay: var(--animation-delay, 0);
  }
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(
        -1.5rem
      ); /* Adjust the value to control the height of the bounce */
    }
  }
</style>

```

# src/pages/rss.xml.ts

```ts
import { getCollection, CollectionEntry } from "astro:content";

import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { formatBlogPosts } from "../global/Utils";

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
        <category>${post.data.tag}</category>
      `
    })),
  });
}

/* 
// microblog/src/pages/rss.xml.js

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://my-blog-site.netlify.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
} */
```

# src/pages/index.astro

```astro
---
import { getCollection } from "astro:content";

import Layout from "../layouts/Layout.astro";
import EntriesOne from "../components/template-parts/EntriesOne.astro";

import ContactForm from "../components/ContactForm.astro";

const allPosts = await getCollection("posts");
const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

// Sort posts by date in descending order (newest first)
const sortedPosts = allPosts
  .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
  .slice(0, 6);
---

<Layout large_banner={true}>
  <main class="d-flex flex-column align-items-center justify-content-center">
    <section class="container">
      <!-- <ol role="list" class="flex flex-wrap gap-3">
          {
            tags.map((tag) => (
              <li class="inline-flex items-center uppercase mx-auto hover:text-blue-500 text-xs font-medium text-black">
                <a href={`/tags/${tag}`}>{tag}</a>
              </li>
            ))
          }
        </ol> -->
      <ul class="grid__posts">
        {
          sortedPosts.map((post) => (
            <EntriesOne
              url={"/posts/" + post.slug}
              title={post.data.title}
              description={post.data.description}
              alt={post.data.title}
              pubDate={post.data.pubDate.toString().slice(0, 10)}
              author={post.data.author}
              image={post.data.image}
              tags={post.data.tags}
            />
          ))
        }
      </ul>
    </section>
  </main>
</Layout>

```

# src/pages/about.astro

```astro
---
import { getCollection } from "astro:content";

import Layout from "../layouts/Layout.astro";
---

<Layout>
  <main class="d-flex flex-column align-items-center justify-content-center">
    <section class="container">
      <h2>
        About Me

        <pre class="d-inline-flex">(b ﾟ vﾟ)ノ</pre> Welcome to My Portfolio!
      </h2>
      <p>
        [draft] Welcome to my digital portfolio! I'm Jasper, and I'm thrilled to
        have you here. This space is not just a showcase of my professional
        journey; it's a canvas where my passions, skills, and dreams blend to
        create a vivid picture of who I am and what I do.
      </p>
      <a href="#" class="btn btn-primary">Download My Resume</a>
    </section>
  </main>
</Layout>

```

# src/pages/404.astro

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="404 Page Not Found">
  <main class="d-flex flex-column align-items-center justify-content-center">
    <h1>(╯°□°）╯ ︵ <span>404: not_found</span></h1>
    <a href="/" class="back">go_home</a>
  </main>
</Layout>
<style>
  span {
    display: inline-block;
    rotate: 180deg;
    font-family: monospace;
  }
</style>

```

# src/components/ContactForm.astro

```astro
<form
  class="row"
  id="contact_me"
  action="https://formspree.io/f/xdoqowbb"
  method="POST"
>
  <div class="col col-md-6 mx-auto">
    <h2>Drop me a message! :)</h2>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" name="email" />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" name="message" rows="3"></textarea>
    </div>

    <button type="submit" id="my-form-button" class="btn btn-primary"
      >Submit</button
    >

    <p id="my-form-status"></p>
  </div>
</form>
<!-- Place this script at the end of the body tag -->
<script is:inline>
  var form = document.getElementById("my-form");
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);
</script>

```

# src/components/BsThemeButton.astro

```astro
---
// https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript
---

<button
  id="darkModeToggle"
  class="btn"
  style="filter: drop-shadow(3px 3px 12px rgba(252 213 63 / 1));">🌕</button
>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("darkModeToggle");
    btn.addEventListener("click", function () {
      const theme = document.documentElement.getAttribute("data-bs-theme");
      if (theme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        btn.textContent = "🌑";
      } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        btn.textContent = "🌕";
      }
    });

    // Initialize button state
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    if (currentTheme === "dark") {
      btn.textContent = "🌕";
    } else {
      btn.textContent = "🌑";
    }
  });
</script>
<style is:global>
  * {
    transition: background-color 0.3s ease;
  }
</style>

```

# src/global/global.scss

```scss
@import "bootstrap/scss/bootstrap";
@import "bootstrap-icons/font/bootstrap-icons.css";

// darkmode
html {
  transition: background-color 0.3s, color 0.3s;
}


/* 
// [use local fonts over loading via /public](https://www.youtube.com/watch?v=lksnr4e-npo)
// [Switzer](https://www.fontshare.com/fonts/switzer
@font-face {
    font-family: "Switzer";
    src:
        local("Switzer Regular"),
        url("/fonts/Switzer-Regular.woff2") format("woff2"),
        url("/fonts/Switzer-Regular.woff") format("woff"),
        url("/fonts/Switzer-Regular.ttf") format("ttf");
    font-style: normal;
    font-weight: 400;
}

@font-face {
    font-family: "Switzer";
    src:
        local("Switzer Italic"),
        url("/fonts/Switzer-Italic.woff2") format("woff2"),
        url("/fonts/Switzer-Italic.woff") format("woff"),
        url("/fonts/Switzer-Italic.ttf") format("ttf");
    font-style: italic;
    font-weight: 400;
}

@font-face {
    font-family: "Switzer";
    src:
        local("Switzer Bold"),
        url("/fonts/Switzer-Bold.woff2") format("woff2"),
        url("/fonts/Switzer-Bold.woff") format("woff"),
        url("/fonts/Switzer-Bold.ttf") format("ttf");
    font-style: normal;
    font-weight: 700;
}

@font-face {
    font-family: "Switzer";
    src:
        local("Switzer Bold Italic"),
        url("/fonts/Switzer-BoldItalic.woff2") format("woff2"),
        url("/fonts/Switzer-BoldItalic.woff") format("woff"),
        url("/fonts/Switzer-BoldItalic.ttf") format("ttf");
    font-style: italic;
    font-weight: 700;
}

// global_style
:root {
    --html-fontSize: 16px;
    --html-fontFamily: Switzer, Verdana, Geneva, Tahoma, sans-serif;

    --body-maxWidth: 72ch;
    --body-color: #555;
    --body-backgroundColor: #fefdfc;

    --size: 1.608rem;
    --size-sm: calc(0.608rem * 1.608);
    --size-lg: calc(1.608rem * 2);

    --dark: #222;
    --light: #f2f2f2;
    --grey: #999;

    --h1: calc(var(--size) * 1.608);
    --h2: calc(var(--size) * 1.11);
    --h3: var(--size);
    --h4: calc(var(--size) * 0.95);
    --h5: calc(var(--size) * 0.9);
    --h6: calc(var(--size) * 0.8);
}
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    color-scheme: light dark;
    font-family: var(--html-fontFamily);
    font-size: var(--html-fontSize);
}
body {
    max-width: var(--body-maxWidth);
    background-color: var(--body-backgroundColor);
    color: var(--body-color);
    padding: var(--size) var(--size-sm);

    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
hr {
    width: 100%;
    border-top: none;
    border-color: var(--grey);
    margin: var(--size-sm) auto;
}
h1 {
    font-size: var(--h1);
}
h2 {
    font-size: var(--h2);
}
h3 {
    font-size: var(--h3);
}
h4 {
    font-size: var(--h4);
}
h5 {
    font-size: var(--h5);
}
h6 {
    font-size: var(--h6);
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 var(--size) 0;
    line-height: 1.2;
}
pre {
    padding: var(--size);
    white-space: pre-wrap;
    word-wrap: break-word;

    :is(& > ol, & > ul) {
        line-height: 1;
    }

    .task-list-item {
        list-style-type: none;
    }
    ul ul,
    ol ol {
        padding-left: 1rem;
    }
}
code {
    padding: 0.2rem 0.4rem;
    background-color: var(--light);
}
pre > code {
    all: unset;
}
content {
    line-height: 1.8;
}
blockquote {
    border: 1px solid var(--grey);
    color: var(--dark);
    padding: var(--size-sm) 0px var(--size-sm) var(--size-lg);
    margin: 0;
    font-style: italic;
}
svg,
img,
video {
    max-width: 100%;
    height: auto;
}
table {
    width: 100%;
}
small {
    font-size: var(--size-sm);
}
textarea {
    width: 100%;
    font-size: 16px;
}
input {
    font-size: 16px;
}

// utilities
$sizes: (
    "": var(--size),
    "-sm": var(--size-sm),
    "-lg": var(--size-lg)
);

$directions: (
    "t": "top",
    "b": "bottom",
    "s": "left",
    "e": "right"
);
.small {
    font-size: var(--size-sm);
}
.muted {
    color: var(--grey);
}

article.blog.single{
    .blog-featured-image {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 3/1;
        margin-bottom: 1rem;
    }
    iframe {
        width: 100%;
        aspect-ratio: 16/9;
    }
} */

:root {
  --red: #f56565;
  --green: #48bb78;
  --blue: #4299e1;
  --yellow: #fbd38d;

  --gray0: #f7f7f5;
  --gray1: #d9d9cf;
  --gray2: #aead9b;
  --gray3: #87836f;
  --gray4: #4d4a41;

  --blue0: #f4f7f7;
  --blue1: #d1e0e0;
  --blue2: #739c9d;
  --blue3: #4b6c6f;
  --blue4: #344245;
}

// tempoary restrict to 1024px
.wrapper {
  max-width: 1024px !important;
  margin-inline: auto;
}

.grid__posts {
  padding: 1rem;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

//   microblog

// /*
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// /* CSS */
// :root {
//     font-family: Inter, sans-serif;
//     font-feature-settings:
//     "liga" 1,
//     "calt" 1, /* Contextual Alternates */
//     "dlig" 1, /* Discretionary Ligatures */
//     "ss07" 1, /* fSquare punctuation */
//     "ss08" 1, /* Square quotes */
//     "zero" 1, /* Slashed zero */
//     "tnum" 1, /* Tabular numbers */
//       "cv03" 1, /* Open six */
//       "cv04" 1, /* Open nine */
//       "cv01" 1, /* Alternate one */
//       "cv09", /* Flat-top three */
//       "cv02" 1; /* Open 4 */
//   }
//   @supports (font-variation-settings: normal) {
//     /* Use variable font if supported */
//     :root {
//       font-family: InterVariable, sans-serif;
//     }
//   }

//   :root {
//     --astro-code-color-text: #000000;
//     --astro-code-color-background: #f5f5f5;
//     --astro-code-token-constant: #00000080;
//     --astro-code-token-string: #00000050;
//     --astro-code-token-comment: #00000060;
//     --astro-code-token-keyword: black;
//     --astro-code-token-parameter: #ffffff;
//     --astro-code-token-function: black;
//     --astro-code-token-string-expression: #fe351b;
//     --astro-code-token-punctuation: #ffffff;
//     --astro-code-token-link: #ffffff;

//   }

//   .prose-styles {
//     @apply text-sm prose text-neutral-600 dark:text-neutral-600 prose-a:font-normal prose-a:text-blue-400 hover:prose-a:text-black prose-h1:text-black prose-img:border-2  prose-img:bg-neutral-50 dark:prose-img:bg-neutral-800 prose-img:border-transparent dark:prose-img:invert prose-h2:text-black prose-h2:font-semibold prose-p:text-sm prose-pre:font-mono max-w-none prose-pre:rounded-none prose-headings:font-display;
//   }
// */

```

# src/global/Utils.js

```js
/**
 * convert string into slug
 * @param {*} text
 * @returns
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-/, "")
    .replace(/-$/, "");
}

/**
 * converting my favorite date format (yymmdd) into js-date
 * @param {*} num
 * @returns
 */
export function numberToDate(num) {
  const str = num.toString();
  const year = parseInt(str.substring(0, 2)) + 2000;
  const month = parseInt(str.substring(2, 4)) - 1;
  const day = parseInt(str.substring(4, 6));
  return new Date(year, month, day);
}

/**
 * output js-date for website, back to number_date (yymmdd)
 * @param {*} date
 * @returns
 */
export function dateToNumber(date) {
  const d = new Date(date);
  const year = d.getFullYear().toString().slice(-2);
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

/**
 * format .md to blogposts
 * @param {*} posts
 * @param {*} options
 * @returns
 */
export function formatBlogPosts(
  posts,
  {
    filter_draft = true,
    filter_future_post = true,
    sort_by_date = true,
    limit = undefined,
  } = {}
) {
  const filtered_posts = posts.reduce((acc, post) => {
    const { pubDate, draft } = post.data;
    if (filter_draft && draft) return acc;
    if (filter_future_post && new Date(pubDate) > new Date()) return acc;
    acc.push(post);
    return acc;
  }, []);

  if (sort_by_date) {
    filtered_posts.sort(
      (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
    );
  } else {
    filtered_posts.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") return filtered_posts.slice(0, limit);

  return filtered_posts;
}

/**
 * zero padding for numbers
 * @param {*} number
 * @param {*} padding
 * @returns
 */
export function addZeroPadding(number, padding) {
  return number.toString().padStart(padding, "0");
  // console.log(addZeroPadding(5, 3)); // "005"
  // console.log(addZeroPadding(123, 5)); // "00123"
  // console.log(addZeroPadding(1234, 2)); // "1234"
}

/**
 * copy to clipboard
 */
export async function copyToClipboard(string) {
  try {
    await navigator.clipboard.writeText(string);
    // console.log("copied to clipboard:", string);
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
  }
}

```

# public/sketch/231204-circles_goes_wiggling.mp4

This is a binary file of the type: Binary

# src/content/config.ts

```ts
// https://zod.dev/ - TypeScript-first schema validation with static type inference

import { z, defineCollection } from "astro:content";

import { numberToDate } from "../global/Utils";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    pubDate: z.number().transform((num) => numberToDate(num)),
    draft: z.boolean().default(false),

    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};

```

# public/rss/styles.xsl

```xsl
<?xml version="1.0" encoding="utf-8"?>
<!--

# Pretty Feed

Styles an RSS/Atom feed, making it friendly for humans viewers, and adds a link
to aboutfeeds.com for new user onboarding. See it in action:

   https://interconnected.org/home/feed


## How to use

1. Download this XML stylesheet from the following URL and host it on your own
   domain (this is a limitation of XSL in browsers):

   https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl

2. Include the XSL at the top of the RSS/Atom feed, like:

\`\`\`
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="/PATH-TO-YOUR-STYLES/pretty-feed-v3.xsl" type="text/xsl"?>
\`\`\`

3. Serve the feed with the following HTTP headers:

\`\`\`
Content-Type: application/xml; charset=utf-8  # not application/rss+xml
x-content-type-options: nosniff
\`\`\`

(These headers are required to style feeds for users with Safari on iOS/Mac.)



## Limitations

- Styling the feed *prevents* the browser from automatically opening a
  newsreader application. This is a trade off, but it's a benefit to new users
  who won't have a newsreader installed, and they are saved from seeing or
  downloaded obscure XML content. For existing newsreader users, they will know
  to copy-and-paste the feed URL, and they get the benefit of an in-browser feed
  preview.
- Feed styling, for all browsers, is only available to site owners who control
  their own platform. The need to add both XML and HTTP headers makes this a
  limited solution.


## Credits

pretty-feed is based on work by lepture.com:

   https://lepture.com/en/2019/rss-style-with-xsl

This current version is maintained by aboutfeeds.com:

   https://github.com/genmon/aboutfeeds


## Feedback

This file is in BETA. Please test and contribute to the discussion:

     https://github.com/genmon/aboutfeeds/issues/8

-->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            <head>
                <title><xsl:value-of select="/rss/channel/title" /> Web Feed</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <style type="text/css">/*! normalize.css v4.1.1 | MIT License |
                    github.com/necolas/normalize.css
                    */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none!important}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline
                    dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em
                    0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em
                    40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html
                    [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px
                    dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em
                    .625em
                    .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}*{box-sizing:border-box}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe
                    UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI
                    Symbol";font-size:14px;line-height:1.5;color:#24292e;background-color:#fff}a{color:#0366d6;text-decoration:none}a:hover{text-decoration:underline}b,strong{font-weight:600}.rule,hr{height:0;margin:15px
                    0;overflow:hidden;background:0 0;border:0;border-bottom:1px solid
                    #dfe2e5}.rule::before,hr::before{display:table;content:""}.rule::after,hr::after{display:table;clear:both;content:""}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}button{cursor:pointer;border-radius:0}[hidden][hidden]{display:none!important}details
                    summary{cursor:pointer}details:not([open])>*
                    :not(summary){display:none!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}h1{font-size:32px;font-weight:600}h2{font-size:24px;font-weight:600}h3{font-size:20px;font-weight:600}h4{font-size:16px;font-weight:600}h5{font-size:14px;font-weight:600}h6{font-size:12px;font-weight:600}p{margin-top:0;margin-bottom:10px}small{font-size:90%}blockquote{margin:0}ol,ul{padding-left:0;margin-top:0;margin-bottom:0}ol
                    ol,ul ol{list-style-type:lower-roman}ol ol ol,ol ul ol,ul ol ol,ul ul
                    ol{list-style-type:lower-alpha}dd{margin-left:0}code,tt{font-family:SFMono-Regular,Consolas,"Liberation
                    Mono",Menlo,Courier,monospace;font-size:12px}pre{margin-top:0;margin-bottom:0;font-family:SFMono-Regular,Consolas,"Liberation
                    Mono",Menlo,Courier,monospace;font-size:12px}.octicon{vertical-align:text-bottom}.anim-fade-in{animation-name:fade-in;animation-duration:1s;animation-timing-function:ease-in-out}.anim-fade-in.fast{animation-duration:.3s}@keyframes
                    fade-in{0%{opacity:0}100%{opacity:1}}.anim-fade-out{animation-name:fade-out;animation-duration:1s;animation-timing-function:ease-out}.anim-fade-out.fast{animation-duration:.3s}@keyframes
                    fade-out{0%{opacity:1}100%{opacity:0}}.anim-fade-up{opacity:0;animation-name:fade-up;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:ease-out;animation-delay:1s}@keyframes
                    fade-up{0%{opacity:.8;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}.anim-fade-down{animation-name:fade-down;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:ease-in}@keyframes
                    fade-down{0%{opacity:1;transform:translateY(0)}100%{opacity:.5;transform:translateY(100%)}}.anim-grow-x{width:0%;animation-name:grow-x;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:ease;animation-delay:.5s}@keyframes
                    grow-x{to{width:100%}}.anim-shrink-x{animation-name:shrink-x;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:ease-in-out;animation-delay:.5s}@keyframes
                    shrink-x{to{width:0%}}.anim-scale-in{animation-name:scale-in;animation-duration:.15s;animation-timing-function:cubic-bezier(.2,0,.13,1.5)}@keyframes
                    scale-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.anim-pulse{animation-name:pulse;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite}@keyframes
                    pulse{0%{opacity:.3}10%{opacity:1}100%{opacity:.3}}.anim-pulse-in{animation-name:pulse-in;animation-duration:.5s}@keyframes
                    pulse-in{0%{transform:scale3d(1,1,1)}50%{transform:scale3d(1.1,1.1,1.1)}100%{transform:scale3d(1,1,1)}}.hover-grow{transition:transform
                    .3s;backface-visibility:hidden}.hover-grow:hover{transform:scale(1.025)}.border{border:1px
                    #e1e4e8 solid!important}.border-y{border-top:1px #e1e4e8
                    solid!important;border-bottom:1px #e1e4e8
                    solid!important}.border-0{border:0!important}.border-dashed{border-style:dashed!important}.border-blue{border-color:#0366d6!important}.border-blue-light{border-color:#c8e1ff!important}.border-green{border-color:#34d058!important}.border-green-light{border-color:#a2cbac!important}.border-red{border-color:#d73a49!important}.border-red-light{border-color:#cea0a5!important}.border-purple{border-color:#6f42c1!important}.border-yellow{border-color:#d9d0a5!important}.border-gray-light{border-color:#eaecef!important}.border-gray-dark{border-color:#d1d5da!important}.border-black-fade{border-color:rgba(27,31,35,.15)!important}.border-top{border-top:1px
                    #e1e4e8 solid!important}.border-right{border-right:1px #e1e4e8
                    solid!important}.border-bottom{border-bottom:1px #e1e4e8
                    solid!important}.border-left{border-left:1px #e1e4e8
                    solid!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:3px!important}.rounded-2{border-radius:6px!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:3px!important;border-top-right-radius:3px!important}.rounded-top-2{border-top-left-radius:6px!important;border-top-right-radius:6px!important}.rounded-right-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-right-1{border-top-right-radius:3px!important;border-bottom-right-radius:3px!important}.rounded-right-2{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}.rounded-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-bottom-1{border-bottom-right-radius:3px!important;border-bottom-left-radius:3px!important}.rounded-bottom-2{border-bottom-right-radius:6px!important;border-bottom-left-radius:6px!important}.rounded-left-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-left-1{border-bottom-left-radius:3px!important;border-top-left-radius:3px!important}.rounded-left-2{border-bottom-left-radius:6px!important;border-top-left-radius:6px!important}@media
                    (min-width:544px){.border-sm-top{border-top:1px #e1e4e8
                    solid!important}.border-sm-right{border-right:1px #e1e4e8
                    solid!important}.border-sm-bottom{border-bottom:1px #e1e4e8
                    solid!important}.border-sm-left{border-left:1px #e1e4e8
                    solid!important}.border-sm-top-0{border-top:0!important}.border-sm-right-0{border-right:0!important}.border-sm-bottom-0{border-bottom:0!important}.border-sm-left-0{border-left:0!important}.rounded-sm-0{border-radius:0!important}.rounded-sm-1{border-radius:3px!important}.rounded-sm-2{border-radius:6px!important}.rounded-sm-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-sm-top-1{border-top-left-radius:3px!important;border-top-right-radius:3px!important}.rounded-sm-top-2{border-top-left-radius:6px!important;border-top-right-radius:6px!important}.rounded-sm-right-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-sm-right-1{border-top-right-radius:3px!important;border-bottom-right-radius:3px!important}.rounded-sm-right-2{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}.rounded-sm-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-sm-bottom-1{border-bottom-right-radius:3px!important;border-bottom-left-radius:3px!important}.rounded-sm-bottom-2{border-bottom-right-radius:6px!important;border-bottom-left-radius:6px!important}.rounded-sm-left-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-sm-left-1{border-bottom-left-radius:3px!important;border-top-left-radius:3px!important}.rounded-sm-left-2{border-bottom-left-radius:6px!important;border-top-left-radius:6px!important}}@media
                    (min-width:768px){.border-md-top{border-top:1px #e1e4e8
                    solid!important}.border-md-right{border-right:1px #e1e4e8
                    solid!important}.border-md-bottom{border-bottom:1px #e1e4e8
                    solid!important}.border-md-left{border-left:1px #e1e4e8
                    solid!important}.border-md-top-0{border-top:0!important}.border-md-right-0{border-right:0!important}.border-md-bottom-0{border-bottom:0!important}.border-md-left-0{border-left:0!important}.rounded-md-0{border-radius:0!important}.rounded-md-1{border-radius:3px!important}.rounded-md-2{border-radius:6px!important}.rounded-md-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-md-top-1{border-top-left-radius:3px!important;border-top-right-radius:3px!important}.rounded-md-top-2{border-top-left-radius:6px!important;border-top-right-radius:6px!important}.rounded-md-right-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-md-right-1{border-top-right-radius:3px!important;border-bottom-right-radius:3px!important}.rounded-md-right-2{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}.rounded-md-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-md-bottom-1{border-bottom-right-radius:3px!important;border-bottom-left-radius:3px!important}.rounded-md-bottom-2{border-bottom-right-radius:6px!important;border-bottom-left-radius:6px!important}.rounded-md-left-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-md-left-1{border-bottom-left-radius:3px!important;border-top-left-radius:3px!important}.rounded-md-left-2{border-bottom-left-radius:6px!important;border-top-left-radius:6px!important}}@media
                    (min-width:1012px){.border-lg-top{border-top:1px #e1e4e8
                    solid!important}.border-lg-right{border-right:1px #e1e4e8
                    solid!important}.border-lg-bottom{border-bottom:1px #e1e4e8
                    solid!important}.border-lg-left{border-left:1px #e1e4e8
                    solid!important}.border-lg-top-0{border-top:0!important}.border-lg-right-0{border-right:0!important}.border-lg-bottom-0{border-bottom:0!important}.border-lg-left-0{border-left:0!important}.rounded-lg-0{border-radius:0!important}.rounded-lg-1{border-radius:3px!important}.rounded-lg-2{border-radius:6px!important}.rounded-lg-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-lg-top-1{border-top-left-radius:3px!important;border-top-right-radius:3px!important}.rounded-lg-top-2{border-top-left-radius:6px!important;border-top-right-radius:6px!important}.rounded-lg-right-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-lg-right-1{border-top-right-radius:3px!important;border-bottom-right-radius:3px!important}.rounded-lg-right-2{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}.rounded-lg-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-lg-bottom-1{border-bottom-right-radius:3px!important;border-bottom-left-radius:3px!important}.rounded-lg-bottom-2{border-bottom-right-radius:6px!important;border-bottom-left-radius:6px!important}.rounded-lg-left-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-lg-left-1{border-bottom-left-radius:3px!important;border-top-left-radius:3px!important}.rounded-lg-left-2{border-bottom-left-radius:6px!important;border-top-left-radius:6px!important}}@media
                    (min-width:1280px){.border-xl-top{border-top:1px #e1e4e8
                    solid!important}.border-xl-right{border-right:1px #e1e4e8
                    solid!important}.border-xl-bottom{border-bottom:1px #e1e4e8
                    solid!important}.border-xl-left{border-left:1px #e1e4e8
                    solid!important}.border-xl-top-0{border-top:0!important}.border-xl-right-0{border-right:0!important}.border-xl-bottom-0{border-bottom:0!important}.border-xl-left-0{border-left:0!important}.rounded-xl-0{border-radius:0!important}.rounded-xl-1{border-radius:3px!important}.rounded-xl-2{border-radius:6px!important}.rounded-xl-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-xl-top-1{border-top-left-radius:3px!important;border-top-right-radius:3px!important}.rounded-xl-top-2{border-top-left-radius:6px!important;border-top-right-radius:6px!important}.rounded-xl-right-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-xl-right-1{border-top-right-radius:3px!important;border-bottom-right-radius:3px!important}.rounded-xl-right-2{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}.rounded-xl-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-xl-bottom-1{border-bottom-right-radius:3px!important;border-bottom-left-radius:3px!important}.rounded-xl-bottom-2{border-bottom-right-radius:6px!important;border-bottom-left-radius:6px!important}.rounded-xl-left-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-xl-left-1{border-bottom-left-radius:3px!important;border-top-left-radius:3px!important}.rounded-xl-left-2{border-bottom-left-radius:6px!important;border-top-left-radius:6px!important}}.circle{border-radius:50%!important}.box-shadow{box-shadow:0
                    1px 1px rgba(27,31,35,.1)!important}.box-shadow-medium{box-shadow:0 1px 5px
                    rgba(27,31,35,.15)!important}.box-shadow-large{box-shadow:0 1px 15px
                    rgba(27,31,35,.15)!important}.box-shadow-extra-large{box-shadow:0 10px 50px
                    rgba(27,31,35,.07)!important}.box-shadow-none{box-shadow:none!important}.bg-white{background-color:#fff!important}.bg-blue{background-color:#0366d6!important}.bg-blue-light{background-color:#f1f8ff!important}.bg-gray-dark{background-color:#24292e!important}.bg-gray{background-color:#f6f8fa!important}.bg-gray-light{background-color:#fafbfc!important}.bg-green{background-color:#28a745!important}.bg-green-light{background-color:#dcffe4!important}.bg-red{background-color:#d73a49!important}.bg-red-light{background-color:#ffdce0!important}.bg-yellow{background-color:#ffd33d!important}.bg-yellow-light{background-color:#fff5b1!important}.bg-purple{background-color:#6f42c1!important}.bg-purple-light{background-color:#f5f0ff!important}.bg-shade-gradient{background-image:linear-gradient(180deg,rgba(27,31,35,.065),rgba(27,31,35,0))!important;background-repeat:no-repeat!important;background-size:100%
                    200px!important}.text-blue{color:#0366d6!important}.text-red{color:#cb2431!important}.text-gray-light{color:#6a737d!important}.text-gray{color:#586069!important}.text-gray-dark{color:#24292e!important}.text-green{color:#28a745!important}.text-orange{color:#a04100!important}.text-orange-light{color:#e36209!important}.text-purple{color:#6f42c1!important}.text-white{color:#fff!important}.text-inherit{color:inherit!important}.text-pending{color:#b08800!important}.bg-pending{color:#dbab09!important}.link-gray{color:#586069!important}.link-gray:hover{color:#0366d6!important}.link-gray-dark{color:#24292e!important}.link-gray-dark:hover{color:#0366d6!important}.link-hover-blue:hover{color:#0366d6!important}.muted-link{color:#586069!important}.muted-link:hover{color:#0366d6!important;text-decoration:none}.details-overlay[open]>summary::before{position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;display:block;cursor:default;content:"
                    ";background:0
                    0}.details-overlay-dark[open]>summary::before{z-index:99;background:rgba(27,31,35,.5)}.flex-row{flex-direction:row!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-justify-start{justify-content:flex-start!important}.flex-justify-end{justify-content:flex-end!important}.flex-justify-center{justify-content:center!important}.flex-justify-between{justify-content:space-between!important}.flex-justify-around{justify-content:space-around!important}.flex-items-start{align-items:flex-start!important}.flex-items-end{align-items:flex-end!important}.flex-items-center{align-items:center!important}.flex-items-baseline{align-items:baseline!important}.flex-items-stretch{align-items:stretch!important}.flex-content-start{align-content:flex-start!important}.flex-content-end{align-content:flex-end!important}.flex-content-center{align-content:center!important}.flex-content-between{align-content:space-between!important}.flex-content-around{align-content:space-around!important}.flex-content-stretch{align-content:stretch!important}.flex-auto{flex:1
                    1
                    auto!important}.flex-shrink-0{flex-shrink:0!important}.flex-self-auto{align-self:auto!important}.flex-self-start{align-self:flex-start!important}.flex-self-end{align-self:flex-end!important}.flex-self-center{align-self:center!important}.flex-self-baseline{align-self:baseline!important}.flex-self-stretch{align-self:stretch!important}.flex-item-equal{flex-grow:1;flex-basis:0}@media
                    (min-width:544px){.flex-sm-row{flex-direction:row!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column{flex-direction:column!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-justify-start{justify-content:flex-start!important}.flex-sm-justify-end{justify-content:flex-end!important}.flex-sm-justify-center{justify-content:center!important}.flex-sm-justify-between{justify-content:space-between!important}.flex-sm-justify-around{justify-content:space-around!important}.flex-sm-items-start{align-items:flex-start!important}.flex-sm-items-end{align-items:flex-end!important}.flex-sm-items-center{align-items:center!important}.flex-sm-items-baseline{align-items:baseline!important}.flex-sm-items-stretch{align-items:stretch!important}.flex-sm-content-start{align-content:flex-start!important}.flex-sm-content-end{align-content:flex-end!important}.flex-sm-content-center{align-content:center!important}.flex-sm-content-between{align-content:space-between!important}.flex-sm-content-around{align-content:space-around!important}.flex-sm-content-stretch{align-content:stretch!important}.flex-sm-auto{flex:1
                    1
                    auto!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-self-auto{align-self:auto!important}.flex-sm-self-start{align-self:flex-start!important}.flex-sm-self-end{align-self:flex-end!important}.flex-sm-self-center{align-self:center!important}.flex-sm-self-baseline{align-self:baseline!important}.flex-sm-self-stretch{align-self:stretch!important}.flex-sm-item-equal{flex-grow:1;flex-basis:0}}@media
                    (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column{flex-direction:column!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-justify-start{justify-content:flex-start!important}.flex-md-justify-end{justify-content:flex-end!important}.flex-md-justify-center{justify-content:center!important}.flex-md-justify-between{justify-content:space-between!important}.flex-md-justify-around{justify-content:space-around!important}.flex-md-items-start{align-items:flex-start!important}.flex-md-items-end{align-items:flex-end!important}.flex-md-items-center{align-items:center!important}.flex-md-items-baseline{align-items:baseline!important}.flex-md-items-stretch{align-items:stretch!important}.flex-md-content-start{align-content:flex-start!important}.flex-md-content-end{align-content:flex-end!important}.flex-md-content-center{align-content:center!important}.flex-md-content-between{align-content:space-between!important}.flex-md-content-around{align-content:space-around!important}.flex-md-content-stretch{align-content:stretch!important}.flex-md-auto{flex:1
                    1
                    auto!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-self-auto{align-self:auto!important}.flex-md-self-start{align-self:flex-start!important}.flex-md-self-end{align-self:flex-end!important}.flex-md-self-center{align-self:center!important}.flex-md-self-baseline{align-self:baseline!important}.flex-md-self-stretch{align-self:stretch!important}.flex-md-item-equal{flex-grow:1;flex-basis:0}}@media
                    (min-width:1012px){.flex-lg-row{flex-direction:row!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column{flex-direction:column!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-justify-start{justify-content:flex-start!important}.flex-lg-justify-end{justify-content:flex-end!important}.flex-lg-justify-center{justify-content:center!important}.flex-lg-justify-between{justify-content:space-between!important}.flex-lg-justify-around{justify-content:space-around!important}.flex-lg-items-start{align-items:flex-start!important}.flex-lg-items-end{align-items:flex-end!important}.flex-lg-items-center{align-items:center!important}.flex-lg-items-baseline{align-items:baseline!important}.flex-lg-items-stretch{align-items:stretch!important}.flex-lg-content-start{align-content:flex-start!important}.flex-lg-content-end{align-content:flex-end!important}.flex-lg-content-center{align-content:center!important}.flex-lg-content-between{align-content:space-between!important}.flex-lg-content-around{align-content:space-around!important}.flex-lg-content-stretch{align-content:stretch!important}.flex-lg-auto{flex:1
                    1
                    auto!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-self-auto{align-self:auto!important}.flex-lg-self-start{align-self:flex-start!important}.flex-lg-self-end{align-self:flex-end!important}.flex-lg-self-center{align-self:center!important}.flex-lg-self-baseline{align-self:baseline!important}.flex-lg-self-stretch{align-self:stretch!important}.flex-lg-item-equal{flex-grow:1;flex-basis:0}}@media
                    (min-width:1280px){.flex-xl-row{flex-direction:row!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column{flex-direction:column!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-justify-start{justify-content:flex-start!important}.flex-xl-justify-end{justify-content:flex-end!important}.flex-xl-justify-center{justify-content:center!important}.flex-xl-justify-between{justify-content:space-between!important}.flex-xl-justify-around{justify-content:space-around!important}.flex-xl-items-start{align-items:flex-start!important}.flex-xl-items-end{align-items:flex-end!important}.flex-xl-items-center{align-items:center!important}.flex-xl-items-baseline{align-items:baseline!important}.flex-xl-items-stretch{align-items:stretch!important}.flex-xl-content-start{align-content:flex-start!important}.flex-xl-content-end{align-content:flex-end!important}.flex-xl-content-center{align-content:center!important}.flex-xl-content-between{align-content:space-between!important}.flex-xl-content-around{align-content:space-around!important}.flex-xl-content-stretch{align-content:stretch!important}.flex-xl-auto{flex:1
                    1
                    auto!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-self-auto{align-self:auto!important}.flex-xl-self-start{align-self:flex-start!important}.flex-xl-self-end{align-self:flex-end!important}.flex-xl-self-center{align-self:center!important}.flex-xl-self-baseline{align-self:baseline!important}.flex-xl-self-stretch{align-self:stretch!important}.flex-xl-item-equal{flex-grow:1;flex-basis:0}}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.top-0{top:0!important}.right-0{right:0!important}.bottom-0{bottom:0!important}.left-0{left:0!important}.v-align-middle{vertical-align:middle!important}.v-align-top{vertical-align:top!important}.v-align-bottom{vertical-align:bottom!important}.v-align-text-top{vertical-align:text-top!important}.v-align-text-bottom{vertical-align:text-bottom!important}.v-align-baseline{vertical-align:baseline!important}.overflow-hidden{overflow:hidden!important}.overflow-scroll{overflow:scroll!important}.overflow-auto{overflow:auto!important}.clearfix::before{display:table;content:""}.clearfix::after{display:table;clear:both;content:""}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media
                    (min-width:544px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media
                    (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media
                    (min-width:1012px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media
                    (min-width:1280px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.width-fit{max-width:100%!important}.width-full{width:100%!important}.height-fit{max-height:100%!important}.height-full{height:100%!important}.min-width-0{min-width:0!important}.direction-rtl{direction:rtl!important}.direction-ltr{direction:ltr!important}@media
                    (min-width:544px){.direction-sm-rtl{direction:rtl!important}.direction-sm-ltr{direction:ltr!important}}@media
                    (min-width:768px){.direction-md-rtl{direction:rtl!important}.direction-md-ltr{direction:ltr!important}}@media
                    (min-width:1012px){.direction-lg-rtl{direction:rtl!important}.direction-lg-ltr{direction:ltr!important}}@media
                    (min-width:1280px){.direction-xl-rtl{direction:rtl!important}.direction-xl-ltr{direction:ltr!important}}.m-0{margin:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:4px!important}.mt-1{margin-top:4px!important}.mr-1{margin-right:4px!important}.mb-1{margin-bottom:4px!important}.ml-1{margin-left:4px!important}.mt-n1{margin-top:-4px!important}.mr-n1{margin-right:-4px!important}.mb-n1{margin-bottom:-4px!important}.ml-n1{margin-left:-4px!important}.mx-1{margin-right:4px!important;margin-left:4px!important}.my-1{margin-top:4px!important;margin-bottom:4px!important}.m-2{margin:8px!important}.mt-2{margin-top:8px!important}.mr-2{margin-right:8px!important}.mb-2{margin-bottom:8px!important}.ml-2{margin-left:8px!important}.mt-n2{margin-top:-8px!important}.mr-n2{margin-right:-8px!important}.mb-n2{margin-bottom:-8px!important}.ml-n2{margin-left:-8px!important}.mx-2{margin-right:8px!important;margin-left:8px!important}.my-2{margin-top:8px!important;margin-bottom:8px!important}.m-3{margin:16px!important}.mt-3{margin-top:16px!important}.mr-3{margin-right:16px!important}.mb-3{margin-bottom:16px!important}.ml-3{margin-left:16px!important}.mt-n3{margin-top:-16px!important}.mr-n3{margin-right:-16px!important}.mb-n3{margin-bottom:-16px!important}.ml-n3{margin-left:-16px!important}.mx-3{margin-right:16px!important;margin-left:16px!important}.my-3{margin-top:16px!important;margin-bottom:16px!important}.m-4{margin:24px!important}.mt-4{margin-top:24px!important}.mr-4{margin-right:24px!important}.mb-4{margin-bottom:24px!important}.ml-4{margin-left:24px!important}.mt-n4{margin-top:-24px!important}.mr-n4{margin-right:-24px!important}.mb-n4{margin-bottom:-24px!important}.ml-n4{margin-left:-24px!important}.mx-4{margin-right:24px!important;margin-left:24px!important}.my-4{margin-top:24px!important;margin-bottom:24px!important}.m-5{margin:32px!important}.mt-5{margin-top:32px!important}.mr-5{margin-right:32px!important}.mb-5{margin-bottom:32px!important}.ml-5{margin-left:32px!important}.mt-n5{margin-top:-32px!important}.mr-n5{margin-right:-32px!important}.mb-n5{margin-bottom:-32px!important}.ml-n5{margin-left:-32px!important}.mx-5{margin-right:32px!important;margin-left:32px!important}.my-5{margin-top:32px!important;margin-bottom:32px!important}.m-6{margin:40px!important}.mt-6{margin-top:40px!important}.mr-6{margin-right:40px!important}.mb-6{margin-bottom:40px!important}.ml-6{margin-left:40px!important}.mt-n6{margin-top:-40px!important}.mr-n6{margin-right:-40px!important}.mb-n6{margin-bottom:-40px!important}.ml-n6{margin-left:-40px!important}.mx-6{margin-right:40px!important;margin-left:40px!important}.my-6{margin-top:40px!important;margin-bottom:40px!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}@media
                    (min-width:544px){.m-sm-0{margin:0!important}.mt-sm-0{margin-top:0!important}.mr-sm-0{margin-right:0!important}.mb-sm-0{margin-bottom:0!important}.ml-sm-0{margin-left:0!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.m-sm-1{margin:4px!important}.mt-sm-1{margin-top:4px!important}.mr-sm-1{margin-right:4px!important}.mb-sm-1{margin-bottom:4px!important}.ml-sm-1{margin-left:4px!important}.mt-sm-n1{margin-top:-4px!important}.mr-sm-n1{margin-right:-4px!important}.mb-sm-n1{margin-bottom:-4px!important}.ml-sm-n1{margin-left:-4px!important}.mx-sm-1{margin-right:4px!important;margin-left:4px!important}.my-sm-1{margin-top:4px!important;margin-bottom:4px!important}.m-sm-2{margin:8px!important}.mt-sm-2{margin-top:8px!important}.mr-sm-2{margin-right:8px!important}.mb-sm-2{margin-bottom:8px!important}.ml-sm-2{margin-left:8px!important}.mt-sm-n2{margin-top:-8px!important}.mr-sm-n2{margin-right:-8px!important}.mb-sm-n2{margin-bottom:-8px!important}.ml-sm-n2{margin-left:-8px!important}.mx-sm-2{margin-right:8px!important;margin-left:8px!important}.my-sm-2{margin-top:8px!important;margin-bottom:8px!important}.m-sm-3{margin:16px!important}.mt-sm-3{margin-top:16px!important}.mr-sm-3{margin-right:16px!important}.mb-sm-3{margin-bottom:16px!important}.ml-sm-3{margin-left:16px!important}.mt-sm-n3{margin-top:-16px!important}.mr-sm-n3{margin-right:-16px!important}.mb-sm-n3{margin-bottom:-16px!important}.ml-sm-n3{margin-left:-16px!important}.mx-sm-3{margin-right:16px!important;margin-left:16px!important}.my-sm-3{margin-top:16px!important;margin-bottom:16px!important}.m-sm-4{margin:24px!important}.mt-sm-4{margin-top:24px!important}.mr-sm-4{margin-right:24px!important}.mb-sm-4{margin-bottom:24px!important}.ml-sm-4{margin-left:24px!important}.mt-sm-n4{margin-top:-24px!important}.mr-sm-n4{margin-right:-24px!important}.mb-sm-n4{margin-bottom:-24px!important}.ml-sm-n4{margin-left:-24px!important}.mx-sm-4{margin-right:24px!important;margin-left:24px!important}.my-sm-4{margin-top:24px!important;margin-bottom:24px!important}.m-sm-5{margin:32px!important}.mt-sm-5{margin-top:32px!important}.mr-sm-5{margin-right:32px!important}.mb-sm-5{margin-bottom:32px!important}.ml-sm-5{margin-left:32px!important}.mt-sm-n5{margin-top:-32px!important}.mr-sm-n5{margin-right:-32px!important}.mb-sm-n5{margin-bottom:-32px!important}.ml-sm-n5{margin-left:-32px!important}.mx-sm-5{margin-right:32px!important;margin-left:32px!important}.my-sm-5{margin-top:32px!important;margin-bottom:32px!important}.m-sm-6{margin:40px!important}.mt-sm-6{margin-top:40px!important}.mr-sm-6{margin-right:40px!important}.mb-sm-6{margin-bottom:40px!important}.ml-sm-6{margin-left:40px!important}.mt-sm-n6{margin-top:-40px!important}.mr-sm-n6{margin-right:-40px!important}.mb-sm-n6{margin-bottom:-40px!important}.ml-sm-n6{margin-left:-40px!important}.mx-sm-6{margin-right:40px!important;margin-left:40px!important}.my-sm-6{margin-top:40px!important;margin-bottom:40px!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}}@media
                    (min-width:768px){.m-md-0{margin:0!important}.mt-md-0{margin-top:0!important}.mr-md-0{margin-right:0!important}.mb-md-0{margin-bottom:0!important}.ml-md-0{margin-left:0!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.m-md-1{margin:4px!important}.mt-md-1{margin-top:4px!important}.mr-md-1{margin-right:4px!important}.mb-md-1{margin-bottom:4px!important}.ml-md-1{margin-left:4px!important}.mt-md-n1{margin-top:-4px!important}.mr-md-n1{margin-right:-4px!important}.mb-md-n1{margin-bottom:-4px!important}.ml-md-n1{margin-left:-4px!important}.mx-md-1{margin-right:4px!important;margin-left:4px!important}.my-md-1{margin-top:4px!important;margin-bottom:4px!important}.m-md-2{margin:8px!important}.mt-md-2{margin-top:8px!important}.mr-md-2{margin-right:8px!important}.mb-md-2{margin-bottom:8px!important}.ml-md-2{margin-left:8px!important}.mt-md-n2{margin-top:-8px!important}.mr-md-n2{margin-right:-8px!important}.mb-md-n2{margin-bottom:-8px!important}.ml-md-n2{margin-left:-8px!important}.mx-md-2{margin-right:8px!important;margin-left:8px!important}.my-md-2{margin-top:8px!important;margin-bottom:8px!important}.m-md-3{margin:16px!important}.mt-md-3{margin-top:16px!important}.mr-md-3{margin-right:16px!important}.mb-md-3{margin-bottom:16px!important}.ml-md-3{margin-left:16px!important}.mt-md-n3{margin-top:-16px!important}.mr-md-n3{margin-right:-16px!important}.mb-md-n3{margin-bottom:-16px!important}.ml-md-n3{margin-left:-16px!important}.mx-md-3{margin-right:16px!important;margin-left:16px!important}.my-md-3{margin-top:16px!important;margin-bottom:16px!important}.m-md-4{margin:24px!important}.mt-md-4{margin-top:24px!important}.mr-md-4{margin-right:24px!important}.mb-md-4{margin-bottom:24px!important}.ml-md-4{margin-left:24px!important}.mt-md-n4{margin-top:-24px!important}.mr-md-n4{margin-right:-24px!important}.mb-md-n4{margin-bottom:-24px!important}.ml-md-n4{margin-left:-24px!important}.mx-md-4{margin-right:24px!important;margin-left:24px!important}.my-md-4{margin-top:24px!important;margin-bottom:24px!important}.m-md-5{margin:32px!important}.mt-md-5{margin-top:32px!important}.mr-md-5{margin-right:32px!important}.mb-md-5{margin-bottom:32px!important}.ml-md-5{margin-left:32px!important}.mt-md-n5{margin-top:-32px!important}.mr-md-n5{margin-right:-32px!important}.mb-md-n5{margin-bottom:-32px!important}.ml-md-n5{margin-left:-32px!important}.mx-md-5{margin-right:32px!important;margin-left:32px!important}.my-md-5{margin-top:32px!important;margin-bottom:32px!important}.m-md-6{margin:40px!important}.mt-md-6{margin-top:40px!important}.mr-md-6{margin-right:40px!important}.mb-md-6{margin-bottom:40px!important}.ml-md-6{margin-left:40px!important}.mt-md-n6{margin-top:-40px!important}.mr-md-n6{margin-right:-40px!important}.mb-md-n6{margin-bottom:-40px!important}.ml-md-n6{margin-left:-40px!important}.mx-md-6{margin-right:40px!important;margin-left:40px!important}.my-md-6{margin-top:40px!important;margin-bottom:40px!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}}@media
                    (min-width:1012px){.m-lg-0{margin:0!important}.mt-lg-0{margin-top:0!important}.mr-lg-0{margin-right:0!important}.mb-lg-0{margin-bottom:0!important}.ml-lg-0{margin-left:0!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.m-lg-1{margin:4px!important}.mt-lg-1{margin-top:4px!important}.mr-lg-1{margin-right:4px!important}.mb-lg-1{margin-bottom:4px!important}.ml-lg-1{margin-left:4px!important}.mt-lg-n1{margin-top:-4px!important}.mr-lg-n1{margin-right:-4px!important}.mb-lg-n1{margin-bottom:-4px!important}.ml-lg-n1{margin-left:-4px!important}.mx-lg-1{margin-right:4px!important;margin-left:4px!important}.my-lg-1{margin-top:4px!important;margin-bottom:4px!important}.m-lg-2{margin:8px!important}.mt-lg-2{margin-top:8px!important}.mr-lg-2{margin-right:8px!important}.mb-lg-2{margin-bottom:8px!important}.ml-lg-2{margin-left:8px!important}.mt-lg-n2{margin-top:-8px!important}.mr-lg-n2{margin-right:-8px!important}.mb-lg-n2{margin-bottom:-8px!important}.ml-lg-n2{margin-left:-8px!important}.mx-lg-2{margin-right:8px!important;margin-left:8px!important}.my-lg-2{margin-top:8px!important;margin-bottom:8px!important}.m-lg-3{margin:16px!important}.mt-lg-3{margin-top:16px!important}.mr-lg-3{margin-right:16px!important}.mb-lg-3{margin-bottom:16px!important}.ml-lg-3{margin-left:16px!important}.mt-lg-n3{margin-top:-16px!important}.mr-lg-n3{margin-right:-16px!important}.mb-lg-n3{margin-bottom:-16px!important}.ml-lg-n3{margin-left:-16px!important}.mx-lg-3{margin-right:16px!important;margin-left:16px!important}.my-lg-3{margin-top:16px!important;margin-bottom:16px!important}.m-lg-4{margin:24px!important}.mt-lg-4{margin-top:24px!important}.mr-lg-4{margin-right:24px!important}.mb-lg-4{margin-bottom:24px!important}.ml-lg-4{margin-left:24px!important}.mt-lg-n4{margin-top:-24px!important}.mr-lg-n4{margin-right:-24px!important}.mb-lg-n4{margin-bottom:-24px!important}.ml-lg-n4{margin-left:-24px!important}.mx-lg-4{margin-right:24px!important;margin-left:24px!important}.my-lg-4{margin-top:24px!important;margin-bottom:24px!important}.m-lg-5{margin:32px!important}.mt-lg-5{margin-top:32px!important}.mr-lg-5{margin-right:32px!important}.mb-lg-5{margin-bottom:32px!important}.ml-lg-5{margin-left:32px!important}.mt-lg-n5{margin-top:-32px!important}.mr-lg-n5{margin-right:-32px!important}.mb-lg-n5{margin-bottom:-32px!important}.ml-lg-n5{margin-left:-32px!important}.mx-lg-5{margin-right:32px!important;margin-left:32px!important}.my-lg-5{margin-top:32px!important;margin-bottom:32px!important}.m-lg-6{margin:40px!important}.mt-lg-6{margin-top:40px!important}.mr-lg-6{margin-right:40px!important}.mb-lg-6{margin-bottom:40px!important}.ml-lg-6{margin-left:40px!important}.mt-lg-n6{margin-top:-40px!important}.mr-lg-n6{margin-right:-40px!important}.mb-lg-n6{margin-bottom:-40px!important}.ml-lg-n6{margin-left:-40px!important}.mx-lg-6{margin-right:40px!important;margin-left:40px!important}.my-lg-6{margin-top:40px!important;margin-bottom:40px!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}}@media
                    (min-width:1280px){.m-xl-0{margin:0!important}.mt-xl-0{margin-top:0!important}.mr-xl-0{margin-right:0!important}.mb-xl-0{margin-bottom:0!important}.ml-xl-0{margin-left:0!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.m-xl-1{margin:4px!important}.mt-xl-1{margin-top:4px!important}.mr-xl-1{margin-right:4px!important}.mb-xl-1{margin-bottom:4px!important}.ml-xl-1{margin-left:4px!important}.mt-xl-n1{margin-top:-4px!important}.mr-xl-n1{margin-right:-4px!important}.mb-xl-n1{margin-bottom:-4px!important}.ml-xl-n1{margin-left:-4px!important}.mx-xl-1{margin-right:4px!important;margin-left:4px!important}.my-xl-1{margin-top:4px!important;margin-bottom:4px!important}.m-xl-2{margin:8px!important}.mt-xl-2{margin-top:8px!important}.mr-xl-2{margin-right:8px!important}.mb-xl-2{margin-bottom:8px!important}.ml-xl-2{margin-left:8px!important}.mt-xl-n2{margin-top:-8px!important}.mr-xl-n2{margin-right:-8px!important}.mb-xl-n2{margin-bottom:-8px!important}.ml-xl-n2{margin-left:-8px!important}.mx-xl-2{margin-right:8px!important;margin-left:8px!important}.my-xl-2{margin-top:8px!important;margin-bottom:8px!important}.m-xl-3{margin:16px!important}.mt-xl-3{margin-top:16px!important}.mr-xl-3{margin-right:16px!important}.mb-xl-3{margin-bottom:16px!important}.ml-xl-3{margin-left:16px!important}.mt-xl-n3{margin-top:-16px!important}.mr-xl-n3{margin-right:-16px!important}.mb-xl-n3{margin-bottom:-16px!important}.ml-xl-n3{margin-left:-16px!important}.mx-xl-3{margin-right:16px!important;margin-left:16px!important}.my-xl-3{margin-top:16px!important;margin-bottom:16px!important}.m-xl-4{margin:24px!important}.mt-xl-4{margin-top:24px!important}.mr-xl-4{margin-right:24px!important}.mb-xl-4{margin-bottom:24px!important}.ml-xl-4{margin-left:24px!important}.mt-xl-n4{margin-top:-24px!important}.mr-xl-n4{margin-right:-24px!important}.mb-xl-n4{margin-bottom:-24px!important}.ml-xl-n4{margin-left:-24px!important}.mx-xl-4{margin-right:24px!important;margin-left:24px!important}.my-xl-4{margin-top:24px!important;margin-bottom:24px!important}.m-xl-5{margin:32px!important}.mt-xl-5{margin-top:32px!important}.mr-xl-5{margin-right:32px!important}.mb-xl-5{margin-bottom:32px!important}.ml-xl-5{margin-left:32px!important}.mt-xl-n5{margin-top:-32px!important}.mr-xl-n5{margin-right:-32px!important}.mb-xl-n5{margin-bottom:-32px!important}.ml-xl-n5{margin-left:-32px!important}.mx-xl-5{margin-right:32px!important;margin-left:32px!important}.my-xl-5{margin-top:32px!important;margin-bottom:32px!important}.m-xl-6{margin:40px!important}.mt-xl-6{margin-top:40px!important}.mr-xl-6{margin-right:40px!important}.mb-xl-6{margin-bottom:40px!important}.ml-xl-6{margin-left:40px!important}.mt-xl-n6{margin-top:-40px!important}.mr-xl-n6{margin-right:-40px!important}.mb-xl-n6{margin-bottom:-40px!important}.ml-xl-n6{margin-left:-40px!important}.mx-xl-6{margin-right:40px!important;margin-left:40px!important}.my-xl-6{margin-top:40px!important;margin-bottom:40px!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}}.p-0{padding:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:4px!important}.pt-1{padding-top:4px!important}.pr-1{padding-right:4px!important}.pb-1{padding-bottom:4px!important}.pl-1{padding-left:4px!important}.px-1{padding-right:4px!important;padding-left:4px!important}.py-1{padding-top:4px!important;padding-bottom:4px!important}.p-2{padding:8px!important}.pt-2{padding-top:8px!important}.pr-2{padding-right:8px!important}.pb-2{padding-bottom:8px!important}.pl-2{padding-left:8px!important}.px-2{padding-right:8px!important;padding-left:8px!important}.py-2{padding-top:8px!important;padding-bottom:8px!important}.p-3{padding:16px!important}.pt-3{padding-top:16px!important}.pr-3{padding-right:16px!important}.pb-3{padding-bottom:16px!important}.pl-3{padding-left:16px!important}.px-3{padding-right:16px!important;padding-left:16px!important}.py-3{padding-top:16px!important;padding-bottom:16px!important}.p-4{padding:24px!important}.pt-4{padding-top:24px!important}.pr-4{padding-right:24px!important}.pb-4{padding-bottom:24px!important}.pl-4{padding-left:24px!important}.px-4{padding-right:24px!important;padding-left:24px!important}.py-4{padding-top:24px!important;padding-bottom:24px!important}.p-5{padding:32px!important}.pt-5{padding-top:32px!important}.pr-5{padding-right:32px!important}.pb-5{padding-bottom:32px!important}.pl-5{padding-left:32px!important}.px-5{padding-right:32px!important;padding-left:32px!important}.py-5{padding-top:32px!important;padding-bottom:32px!important}.p-6{padding:40px!important}.pt-6{padding-top:40px!important}.pr-6{padding-right:40px!important}.pb-6{padding-bottom:40px!important}.pl-6{padding-left:40px!important}.px-6{padding-right:40px!important;padding-left:40px!important}.py-6{padding-top:40px!important;padding-bottom:40px!important}@media
                    (min-width:544px){.p-sm-0{padding:0!important}.pt-sm-0{padding-top:0!important}.pr-sm-0{padding-right:0!important}.pb-sm-0{padding-bottom:0!important}.pl-sm-0{padding-left:0!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.p-sm-1{padding:4px!important}.pt-sm-1{padding-top:4px!important}.pr-sm-1{padding-right:4px!important}.pb-sm-1{padding-bottom:4px!important}.pl-sm-1{padding-left:4px!important}.px-sm-1{padding-right:4px!important;padding-left:4px!important}.py-sm-1{padding-top:4px!important;padding-bottom:4px!important}.p-sm-2{padding:8px!important}.pt-sm-2{padding-top:8px!important}.pr-sm-2{padding-right:8px!important}.pb-sm-2{padding-bottom:8px!important}.pl-sm-2{padding-left:8px!important}.px-sm-2{padding-right:8px!important;padding-left:8px!important}.py-sm-2{padding-top:8px!important;padding-bottom:8px!important}.p-sm-3{padding:16px!important}.pt-sm-3{padding-top:16px!important}.pr-sm-3{padding-right:16px!important}.pb-sm-3{padding-bottom:16px!important}.pl-sm-3{padding-left:16px!important}.px-sm-3{padding-right:16px!important;padding-left:16px!important}.py-sm-3{padding-top:16px!important;padding-bottom:16px!important}.p-sm-4{padding:24px!important}.pt-sm-4{padding-top:24px!important}.pr-sm-4{padding-right:24px!important}.pb-sm-4{padding-bottom:24px!important}.pl-sm-4{padding-left:24px!important}.px-sm-4{padding-right:24px!important;padding-left:24px!important}.py-sm-4{padding-top:24px!important;padding-bottom:24px!important}.p-sm-5{padding:32px!important}.pt-sm-5{padding-top:32px!important}.pr-sm-5{padding-right:32px!important}.pb-sm-5{padding-bottom:32px!important}.pl-sm-5{padding-left:32px!important}.px-sm-5{padding-right:32px!important;padding-left:32px!important}.py-sm-5{padding-top:32px!important;padding-bottom:32px!important}.p-sm-6{padding:40px!important}.pt-sm-6{padding-top:40px!important}.pr-sm-6{padding-right:40px!important}.pb-sm-6{padding-bottom:40px!important}.pl-sm-6{padding-left:40px!important}.px-sm-6{padding-right:40px!important;padding-left:40px!important}.py-sm-6{padding-top:40px!important;padding-bottom:40px!important}}@media
                    (min-width:768px){.p-md-0{padding:0!important}.pt-md-0{padding-top:0!important}.pr-md-0{padding-right:0!important}.pb-md-0{padding-bottom:0!important}.pl-md-0{padding-left:0!important}.px-md-0{padding-right:0!important;padding-left:0!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.p-md-1{padding:4px!important}.pt-md-1{padding-top:4px!important}.pr-md-1{padding-right:4px!important}.pb-md-1{padding-bottom:4px!important}.pl-md-1{padding-left:4px!important}.px-md-1{padding-right:4px!important;padding-left:4px!important}.py-md-1{padding-top:4px!important;padding-bottom:4px!important}.p-md-2{padding:8px!important}.pt-md-2{padding-top:8px!important}.pr-md-2{padding-right:8px!important}.pb-md-2{padding-bottom:8px!important}.pl-md-2{padding-left:8px!important}.px-md-2{padding-right:8px!important;padding-left:8px!important}.py-md-2{padding-top:8px!important;padding-bottom:8px!important}.p-md-3{padding:16px!important}.pt-md-3{padding-top:16px!important}.pr-md-3{padding-right:16px!important}.pb-md-3{padding-bottom:16px!important}.pl-md-3{padding-left:16px!important}.px-md-3{padding-right:16px!important;padding-left:16px!important}.py-md-3{padding-top:16px!important;padding-bottom:16px!important}.p-md-4{padding:24px!important}.pt-md-4{padding-top:24px!important}.pr-md-4{padding-right:24px!important}.pb-md-4{padding-bottom:24px!important}.pl-md-4{padding-left:24px!important}.px-md-4{padding-right:24px!important;padding-left:24px!important}.py-md-4{padding-top:24px!important;padding-bottom:24px!important}.p-md-5{padding:32px!important}.pt-md-5{padding-top:32px!important}.pr-md-5{padding-right:32px!important}.pb-md-5{padding-bottom:32px!important}.pl-md-5{padding-left:32px!important}.px-md-5{padding-right:32px!important;padding-left:32px!important}.py-md-5{padding-top:32px!important;padding-bottom:32px!important}.p-md-6{padding:40px!important}.pt-md-6{padding-top:40px!important}.pr-md-6{padding-right:40px!important}.pb-md-6{padding-bottom:40px!important}.pl-md-6{padding-left:40px!important}.px-md-6{padding-right:40px!important;padding-left:40px!important}.py-md-6{padding-top:40px!important;padding-bottom:40px!important}}@media
                    (min-width:1012px){.p-lg-0{padding:0!important}.pt-lg-0{padding-top:0!important}.pr-lg-0{padding-right:0!important}.pb-lg-0{padding-bottom:0!important}.pl-lg-0{padding-left:0!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.p-lg-1{padding:4px!important}.pt-lg-1{padding-top:4px!important}.pr-lg-1{padding-right:4px!important}.pb-lg-1{padding-bottom:4px!important}.pl-lg-1{padding-left:4px!important}.px-lg-1{padding-right:4px!important;padding-left:4px!important}.py-lg-1{padding-top:4px!important;padding-bottom:4px!important}.p-lg-2{padding:8px!important}.pt-lg-2{padding-top:8px!important}.pr-lg-2{padding-right:8px!important}.pb-lg-2{padding-bottom:8px!important}.pl-lg-2{padding-left:8px!important}.px-lg-2{padding-right:8px!important;padding-left:8px!important}.py-lg-2{padding-top:8px!important;padding-bottom:8px!important}.p-lg-3{padding:16px!important}.pt-lg-3{padding-top:16px!important}.pr-lg-3{padding-right:16px!important}.pb-lg-3{padding-bottom:16px!important}.pl-lg-3{padding-left:16px!important}.px-lg-3{padding-right:16px!important;padding-left:16px!important}.py-lg-3{padding-top:16px!important;padding-bottom:16px!important}.p-lg-4{padding:24px!important}.pt-lg-4{padding-top:24px!important}.pr-lg-4{padding-right:24px!important}.pb-lg-4{padding-bottom:24px!important}.pl-lg-4{padding-left:24px!important}.px-lg-4{padding-right:24px!important;padding-left:24px!important}.py-lg-4{padding-top:24px!important;padding-bottom:24px!important}.p-lg-5{padding:32px!important}.pt-lg-5{padding-top:32px!important}.pr-lg-5{padding-right:32px!important}.pb-lg-5{padding-bottom:32px!important}.pl-lg-5{padding-left:32px!important}.px-lg-5{padding-right:32px!important;padding-left:32px!important}.py-lg-5{padding-top:32px!important;padding-bottom:32px!important}.p-lg-6{padding:40px!important}.pt-lg-6{padding-top:40px!important}.pr-lg-6{padding-right:40px!important}.pb-lg-6{padding-bottom:40px!important}.pl-lg-6{padding-left:40px!important}.px-lg-6{padding-right:40px!important;padding-left:40px!important}.py-lg-6{padding-top:40px!important;padding-bottom:40px!important}}@media
                    (min-width:1280px){.p-xl-0{padding:0!important}.pt-xl-0{padding-top:0!important}.pr-xl-0{padding-right:0!important}.pb-xl-0{padding-bottom:0!important}.pl-xl-0{padding-left:0!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.p-xl-1{padding:4px!important}.pt-xl-1{padding-top:4px!important}.pr-xl-1{padding-right:4px!important}.pb-xl-1{padding-bottom:4px!important}.pl-xl-1{padding-left:4px!important}.px-xl-1{padding-right:4px!important;padding-left:4px!important}.py-xl-1{padding-top:4px!important;padding-bottom:4px!important}.p-xl-2{padding:8px!important}.pt-xl-2{padding-top:8px!important}.pr-xl-2{padding-right:8px!important}.pb-xl-2{padding-bottom:8px!important}.pl-xl-2{padding-left:8px!important}.px-xl-2{padding-right:8px!important;padding-left:8px!important}.py-xl-2{padding-top:8px!important;padding-bottom:8px!important}.p-xl-3{padding:16px!important}.pt-xl-3{padding-top:16px!important}.pr-xl-3{padding-right:16px!important}.pb-xl-3{padding-bottom:16px!important}.pl-xl-3{padding-left:16px!important}.px-xl-3{padding-right:16px!important;padding-left:16px!important}.py-xl-3{padding-top:16px!important;padding-bottom:16px!important}.p-xl-4{padding:24px!important}.pt-xl-4{padding-top:24px!important}.pr-xl-4{padding-right:24px!important}.pb-xl-4{padding-bottom:24px!important}.pl-xl-4{padding-left:24px!important}.px-xl-4{padding-right:24px!important;padding-left:24px!important}.py-xl-4{padding-top:24px!important;padding-bottom:24px!important}.p-xl-5{padding:32px!important}.pt-xl-5{padding-top:32px!important}.pr-xl-5{padding-right:32px!important}.pb-xl-5{padding-bottom:32px!important}.pl-xl-5{padding-left:32px!important}.px-xl-5{padding-right:32px!important;padding-left:32px!important}.py-xl-5{padding-top:32px!important;padding-bottom:32px!important}.p-xl-6{padding:40px!important}.pt-xl-6{padding-top:40px!important}.pr-xl-6{padding-right:40px!important}.pb-xl-6{padding-bottom:40px!important}.pl-xl-6{padding-left:40px!important}.px-xl-6{padding-right:40px!important;padding-left:40px!important}.py-xl-6{padding-top:40px!important;padding-bottom:40px!important}}.p-responsive{padding-right:16px!important;padding-left:16px!important}@media
                    (min-width:544px){.p-responsive{padding-right:40px!important;padding-left:40px!important}}@media
                    (min-width:1012px){.p-responsive{padding-right:16px!important;padding-left:16px!important}}.h1{font-size:26px!important}@media
                    (min-width:768px){.h1{font-size:32px!important}}.h2{font-size:22px!important}@media
                    (min-width:768px){.h2{font-size:24px!important}}.h3{font-size:18px!important}@media
                    (min-width:768px){.h3{font-size:20px!important}}.h4{font-size:16px!important}.h5{font-size:14px!important}.h6{font-size:12px!important}.h1,.h2,.h3,.h4,.h5,.h6{font-weight:600!important}.f1{font-size:26px!important}@media
                    (min-width:768px){.f1{font-size:32px!important}}.f2{font-size:22px!important}@media
                    (min-width:768px){.f2{font-size:24px!important}}.f3{font-size:18px!important}@media
                    (min-width:768px){.f3{font-size:20px!important}}.f4{font-size:16px!important}@media
                    (min-width:768px){.f4{font-size:16px!important}}.f5{font-size:14px!important}.f6{font-size:12px!important}.f00-light{font-size:40px!important;font-weight:300!important}@media
                    (min-width:768px){.f00-light{font-size:48px!important}}.f0-light{font-size:32px!important;font-weight:300!important}@media
                    (min-width:768px){.f0-light{font-size:40px!important}}.f1-light{font-size:26px!important;font-weight:300!important}@media
                    (min-width:768px){.f1-light{font-size:32px!important}}.f2-light{font-size:22px!important;font-weight:300!important}@media
                    (min-width:768px){.f2-light{font-size:24px!important}}.f3-light{font-size:18px!important;font-weight:300!important}@media
                    (min-width:768px){.f3-light{font-size:20px!important}}.text-small{font-size:12px!important}.lead{margin-bottom:30px;font-size:20px;font-weight:300;color:#586069}.lh-condensed-ultra{line-height:1!important}.lh-condensed{line-height:1.25!important}.lh-default{line-height:1.5!important}.lh-0{line-height:0!important}.text-right{text-align:right!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media
                    (min-width:544px){.text-sm-right{text-align:right!important}.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}}@media
                    (min-width:768px){.text-md-right{text-align:right!important}.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}}@media
                    (min-width:1012px){.text-lg-right{text-align:right!important}.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}}@media
                    (min-width:1280px){.text-xl-right{text-align:right!important}.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}}.text-normal{font-weight:400!important}.text-bold{font-weight:600!important}.text-italic{font-style:italic!important}.text-uppercase{text-transform:uppercase!important}.text-underline{text-decoration:underline!important}.no-underline{text-decoration:none!important}.no-wrap{white-space:nowrap!important}.ws-normal{white-space:normal!important}.wb-break-all{word-break:break-all!important}.text-emphasized{font-weight:600;color:#24292e}.list-style-none{list-style:none!important}.text-shadow-dark{text-shadow:0
                    1px 1px rgba(27,31,35,.25),0 1px 25px
                    rgba(27,31,35,.75)}.text-shadow-light{text-shadow:0 1px 0
                    rgba(255,255,255,.5)}.text-mono{font-family:SFMono-Regular,Consolas,"Liberation
                    Mono",Menlo,Courier,monospace}.user-select-none{user-select:none!important}.d-block{display:block!important}.d-flex{display:flex!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}@media
                    (min-width:544px){.d-sm-block{display:block!important}.d-sm-flex{display:flex!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.d-sm-table{display:table!important}.d-sm-table-cell{display:table-cell!important}}@media
                    (min-width:768px){.d-md-block{display:block!important}.d-md-flex{display:flex!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.d-md-table{display:table!important}.d-md-table-cell{display:table-cell!important}}@media
                    (min-width:1012px){.d-lg-block{display:block!important}.d-lg-flex{display:flex!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.d-lg-table{display:table!important}.d-lg-table-cell{display:table-cell!important}}@media
                    (min-width:1280px){.d-xl-block{display:block!important}.d-xl-flex{display:flex!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.d-xl-table{display:table!important}.d-xl-table-cell{display:table-cell!important}}.v-hidden{visibility:hidden!important}.v-visible{visibility:visible!important}@media
                    (max-width:544px){.hide-sm{display:none!important}}@media (min-width:544px)
                    and(max-width:768px){.hide-md{display:none!important}}@media (min-width:768px)
                    and(max-width:1012px){.hide-lg{display:none!important}}@media
                    (min-width:1012px){.hide-xl{display:none!important}}.table-fixed{table-layout:fixed!important}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);word-wrap:normal;border:0}.show-on-focus{position:absolute;width:1px;height:1px;margin:0;overflow:hidden;clip:rect(1px,1px,1px,1px)}.show-on-focus:focus{z-index:20;width:auto;height:auto;clip:auto}.container{width:980px;margin-right:auto;margin-left:auto}.container::before{display:table;content:""}.container::after{display:table;clear:both;content:""}.container-md{max-width:768px;margin-right:auto;margin-left:auto}.container-lg{max-width:1012px;margin-right:auto;margin-left:auto}.container-xl{max-width:1280px;margin-right:auto;margin-left:auto}.columns{margin-right:-10px;margin-left:-10px}.columns::before{display:table;content:""}.columns::after{display:table;clear:both;content:""}.column{float:left;padding-right:10px;padding-left:10px}.one-third{width:33.333333%}.two-thirds{width:66.666667%}.one-fourth{width:25%}.one-half{width:50%}.three-fourths{width:75%}.one-fifth{width:20%}.four-fifths{width:80%}.centered{display:block;float:none;margin-right:auto;margin-left:auto}.col-1{width:8.3333333333%}.col-2{width:16.6666666667%}.col-3{width:25%}.col-4{width:33.3333333333%}.col-5{width:41.6666666667%}.col-6{width:50%}.col-7{width:58.3333333333%}.col-8{width:66.6666666667%}.col-9{width:75%}.col-10{width:83.3333333333%}.col-11{width:91.6666666667%}.col-12{width:100%}@media
                    (min-width:544px){.col-sm-1{width:8.3333333333%}.col-sm-2{width:16.6666666667%}.col-sm-3{width:25%}.col-sm-4{width:33.3333333333%}.col-sm-5{width:41.6666666667%}.col-sm-6{width:50%}.col-sm-7{width:58.3333333333%}.col-sm-8{width:66.6666666667%}.col-sm-9{width:75%}.col-sm-10{width:83.3333333333%}.col-sm-11{width:91.6666666667%}.col-sm-12{width:100%}}@media
                    (min-width:768px){.col-md-1{width:8.3333333333%}.col-md-2{width:16.6666666667%}.col-md-3{width:25%}.col-md-4{width:33.3333333333%}.col-md-5{width:41.6666666667%}.col-md-6{width:50%}.col-md-7{width:58.3333333333%}.col-md-8{width:66.6666666667%}.col-md-9{width:75%}.col-md-10{width:83.3333333333%}.col-md-11{width:91.6666666667%}.col-md-12{width:100%}}@media
                    (min-width:1012px){.col-lg-1{width:8.3333333333%}.col-lg-2{width:16.6666666667%}.col-lg-3{width:25%}.col-lg-4{width:33.3333333333%}.col-lg-5{width:41.6666666667%}.col-lg-6{width:50%}.col-lg-7{width:58.3333333333%}.col-lg-8{width:66.6666666667%}.col-lg-9{width:75%}.col-lg-10{width:83.3333333333%}.col-lg-11{width:91.6666666667%}.col-lg-12{width:100%}}@media
                    (min-width:1280px){.col-xl-1{width:8.3333333333%}.col-xl-2{width:16.6666666667%}.col-xl-3{width:25%}.col-xl-4{width:33.3333333333%}.col-xl-5{width:41.6666666667%}.col-xl-6{width:50%}.col-xl-7{width:58.3333333333%}.col-xl-8{width:66.6666666667%}.col-xl-9{width:75%}.col-xl-10{width:83.3333333333%}.col-xl-11{width:91.6666666667%}.col-xl-12{width:100%}}.gutter{margin-right:-16px;margin-left:-16px}.gutter>[class*=col-]{padding-right:16px!important;padding-left:16px!important}.gutter-condensed{margin-right:-8px;margin-left:-8px}.gutter-condensed>[class*=col-]{padding-right:8px!important;padding-left:8px!important}.gutter-spacious{margin-right:-24px;margin-left:-24px}.gutter-spacious>[class*=col-]{padding-right:24px!important;padding-left:24px!important}@media
                    (min-width:544px){.gutter-sm{margin-right:-16px;margin-left:-16px}.gutter-sm>[class*=col-]{padding-right:16px!important;padding-left:16px!important}.gutter-sm-condensed{margin-right:-8px;margin-left:-8px}.gutter-sm-condensed>[class*=col-]{padding-right:8px!important;padding-left:8px!important}.gutter-sm-spacious{margin-right:-24px;margin-left:-24px}.gutter-sm-spacious>[class*=col-]{padding-right:24px!important;padding-left:24px!important}}@media
                    (min-width:768px){.gutter-md{margin-right:-16px;margin-left:-16px}.gutter-md>[class*=col-]{padding-right:16px!important;padding-left:16px!important}.gutter-md-condensed{margin-right:-8px;margin-left:-8px}.gutter-md-condensed>[class*=col-]{padding-right:8px!important;padding-left:8px!important}.gutter-md-spacious{margin-right:-24px;margin-left:-24px}.gutter-md-spacious>[class*=col-]{padding-right:24px!important;padding-left:24px!important}}@media
                    (min-width:1012px){.gutter-lg{margin-right:-16px;margin-left:-16px}.gutter-lg>[class*=col-]{padding-right:16px!important;padding-left:16px!important}.gutter-lg-condensed{margin-right:-8px;margin-left:-8px}.gutter-lg-condensed>[class*=col-]{padding-right:8px!important;padding-left:8px!important}.gutter-lg-spacious{margin-right:-24px;margin-left:-24px}.gutter-lg-spacious>[class*=col-]{padding-right:24px!important;padding-left:24px!important}}@media
                    (min-width:1280px){.gutter-xl{margin-right:-16px;margin-left:-16px}.gutter-xl>[class*=col-]{padding-right:16px!important;padding-left:16px!important}.gutter-xl-condensed{margin-right:-8px;margin-left:-8px}.gutter-xl-condensed>[class*=col-]{padding-right:8px!important;padding-left:8px!important}.gutter-xl-spacious{margin-right:-24px;margin-left:-24px}.gutter-xl-spacious>[class*=col-]{padding-right:24px!important;padding-left:24px!important}}.offset-1{margin-left:8.3333333333%!important}.offset-2{margin-left:16.6666666667%!important}.offset-3{margin-left:25%!important}.offset-4{margin-left:33.3333333333%!important}.offset-5{margin-left:41.6666666667%!important}.offset-6{margin-left:50%!important}.offset-7{margin-left:58.3333333333%!important}.offset-8{margin-left:66.6666666667%!important}.offset-9{margin-left:75%!important}.offset-10{margin-left:83.3333333333%!important}.offset-11{margin-left:91.6666666667%!important}@media
                    (min-width:544px){.offset-sm-1{margin-left:8.3333333333%!important}.offset-sm-2{margin-left:16.6666666667%!important}.offset-sm-3{margin-left:25%!important}.offset-sm-4{margin-left:33.3333333333%!important}.offset-sm-5{margin-left:41.6666666667%!important}.offset-sm-6{margin-left:50%!important}.offset-sm-7{margin-left:58.3333333333%!important}.offset-sm-8{margin-left:66.6666666667%!important}.offset-sm-9{margin-left:75%!important}.offset-sm-10{margin-left:83.3333333333%!important}.offset-sm-11{margin-left:91.6666666667%!important}}@media
                    (min-width:768px){.offset-md-1{margin-left:8.3333333333%!important}.offset-md-2{margin-left:16.6666666667%!important}.offset-md-3{margin-left:25%!important}.offset-md-4{margin-left:33.3333333333%!important}.offset-md-5{margin-left:41.6666666667%!important}.offset-md-6{margin-left:50%!important}.offset-md-7{margin-left:58.3333333333%!important}.offset-md-8{margin-left:66.6666666667%!important}.offset-md-9{margin-left:75%!important}.offset-md-10{margin-left:83.3333333333%!important}.offset-md-11{margin-left:91.6666666667%!important}}@media
                    (min-width:1012px){.offset-lg-1{margin-left:8.3333333333%!important}.offset-lg-2{margin-left:16.6666666667%!important}.offset-lg-3{margin-left:25%!important}.offset-lg-4{margin-left:33.3333333333%!important}.offset-lg-5{margin-left:41.6666666667%!important}.offset-lg-6{margin-left:50%!important}.offset-lg-7{margin-left:58.3333333333%!important}.offset-lg-8{margin-left:66.6666666667%!important}.offset-lg-9{margin-left:75%!important}.offset-lg-10{margin-left:83.3333333333%!important}.offset-lg-11{margin-left:91.6666666667%!important}}@media
                    (min-width:1280px){.offset-xl-1{margin-left:8.3333333333%!important}.offset-xl-2{margin-left:16.6666666667%!important}.offset-xl-3{margin-left:25%!important}.offset-xl-4{margin-left:33.3333333333%!important}.offset-xl-5{margin-left:41.6666666667%!important}.offset-xl-6{margin-left:50%!important}.offset-xl-7{margin-left:58.3333333333%!important}.offset-xl-8{margin-left:66.6666666667%!important}.offset-xl-9{margin-left:75%!important}.offset-xl-10{margin-left:83.3333333333%!important}.offset-xl-11{margin-left:91.6666666667%!important}}.markdown-body{font-family:-apple-system,BlinkMacSystemFont,"Segoe
                    UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI
                    Symbol";font-size:16px;line-height:1.5;word-wrap:break-word}.markdown-body::before{display:table;content:""}.markdown-body::after{display:table;clear:both;content:""}.markdown-body>*
                    :first-child{margin-top:0!important}.markdown-body>*
                    :last-child{margin-bottom:0!important}.markdown-body
                    a:not([href]){color:inherit;text-decoration:none}.markdown-body
                    .absent{color:#cb2431}.markdown-body
                    .anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1}.markdown-body
                    .anchor:focus{outline:0}.markdown-body blockquote,.markdown-body
                    dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body
                    table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body
                    hr{height:.25em;padding:0;margin:24px
                    0;background-color:#e1e4e8;border:0}.markdown-body blockquote{padding:0
                    1em;color:#6a737d;border-left:.25em solid #dfe2e5}.markdown-body
                    blockquote>:first-child{margin-top:0}.markdown-body
                    blockquote>:last-child{margin-bottom:0}.markdown-body
                    kbd{display:inline-block;padding:3px
                    5px;font-size:11px;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:solid
                    1px #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0
                    -1px 0 #959da5}.markdown-body h1,.markdown-body h2,.markdown-body
                    h3,.markdown-body h4,.markdown-body h5,.markdown-body
                    h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.markdown-body
                    h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3
                    .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5
                    .octicon-link,.markdown-body h6
                    .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden}.markdown-body
                    h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover
                    .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover
                    .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body
                    h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor
                    .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body
                    h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor
                    .octicon-link,.markdown-body h6:hover .anchor
                    .octicon-link{visibility:visible}.markdown-body h1 code,.markdown-body h1
                    tt,.markdown-body h2 code,.markdown-body h2 tt,.markdown-body h3
                    code,.markdown-body h3 tt,.markdown-body h4 code,.markdown-body h4
                    tt,.markdown-body h5 code,.markdown-body h5 tt,.markdown-body h6
                    code,.markdown-body h6 tt{font-size:inherit}.markdown-body
                    h1{padding-bottom:.3em;font-size:2em;border-bottom:1px solid
                    #eaecef}.markdown-body h2{padding-bottom:.3em;font-size:1.5em;border-bottom:1px
                    solid #eaecef}.markdown-body h3{font-size:1.25em}.markdown-body
                    h4{font-size:1em}.markdown-body h5{font-size:.875em}.markdown-body
                    h6{font-size:.85em;color:#6a737d}.markdown-body ol,.markdown-body
                    ul{padding-left:2em}.markdown-body ol.no-list,.markdown-body
                    ul.no-list{padding:0;list-style-type:none}.markdown-body ol ol,.markdown-body ol
                    ul,.markdown-body ul ol,.markdown-body ul
                    ul{margin-top:0;margin-bottom:0}.markdown-body
                    li{word-wrap:break-all}.markdown-body li>p{margin-top:16px}.markdown-body
                    li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl
                    dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:600}.markdown-body
                    dl dd{padding:0 16px;margin-bottom:16px}.markdown-body
                    table{display:block;width:100%;overflow:auto}.markdown-body table
                    th{font-weight:600}.markdown-body table td,.markdown-body table th{padding:6px
                    13px;border:1px solid #dfe2e5}.markdown-body table
                    tr{background-color:#fff;border-top:1px solid #c6cbd1}.markdown-body table
                    tr:nth-child(2n){background-color:#f6f8fa}.markdown-body table
                    img{background-color:transparent}.markdown-body
                    img{max-width:100%;box-sizing:content-box;background-color:#fff}.markdown-body
                    img[align=right]{padding-left:20px}.markdown-body
                    img[align=left]{padding-right:20px}.markdown-body
                    .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body
                    span.frame{display:block;overflow:hidden}.markdown-body
                    span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0
                    0;overflow:hidden;border:1px solid #dfe2e5}.markdown-body span.frame span
                    img{display:block;float:left}.markdown-body span.frame span
                    span{display:block;padding:5px 0 0;clear:both;color:#24292e}.markdown-body
                    span.align-center{display:block;overflow:hidden;clear:both}.markdown-body
                    span.align-center>span{display:block;margin:13px auto
                    0;overflow:hidden;text-align:center}.markdown-body span.align-center span
                    img{margin:0 auto;text-align:center}.markdown-body
                    span.align-right{display:block;overflow:hidden;clear:both}.markdown-body
                    span.align-right>span{display:block;margin:13px 0
                    0;overflow:hidden;text-align:right}.markdown-body span.align-right span
                    img{margin:0;text-align:right}.markdown-body
                    span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body
                    span.float-left span{margin:13px 0 0}.markdown-body
                    span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body
                    span.float-right>span{display:block;margin:13px auto
                    0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body
                    tt{padding:.2em
                    .4em;margin:0;font-size:85%;background-color:rgba(27,31,35,.05);border-radius:3px}.markdown-body
                    code br,.markdown-body tt br{display:none}.markdown-body del
                    code{text-decoration:inherit}.markdown-body pre{word-wrap:normal}.markdown-body
                    pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:0
                    0;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body
                    .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight
                    pre,.markdown-body
                    pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f6f8fa;border-radius:3px}.markdown-body
                    pre code,.markdown-body pre
                    tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body
                    .csv-data td,.markdown-body .csv-data
                    th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body
                    .csv-data .blob-num{padding:10px 8px
                    9px;text-align:right;background:#fff;border:0}.markdown-body .csv-data
                    tr{border-top:0}.markdown-body .csv-data
                    th{font-weight:600;background:#f6f8fa;border-top:0}.highlight table
                    td{padding:5px}.highlight table pre{margin:0}.highlight
                    .cm{color:#998;font-style:italic}.highlight
                    .cp{color:#999;font-weight:700}.highlight
                    .c1{color:#998;font-style:italic}.highlight
                    .cs{color:#999;font-weight:700;font-style:italic}.highlight .c,.highlight
                    .cd{color:#998;font-style:italic}.highlight
                    .err{color:#a61717;background-color:#e3d2d2}.highlight
                    .gd{color:#000;background-color:#fdd}.highlight
                    .ge{color:#000;font-style:italic}.highlight .gr{color:#a00}.highlight
                    .gh{color:#999}.highlight .gi{color:#000;background-color:#dfd}.highlight
                    .go{color:#888}.highlight .gp{color:#555}.highlight
                    .gs{font-weight:700}.highlight .gu{color:#aaa}.highlight
                    .gt{color:#a00}.highlight .kc{color:#000;font-weight:700}.highlight
                    .kd{color:#000;font-weight:700}.highlight
                    .kn{color:#000;font-weight:700}.highlight
                    .kp{color:#000;font-weight:700}.highlight
                    .kr{color:#000;font-weight:700}.highlight
                    .kt{color:#458;font-weight:700}.highlight .k,.highlight
                    .kv{color:#000;font-weight:700}.highlight .mf{color:#099}.highlight
                    .mh{color:#099}.highlight .il{color:#099}.highlight .mi{color:#099}.highlight
                    .mo{color:#099}.highlight .m,.highlight .mb,.highlight .mx{color:#099}.highlight
                    .sb{color:#d14}.highlight .sc{color:#d14}.highlight .sd{color:#d14}.highlight
                    .s2{color:#d14}.highlight .se{color:#d14}.highlight .sh{color:#d14}.highlight
                    .si{color:#d14}.highlight .sx{color:#d14}.highlight .sr{color:#009926}.highlight
                    .s1{color:#d14}.highlight .ss{color:#990073}.highlight .s{color:#d14}.highlight
                    .na{color:teal}.highlight .bp{color:#999}.highlight .nb{color:#0086b3}.highlight
                    .nc{color:#458;font-weight:700}.highlight .no{color:teal}.highlight
                    .nd{color:#3c5d5d;font-weight:700}.highlight .ni{color:purple}.highlight
                    .ne{color:#900;font-weight:700}.highlight
                    .nf{color:#900;font-weight:700}.highlight
                    .nl{color:#900;font-weight:700}.highlight .nn{color:#555}.highlight
                    .nt{color:navy}.highlight .vc{color:teal}.highlight .vg{color:teal}.highlight
                    .vi{color:teal}.highlight .nv{color:teal}.highlight
                    .ow{color:#000;font-weight:700}.highlight
                    .o{color:#000;font-weight:700}.highlight
                    .w{color:#bbb}.highlight{background-color:#f8f8f8}</style>
            </head>
            <body class="bg-white">
                <nav class="container-md px-3 py-2 mt-2 mt-md-5 mb-5 markdown-body">
                    <p class="bg-yellow-light ml-n1 px-1 py-1 mb-1">
                        <strong>This is a web feed,</strong> also known as an RSS feed. <strong>
                        Subscribe</strong> by copying the URL from the address bar into your
                        newsreader. </p>
                    <p class="text-gray"> Visit <a href="https://aboutfeeds.com">About Feeds</a> to
                        get started with newsreaders and subscribing. It’s free. </p>
                </nav>
                <div class="container-md px-3 py-3 markdown-body">
                    <header class="py-5">
                        <h1 class="border-0">
                            <!-- https://commons.wikimedia.org/wiki/File:Feed-icon.svg -->
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                style="vertical-align: text-bottom; width: 1.2em; height: 1.2em;"
                                class="pr-1" id="RSSicon" viewBox="0 0 256 256">
                                <defs>
                                    <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915"
                                        id="RSSg">
                                        <stop offset="0.0" stop-color="#E3702D" />
                                        <stop offset="0.1071" stop-color="#EA7D31" />
                                        <stop offset="0.3503" stop-color="#F69537" />
                                        <stop offset="0.5" stop-color="#FB9E3A" />
                                        <stop offset="0.7016" stop-color="#EA7C31" />
                                        <stop offset="0.8866" stop-color="#DE642B" />
                                        <stop offset="1.0" stop-color="#D95B29" />
                                    </linearGradient>
                                </defs>
                                <rect width="256" height="256" rx="55" ry="55" x="0" y="0"
                                    fill="#CC5D15" />
                                <rect width="246" height="246" rx="50" ry="50" x="5" y="5"
                                    fill="#F49C52" />
                                <rect width="236" height="236" rx="47" ry="47" x="10" y="10"
                                    fill="url(#RSSg)" />
                                <circle cx="68" cy="189" r="24" fill="#FFF" />
                                <path
                                    d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z"
                                    fill="#FFF" />
                                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z"
                                    fill="#FFF" />
                            </svg> Web Feed
                            Preview </h1>
                        <h2>
                            <xsl:value-of select="/rss/channel/title" />
                        </h2>
                        <p>
                            <xsl:value-of select="/rss/channel/description" />
                        </p>
                        <a class="head_link" target="_blank">
                            <xsl:attribute name="href">
                                <xsl:value-of select="/rss/channel/link" />
                            </xsl:attribute>
                            Visit Website &#x2192; </a>
                    </header>
                    <h2>Recent Items</h2>
                    <xsl:for-each select="/rss/channel/item">
                        <div class="pb-5">
                            <h3 class="mb-0">
                                <a target="_blank">
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="link" />
                                    </xsl:attribute>
                                    <xsl:value-of select="title" />
                                </a>
                            </h3>
                            <p>
                                <small class="text-gray"> Published: <xsl:value-of select="pubDate" />
                                </small>
                            </p>
                            <p>
                                <small class="text-gray"> Category: <xsl:value-of select="category" />
                                </small>
                            </p>
                            <p>
                                <xsl:value-of select="description" />
                            </p>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
```

# public/assets/testest.png

This is a binary file of the type: Image

# public/assets/test.jpg

This is a binary file of the type: Image

# public/assets/DALL·E 2023-11-26 13.11.39 - Create an image of Kuala Lumpur in the 1930s depicted as a low-polygon 3D model scene. The artwork should show the evolution of the city with more mod.jpg

This is a binary file of the type: Image

# public/fonts/Switzer-Regular.woff2

This is a binary file of the type: Binary

# public/fonts/Switzer-Regular.woff

This is a binary file of the type: Binary

# public/fonts/Switzer-Regular.ttf

This is a binary file of the type: Binary

# public/fonts/Switzer-Italic.woff2

This is a binary file of the type: Binary

# public/fonts/Switzer-Italic.woff

This is a binary file of the type: Binary

# public/fonts/Switzer-Italic.ttf

This is a binary file of the type: Binary

# public/fonts/Switzer-BoldItalic.woff2

This is a binary file of the type: Binary

# public/fonts/Switzer-BoldItalic.woff

This is a binary file of the type: Binary

# public/fonts/Switzer-BoldItalic.ttf

This is a binary file of the type: Binary

# public/fonts/Switzer-Bold.woff2

This is a binary file of the type: Binary

# public/fonts/Switzer-Bold.woff

This is a binary file of the type: Binary

# public/fonts/Switzer-Bold.ttf

This is a binary file of the type: Binary

# public/art/230614-music_spectrum.png

This is a binary file of the type: Image

# public/art/230614-music_spectrum.mp4

This is a binary file of the type: Binary

# public/art/230529-asian-lady-smiling-while-reading-a-book.svg

This is a file of the type: SVG Image

# public/art/230529-asian-lady-smiling-while-reading-a-book.png

This is a binary file of the type: Image

# public/art/230523-looping_with_noise_deepdive2.mp4

This is a binary file of the type: Binary

# public/art/230523-looping_with_noise_deepdive2.gif

This is a binary file of the type: Image

# public/art/230521-looping_with_noise_deepdive1.mp4

This is a binary file of the type: Binary

# public/art/230521-looping_with_noise_deepdive1.gif

This is a binary file of the type: Image

# public/art/230520-tween_ease_demo.mp4

This is a binary file of the type: Binary

# public/art/230520-tween_ease_demo.gif

This is a binary file of the type: Image

# public/art/230520-galaxy_pinata.mp4

This is a binary file of the type: Binary

# public/art/230520-galaxy_pinata.gif

This is a binary file of the type: Image

# public/art/230518-wave_broken_loop.mp4

This is a binary file of the type: Binary

# public/art/230518-wave_broken_loop.gif

This is a binary file of the type: Image

# public/art/230518-minions_going_in_circle.mp4

This is a binary file of the type: Binary

# public/art/230518-minions_going_in_circle.gif

This is a binary file of the type: Image

# public/art/230517-loop_noise_spectrum.mp4

This is a binary file of the type: Binary

# public/art/230517-loop_noise_spectrum.gif

This is a binary file of the type: Image

# public/art/230516-whats_for_lunch.mp4

This is a binary file of the type: Binary

# public/art/230516-whats_for_lunch.gif

This is a binary file of the type: Image

# public/art/230515-helloworld.mp4

This is a binary file of the type: Binary

# public/art/230515-helloworld.gif

This is a binary file of the type: Image

# public/art/230408-dalle-work.jpg

This is a binary file of the type: Image

# public/art/230404-perlin_noice.gif

This is a binary file of the type: Image

# public/art/230402-dalle-the_root.jpg

This is a binary file of the type: Image

# public/art/230330-img-UrdTx1NNDOMxKkdaMn7UlXeH.png

This is a binary file of the type: Image

# public/art/230330-img-49nISl0doivWp2ykDILEx89i.png

This is a binary file of the type: Image

# public/art/230330-img-0QZs4U7fxuVtTYHPOrkXbgPg.png

This is a binary file of the type: Image

# public/art/230330-img-00r7sHzTsvHvRq0qNFYKWXqT.png

This is a binary file of the type: Image

# public/art/220620-hotaf.jpg

This is a binary file of the type: Image

# public/art/180822-sketch-minimal.svg

This is a file of the type: SVG Image

# src/pages/posts/index.astro

```astro
---
import { getCollection } from "astro:content";

import Layout from "../../layouts/Layout.astro";
import EntriesOne from "../../components/template-parts/EntriesOne.astro";

import Pagination from "../../components/template-parts/Pagination.astro";

const allPosts = await getCollection("posts");
const sortedPosts = allPosts.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  // add pagination
  
);
---

<Layout>
  <!-- 
  title='Blog'
  description='Brutal Blog | On this page you can find a collection of blogposts'
  pageTitle='Brutal Blog' -->
  <main>
    <section class="container">
        <ul class="grid__posts">
          {
            sortedPosts.map((post) => (
              <EntriesOne
                url={"/posts/" + post.slug}
                title={post.data.title}
                description={post.data.description}
                alt={post.data.title}
                pubDate={post.data.pubDate.toString().slice(0, 10)}
                author={post.data.author}
                image={post.data.image}
                tags={post.data.tags}
              />
            ))
          }
        </ul>

        <!-- <Pagination prevUrl={page.url.prev} nextUrl={page.url.next} /> -->
      </div>
    </section>
  </main>
</Layout>

```

# src/pages/posts/[...slug].astro

```astro
---
import { getCollection, getEntry } from "astro:content";
import type { CollectionEntry } from 'astro:content';

import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
  const allPosts = await getCollection("posts");

  // filter out draft posts
  const publishedPosts = allPosts.filter((post) => !post.data.draft);

  return publishedPosts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

interface Props {
  entry: CollectionEntry<"posts">;
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout title={entry?.data.title} description={entry?.data.description}>
  <main>
    <div class="container">
      <article id="blog-single">
        {entry ? <Content /> : <p>Post not found.</p>}
      </article>
    </div>
  </main>
</Layout>
```

# src/pages/portfolio/index.astro

```astro
---
import Layout from "../../layouts/Layout.astro";
import PortfolioGallery from "./_gallery.astro";
/* 

const allPosts = await getCollection("blog");

const blog_posts = allPosts
  .filter((post) => !post.data.draft) // Filter out drafts
  .sort((a, b) => {
    // Compare titles for sorting in descending order
    const titleA = a.data.title.toLowerCase();
    const titleB = b.data.title.toLowerCase();
    if (titleA < titleB) {
      return 1; // Place b before a for descending order
    }
    if (titleA > titleB) {
      return -1; // Place a before b for descending order
    }
    return 0;
  }); */
---

<Layout>
  <main class="d-flex flex-column align-items-center justify-content-center">
    <PortfolioGallery />
  </main>
</Layout>

<style>
    p {
        max-width: 74ch;
    }
</style>
```

# src/pages/portfolio/_gallery.astro

```astro
---
/* 
// portfolio via collection?
import { getCollection } from "astro:content";

const allPortfolio = await getCollection("portfolio");

const blog_posts = allPosts
  .filter((post) => !post.data.draft) // Filter out drafts
  .sort((a, b) => {
    // Compare titles for sorting in descending order
    const titleA = a.data.title.toLowerCase();
    const titleB = b.data.title.toLowerCase();
    if (titleA < titleB) {
      return 1; // Place b before a for descending order
    }
    if (titleA > titleB) {
      return -1; // Place a before b for descending order
    }
    return 0;
  }); */
---

<div
  class="pswp-gallery pswp-gallery--with-caption"
  id="gallery--with-custom-caption"
>
  <div class="pswp-gallery__item">
    <a
      href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
      data-pswp-width="1669"
      data-pswp-height="2500"
      target="_blank"
    >
      <img
        src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
        alt="Caption 1"
      />
    </a>
    <div class="hidden-caption-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a
        href="https://example.com"
        target="_blank"
        rel="nofollow">Test link →</a
      >
    </div>
  </div>

  <div class="pswp-gallery__item">
    <a
      href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1666"
      target="_blank"
    >
      <img
        src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
        alt="Caption 2"
      />
    </a>
  </div>

  <div class="pswp-gallery__item">
    <a
      href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1667"
      target="_blank"
    >
      <img
        src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg"
        alt="Caption 3"
      />
    </a>
  </div>

  <div class="pswp-gallery__item">
    <a
      href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1668"
      target="_blank"
    >
      <img
        src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg"
        alt="Caption 4"
      />
    </a>
  </div>
</div>

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/umd/photoswipe-lightbox.umd.min.js"
  is:inline></script>

<script is:inline>
  document.addEventListener("DOMContentLoaded", () => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery--with-custom-caption",
      children: ".pswp-gallery__item",
      pswpModule: () =>
        import(
          "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.min.js"
        ),
    });

    lightbox.on("uiRegister", function () {
      lightbox.pswp.ui.registerElement({
        name: "custom-caption",
        order: 9,
        isButton: false,
        appendTo: "root",
        html: "Caption text",
        onInit: (el, pswp) => {
          lightbox.pswp.on("change", () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = "";
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector(
                ".hidden-caption-content"
              );
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement
                  .querySelector("img")
                  .getAttribute("alt");
              }
            }
            el.innerHTML = captionHTML || "";
          });
        },
      });
    });

    lightbox.init();
  });
</script>

<style is:global>
  @import "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.min.css";

  .pswp__custom-caption {
    background: rgba(75, 150, 75, 0.75);
    font-size: 16px;
    color: #fff;
    width: calc(100% - 32px);
    max-width: 400px;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
  }
  .pswp__custom-caption a {
    color: #fff;
    text-decoration: underline;
  }
  .hidden-caption-content {
    display: none;
  }

  .pswp-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;

    & .pswp-gallery__item {
      max-width: 180px;
      & img {
        aspect-ratio: 1/1;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>

```

# .github/workflows/deploy.yml

```yml
name: Deploy to GitHub Pages

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:

# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0
        # with:
            # path: . # The root location of your Astro project inside the repository. (optional)
            # node-version: 16 # The specific version of Node that should be used to build your site. Defaults to 16. (optional)
            # package-manager: yarn # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

# src/pages/_nicesketch/the-malaysians-clock.astro

```astro
---
import Layout from "../../layouts/Layout.astro";
---

<Layout empty_canvas={true}>
  <script
    is:inline
    src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
  <main>
    <div id="canvas"></div>
  </main>
  <style>
    main {
        background: #0d0d0d;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #canvas {
        display: inline-block;
    }
  </style>
  <script is:inline>
    function setup_canvas() {
      let _canvas = createCanvas(512, 512);
      _canvas.parent("canvas");
      frameRate(60);
      background(13);
    }

    // sketch
    let yellow = [255, 224, 26];
    let blue = [8, 9, 146];

    function setup() {
      setup_canvas();
      describe("A sketch of THE Malaysian Favourite Clock.");
      // sketch

      angleMode(DEGREES);
    }

    function draw() {
      background(13);

      // sketch
      push();
      draw_clock();
      pop();
    }

    function draw_clock() {
      // Translate the origin to the center of the canvas
      translate(width / 2, height / 2);
      strokeCap(SQUARE);

      // Draw clock face
      stroke(255, 0, 0);
      strokeWeight(38);
      ellipse(0, 0, 350, 350);

      fill(blue);
      stroke(255);
      strokeWeight(12);
      ellipse(0, 0, 350, 350);

      // Draw the ticks
      for (let i = 0; i < 60; i++) {
        let len = i % 5 === 0 ? 15 : 8;
        if (i % 5 === 0) {
          strokeWeight(6);
        } else {
          strokeWeight(4);
        }
        let angle = map(i, 0, 60, 0, 360);
        let x1 = cos(angle) * 165;
        let y1 = sin(angle) * 165;
        let x2 = cos(angle) * (165 - len);
        let y2 = sin(angle) * (165 - len);
        line(x1, y1, x2, y2);
      }

      // Get the current UTC time
      let now = new Date();
      let hours = now.getUTCHours() + 8; // Convert to Malaysia time (GMT+8)
      let minutes = now.getUTCMinutes();
      let seconds = now.getUTCSeconds();

      // Correct for number over 24
      hours = hours >= 24 ? hours - 24 : hours;

      let adjustAngleAsHandPointToRight = 90;

      // Calculate angles for hands
      let hourAngle =
        map(hours % 12, 0, 12, 0, 360) +
        minutes * 0.5 -
        adjustAngleAsHandPointToRight;
      let minuteAngle =
        map(minutes, 0, 60, 0, 360) +
        map(seconds, 0, 60, 0, 6) -
        adjustAngleAsHandPointToRight;
      let secondAngle =
        map(seconds, 0, 60, 0, 360) - adjustAngleAsHandPointToRight;

      // Draw the second hand
      push();
      // translate(10, 0);
      stroke(yellow);
      strokeWeight(5);
      rotate(secondAngle);
      line(-22, 0, 164, 0);
      pop();

      // Draw the minute hand
      push();
      stroke(yellow);
      strokeWeight(6);
      rotate(minuteAngle);
      line(-20, 0, 148, 0);
      pop();

      // Draw the hour hand
      push();
      stroke(yellow);
      strokeWeight(12);
      rotate(hourAngle);
      line(-20, 0, 140, 0);
      pop();
    }
  </script>
</Layout>

```

# src/components/template-parts/Pagination.astro

```astro
---
import Link from "./Link.astro";

const { prevUrl, nextUrl } = Astro.props;
---

<nav aria-label="pagination">
  {
    prevUrl && (
      <Link href={prevUrl} class="prev">
        Newer
      </Link>
    )
  }
  {
    nextUrl && (
      <Link href={nextUrl} class="next">
        Older
      </Link>
    )
  }
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }
  a.next:only-child {
    margin-left: auto;
    margin-right: 0;
  }
</style>

```

# src/components/template-parts/Link.astro

```astro
---
import type { HTMLAttributes } from "astro/types";

type Props = HTMLAttributes<"a">;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
const isActive = href === pathname || href === pathname.replace(/\/$/, "");
---

<a href={href} class:list={[className, { active: isActive }]} {...props}>
  <slot />
</a>

<style>
  a {
    display: inline-block;
    text-decoration: none;
  }
  .active {
    font-weight: bold;
    text-decoration: underline;
  }
  .next,
  .prev,
  .back {
    text-decoration: underline;
  }
  .next:after,
  .back:before {
    content: "→";
  }
  .prev:before {
    content: "←";
  }
</style>

```

# src/components/template-parts/EntriesOne.astro

```astro
---
const { title, url, description, pubDate, author, image, tags } = Astro.props;

const image_url = image.url ? image.url : "http://via.placeholder.com/300x300";

const image_alt = image.alt ? image.alt : `Image of` + title;
---

<li>
  <article class="entry_one d-flex flex-column flex-1 flex flex-col">
    <div class="block w-full lg:col-span-2">
      <a href={url} title={title}>
        <img
          class="aspect-[2/3] object-cover bg-center h-full w-full"
          src={image_url}
          alt={image_alt}
        />
      </a>
    </div>
    <div
      class="card-content flex-fill d-flex flex-column justify-content-between h-100 p-3"
    >
      <header class="card-header">
        <time datetime={pubDate}>{pubDate}</time>
        <a href={url} title={title}>
          <h3>
            {title}
          </h3>
        </a>
      </header>

      <p class="description">{description}</p>
      <div class="tags mt-2">
        {tags.map((tag) => <span class="tag">{tag}</span>)}
      </div>
    </div>
  </article>
</li>
<style>
  .entry_one {
    height: 100%;
    background: #fff;
    transition: filter 0.168s ease-in-out;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0));
    &:hover {
      filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  time {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: var(--gray3);
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
  }
  p {
    font-size: 0.85rem;
    color: var(--gray5);
  }
  a {
    color: var(--gray5);
    text-decoration: none;
    &:hover {
      text-decoration: dashed underline;
    }
  }
  .card-header {
    margin-bottom: 8px;
  }

  h3 {
    margin: 4px 0;
  }
  .description {
    flex-grow: 1;
    margin-bottom: 8px;
  }
  .tags {
    text-transform: lowercase;
    font-size: 0.8rem;
    color: var(--gray3);
  }
  .tag {
    margin-right: 8px;
  }
  /* add card inner shadow */
  .entry_one {
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.05),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.25rem;
    overflow: hidden;
  }
</style>

```

# src/components/template-parts/Card.astro

```astro
---
// import { Debug } from "astro/components";
// import { Image } from "@astrojs/image/components";
import { slugify, dateToNumber } from "./Utils;
// import Link from "./Link.astro";

const { data, url, heading, classes } = Astro.props;

const Heading = heading;

const {
  title = "",
  pubDate = "",
  // image = "",
  description = "",
  tag = "",
} = data;

const image = url;
---

<article class:list={["card", classes]}>
  <img
    class="card-img"
    width="92"
    height="92"
    src={`/assets/${image}.png`}
  />
  <div class="content">
    <p class="meta">
      {dateToNumber(pubDate)} | {tag.join(", ")}
    </p>
    <Heading class="title">
      <a href={`/blog/${url}/`}>
        {title}
      </a>
    </Heading>
    <p>{description}</p>
  </div>
</article>
<style>
  .card {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .card * {
    margin: 0;
    padding: 0;
  }
  .meta {
    font-size: var(--size-sm);
  }
  .title {
    font-size: var(--h3);
  }
  .card-img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
</style>

```

# src/content/posts/The Malaysian's Favourite Clock.md

```md
---
title: The Malaysian's Favorite Clock
description: It so timeless everyone just point and awe.
pubDate: 231205 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: false

---
<div id="canvas"></div>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
<script>
function setup_canvas(){let e=createCanvas(512,512);e.parent("canvas"),frameRate(60),background(13)}let yellow=[255,224,26],blue=[8,9,146];function setup(){setup_canvas(),describe("A sketch of THE Malaysian Favourite Clock."),angleMode(DEGREES)}function draw(){background(13),push(),draw_clock(),pop()}function draw_clock(){translate(width/2,height/2),strokeCap(SQUARE),stroke(255,0,0),strokeWeight(38),ellipse(0,0,350,350),fill(blue),stroke(255),strokeWeight(12),ellipse(0,0,350,350);for(let e=0;e<60;e++){var t=e%5==0?15:8;e%5==0?strokeWeight(6):strokeWeight(4);var o=map(e,0,60,0,360),a=165*cos(o),s=165*sin(o),r=cos(o)*(165-t),t=sin(o)*(165-t);line(a,s,r,t)}let e=new Date,l=e.getUTCHours()+8;var n=e.getUTCMinutes(),i=e.getUTCSeconds();l=24<=l?l-24:l;var p=map(l%12,0,12,0,360)+.5*n-90,n=map(n,0,60,0,360)+map(i,0,60,0,6)-90,i=map(i,0,60,0,360)-90;push(),stroke(yellow),strokeWeight(5),rotate(i),line(-22,0,164,0),pop(),push(),stroke(yellow),strokeWeight(6),rotate(n),line(-20,0,148,0),pop(),push(),stroke(yellow),strokeWeight(12),rotate(p),line(-20,0,140,0),pop()}
</script>

A timeless history that I thought I give it a go in replicating it.
```

# src/content/posts/Setup for website development.md

```md
---
title: BlogTemplateTitle
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
## WordPress
content heavy websites

## AstroJS for simple websites
microsites


## Plugins & Libraries
### wordpress

### general
- BootstrapCSS
- 

```

# src/content/posts/Setup for my webdev.md

```md
---
title: Setup for my webdev
description: Describe how everything was setup, how to improve further as next step?
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
1. wordpress
	2. plugins
	3. 
2. astrojs
3. feature blog and portfolio as example
4. design work UIUX
```

# src/content/posts/Setup for my generative art.md

```md
---
title: BlogTemplateTitle
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
## workflow

- p5 webeditor > gif > handbrake to mp4
- p5 webeditor > download to localhost > ccapture.js > ffmpeg to combine all PNG into MP4

```

# src/content/posts/Setup for Blog & Portfolio.md

```md
---
title: BlogTemplateTitle
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
- Blog
	1. Journal & Record Works
	2. Share with the world
- Portfolio
	1. Show best work under 1min-5min
	2. Download Resume

## The flow
1. Draft
2. Content
3. Post
4. Publish


## Astrojs + Obsidian

## 

Display my work
- https://photoswipe.com/
## What's Next?
- [ ] Commenting for my blog -  https://giscus.app/
```

# src/content/posts/On capturing my processing work - ccapturejs.md

```md
---
title: BlogTemplateTitle
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
- OBS Studio - brute force method
- P5js - default option 
	- recordGif()
	- saveFrames()
- ccapture.js - high quality option
	- Guide by Peter Beshai: https://github.com/pbeshai/p5js-ccapture & https://peterbeshai.com/blog/2018-10-28-p5js-ccapture/

## where to share?
- my blog
- instagram
- next platform to try: youtube short?
```

# src/content/posts/Building GPT for my EDM Music Journey.md

```md
---
title: Building GPT for my EDM Music Journey
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

```

# src/content/posts/240505-new_chapter.md

```md
---
title: New Chapter for Career
description: Wondering about my next steps
pubDate: 240505 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: false

---

## Starting a New Chapter: My Career Development Journey

I'm embarking on an exciting new chapter in my career, filled with anticipation and excitement. Over the next eight weeks, I'll be diving into several projects that align with my personal and professional growth. Here’s a glimpse into what I’m planning and how it ties into my career goals.

## My Projects

1. **Website for My Spouse’s Business**: This project is a blend of my technical skills and creative side, aiming to help my spouse’s business grow while enhancing my web development skills.
2. **Simple Page for My Condo Community**: I’m creating a community page to connect my neighbors and refine my skills in user interface design.
3. **Community Marketplace Startup**: This ambitious project is about setting up a platform for local goods and services exchange, challenging my technical and business skills.

## Embracing Imperfection

I’m adopting the philosophy of "imperfect action." My aim is to create Minimum Viable Products (MVPs) for these ideas, allowing me to test, receive feedback, and iterate. It’s about making progress and learning, not achieving perfection.

## Impact on My Career

These projects will enhance my skills, align with my personal values, and help me make strategic career moves. Whether I continue freelancing, seek employment, or start a new business, these projects will showcase my capabilities.

## Conclusion

This journey is about building a fulfilling and authentic professional life. I look forward to learning and sharing my experiences through this blog as I explore these new opportunities. Stay tuned for updates on my progress and insights.
```

# src/content/posts/231204-circles_goes_wiggling.md

```md
---
title: Sketch of circles wiggling.
description: A sketch of grids with circles with small circles orbiting within restlessly, it keeps wiggle-wiggle-wiggle-wiggle.
pubDate: 231204 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: false
---

<video width="512" height="512" controls autoplay loop muted>
<source src="/sketch/231204-circles_goes_wiggling.mp4" type="video/mp4">
</video>

> **Sketch Displays**
> Currently the above is using \<video>, about 3mb for 4secs, nice for loop/controls.
> Tried GIF at 512x512 for 4 secs is about 15mb.
> Probably best to moves the video to external platform like YouTube (Instagram enlarged the video and pixelate it bad..)

---
Setup a boilerplate template to speed up on output sketches, no fancy class or export JS modules, just procedural functions added via index.html in sequence, keep it simple for future references. Below are few pointers that I did and what I hope to do next: -

- \_canvas.js - setup base canvas, added button for controller and recordings
- \_debug.js - draw debug below the sketch for quick debug
- \_colors.js - default colors palette I picked for standardize color, hoping can pick my own set of unique colors as time went on
- \_music.js - setup a BPM functions to fire according to beats, may be useful for sketches that involves musics
- \_webmidi.js - added a library to connect to my music instruments, more to come!
- \_sketch.js - the main file to put everything together

- [ ] A main counter or value for elements to animate according to, previously I did a few sketches that could loop perfectly using Perlin Noise. Will do up a post that explains better with resources attach to it.

```

# src/content/posts/231202-nice_ai_art.md

```md
---
title: Nice AI Art
description: Nice beautiful AI Art
pubDate: 231202 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: false

---

![testest.jpg](/assets/test.jpg)

_An image of Kuala Lumpur in the 1930s depicted as a low-polygon 3D model scene._
```

# src/content/posts/231126-mvp of blog and portfolio.md

```md
---
title: MVP of Blog & Portfolio
description: Get down to the Most Important Stuff for Blog and Portfolio
pubDate: 231202 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true
---
Helloworld
```

# src/pages/posts/tags/[tag].astro

```astro
---
// import { getCollection, CollectionEntry } from "astro:content";
// component imports
// import MainLayout from "../../layouts/MainLayout.astro";
// import PostCard from "../../components/PostCard.astro";
// utils
// import { slugify, formatBlogPosts } from "../../js/utils";
/* export async function getStaticPaths() {
  return [
    {
      params: { category: slugify("Reference Docs") },
      props: { name: "Reference Docs" },
    },
    {
      params: { category: slugify("General") },
      props: { name: "General" },
    },
    {
      params: { category: slugify("CSS") },
      props: { name: "CSS" },
    },
    {
      params: { category: slugify("Astro") },
      props: { name: "Astro" },
    },
  ];
}
const { category } = Astro.params;
const { name } = Astro.props;
const allPosts = await getCollection("blog");
const formattedPosts: CollectionEntry<"blog">[] = formatBlogPosts(allPosts);
const catPosts = formattedPosts.filter(
  (post) => slugify(post.data.category) === category
); */
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
// import Layout from '@layouts/Default.astro';
// import BlogList from '@components/blog/BlogList.astro';
// import { Button } from '@eliancodes/brutal-ui';

export async function getStaticPaths() {
  const allPosts = await getCollection("posts").then((collection) =>
    collection.reverse()
  );

  console.log(allPosts);

  const tags: string[] = [];

  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });

  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter((post) =>
          post.data.tags.map((tag) => tag.toLowerCase()).includes(tag)
        ),
      },
    };
  });
}

interface Props {
  tag: string;
  blogposts: CollectionEntry<"posts">[];
}

const { tag, blogposts } = Astro.props;
---

<!-- <MainLayout title={name}>
  <section class="container" aria-label={`Posts about ${name}`}>
    <h1 class="h1">Posts about <span>{name}</span></h1>
    <div class="post-container">
      {
        catPosts.map((post) => (
          <PostCard data={post.data} url={post.slug} tagType="h2" />
        ))
      }
    </div>
  </section>
</MainLayout>
 -->
<Layout>
  <!-- 
  title={`Blog: ${tag}`}
  description={`Brutal Blog | All posts tagged with ${tag}`}
  pageTitle={`Brutal Blog | Blogposts tagged with ${tag}`}
   -->
  <main>
    <div>
      <!-- <Button href="/blog/">&larr; Back to blog</Button> -->
    </div>
    <!-- <BlogList posts={blogposts} /> -->
    <pre>posts={blogposts}</pre>
  </main>
</Layout>

```

# src/pages/posts/_tags/index.astro

```astro
---
import { getCollection } from "astro:content";
import BaseLayout from "@/layouts/BaseLayout.astro";
const allPosts = await getCollection("posts");
const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
const sortedTags = tags.sort((a, b) => a.localeCompare(b)); // Sort tags alphabetically

const pageTitle = "Tag Index";
---

<BaseLayout pageTitle={pageTitle}>
  <section>
    <div class="px-8 md:px-12 mx-auto max-w-7xl py-12 lg:px-32">
      <ol role="list" class="flex flex-col space-y-2 mt-6">
        {sortedTags.map((tag) => (
          <li >
            <a class="text-4xl tracking-tight text-balance font-medium font-display text-black md:text-6xl hover:text-blue-500" href={`/tags/${tag}`}>{tag}</a>
          </li>
        ))}
      </ol>
    </div>
  </section>
</BaseLayout>

```

# src/pages/posts/_tags/[tag].astro

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import EntriesOne from "@/components/entries/EntriesOne.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const allPosts = await getCollection("posts");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.data.tags).flat()),
  ];

  return uniqueTags.map((tag) => {
    // Filter posts by tag
    const filteredPosts = allPosts.filter((post) =>
      post.data.tags.includes(tag)
    );
    // Sort filtered posts by date in descending order
    const sortedPosts = filteredPosts.sort(
      (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
    );

    return {
      params: { tag },
      props: { posts: sortedPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---

<BaseLayout pageTitle={tag}>
  <section>
    <div
      class="px-8 py-12 md:px-12 mx-auto lg:pb-24 max-w-7xl lg:px-32 lg:pt-48"
    >
      <!-- Content omitted for brevity -->
      <ul
        class="grid grid-cols-1 mt-12 gap-1 gap-y-24 lg:grid-cols-3 sm:grid-cols-2"
      >
        {
          posts.map((post) => (
            <EntriesOne
              url={"/posts/" + post.slug}
              title={post.data.title}
              description={post.data.description}
              alt={post.data.title}
              pubDate={post.data.pubDate.toString().slice(0, 10)}
              author={post.data.author}
              image={post.data.image.url}
              tags={post.data.tags}
            />
          ))
        }
      </ul>
    </div>
  </section>
</BaseLayout>

```

# src/content/posts/_draft/_markdown-style-guide.md

```md
---
title: "Markdown Style Guide"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
author: jy
pubDate: 220701  
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
author: jyzh 

image:

  url: ""

  alt: "#"

tags: ["Frameworks", "Development"]
image: {
  src: "/images/post-2.jpg",
  alt: "A picture of a coder looking at markdown",
}
draft: true
category: General
---

---
- Use I instead of We
- Avoid using too much jargons
- Add links to websites where you see fits; use raw-html (a:href open in new tab)
- 

---

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

**BOLD**
*Italic*
<ins>underline</ins>
<u>underline</u>
~~strikethrough~~

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/placeholder-social.png)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Code Blocks

\`\`\`html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
\`\`\`

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

```

# src/content/posts/_draft/230831-atomic_habit.md

```md
---
title: "Mastering the Art of Habit Formation: A Deep Dive into Atomic Habits"
description: Drawing insights from James Clear's "Atomic Habits". Learn practical tips and real-world applications to improve your habits and your life.
pubDate: 230831 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true
---

Habit formation is a topic that has fascinated psychologists, self-help gurus, and everyday people alike. The power of habits to shape our lives is undeniable, but how do we harness this power effectively? This blog post aims to provide a comprehensive guide to understanding and mastering habits, drawing insights from James Clear's book "Atomic Habits" and its various video summaries.


## The Science of Habits

### The Four Laws of Habit Formation

James Clear outlines four laws for building good habits and breaking bad ones:

1.  **Make it Obvious**: Use cues to trigger habits.
2.  **Make it Attractive**: Make the habit appealing.
3.  **Make it Easy**: Reduce friction and start small.
4.  **Make it Satisfying**: Make the habit rewarding.

### Immediate vs. Ultimate Rewards

One of the most significant challenges in habit formation is the misalignment of immediate and ultimate rewards. Bad habits often offer immediate gratification but have long-term costs. Good habits usually require immediate effort but offer long-term benefits.

## Practical Tips for Mastering Habits

### Environment Design
Your environment plays a crucial role in habit formation. For instance, placing workout gear in a visible location can serve as a cue to exercise. Similarly, keeping healthy snacks within reach can promote better eating habits.

### The Two-Minute Rule

The "Two-Minute Rule" suggests scaling down a habit to its most basic form, making it easy to start and stick to. For example, if you want to read more, start by reading just one page a day.

### Master the Entry Points

Focus on the initial steps that lead to larger routines. For example, putting on workout clothes can be the entry point to a gym session. Mastering these entry points can set the stage for more significant behavioral changes.

## Conclusion

Habit formation is not just about willpower; it's about understanding the psychology behind our actions and setting up our environment to make good habits inevitable and bad habits difficult. By applying the principles outlined in "Atomic Habits," you can take control of your behaviors and, by extension, your life.
```

# src/content/posts/_draft/230821-UXUI_kiss.md

```md
---
title: "UXUI Design: KISS"
description: "Dive into UI/UX design with the world's shortest course! Learn user flow, wireframing, design systems, and more in just minutes. 🎨 #webdesign #quickguide"
pubDate: 230821 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true
---

## Step 1: User Flow - Mapping the Journey

So, the first thing is all about understanding what the user wants to do on your site. It's like drawing a map for their journey. Pretty neat, right?

tip - User Flow Diagram

## Step 2: Wireframing - Sketching the Blueprint

Next up, we sketch out the pages or screens. It's like building a house; you need a blueprint first. Tools like Figma or Balsamiq? They're your best friends here.

Using the diagram to point out where it user would flow. For UX, keep it simple stupid.

## Step 3: Design System - Picking the Paint and Wallpaper

Colors, fonts, buttons - this step is all about making things look good and consistent. I played around with real-time colors, and it's a game-changer!

Use RealtimeColours, fonts checker*

## Step 4: Actual Designing - Time to Build

Now, this is where the fun begins. You've got all your pieces, and it's time to put them together. Keep it simple, make it look good, and don't be afraid to try different things.
+ Visual hierachy
+ contrast
+ balance
+ consistency
+ simplicity
+ feedback

## Bonus Step: Illustrations and Visuals - Adding the Decor

Want to add some flair? Graphics and illustrations are the way to go. I found tools like Figma and Spline super handy for this.

Also avoid Lorem Ipsum to make things more finished.

## Conclusion - My Thoughts

I've got to say, this video is a goldmine for anyone looking to dive into UI/UX design without getting lost in hours of tutorials. It's quick, it's fun, and it's packed with practical tips.

<iframe src="https://www.youtube.com/embed/wIuVvCuiJhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

So, that's my take on this fantastic video. If you're into design, give it a watch. And hey, if you have any thoughts or want to share your favorite design resources, drop a comment below! Happy designing! 🎨

---
source: https://www.youtube.com/watch?v=wIuVvCuiJhU
```

# src/content/posts/_draft/230723-premature_optimization.md

```md
---
title: "Premature Optimization: A Developer's Guide"
description: Based on the insightful video by CodeAesthetic, discusses the balance between performance, velocity, and adaptability in code optimization.
pubDate: 230723 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

Premature optimization is often considered the root of all evil in programming. But when should you actually optimize your code? This blog post, based on the insightful video by CodeAesthetic, discusses the balance between performance, velocity, and adaptability in code optimization.

## The Trade-off Triangle

When it comes to code optimization, there's a trade-off triangle between velocity (how quickly you add new features), adaptability (how well the system can change to new requirements), and performance.

Focusing on velocity means hacking together something as fast as possible, often creating technical debt that will slow you down in the long run. On the other hand, focusing on adaptability means writing code in a way that enables changes as new requirements come in. This could involve creating reusable, extensible components and beautifully crafted interfaces. However, if you make things too adaptable, you also hurt velocity and performance.

## Performance: Not the First Problem

Performance is a problem, but it's not usually the first problem. It's important to be deliberate about which way you're leaning in the trade-off triangle. For instance, a feature-complete game pushing its final ship date would focus on performance, while a game earlier in development might focus on getting more features out quickly or building up an extensible system.

## The Cost of Premature Optimization

Premature optimization usually occurs for micro performance. This is typically where someone comments in a code review that you should do X instead of Y because X is faster than Y. But computers are really fast, and getting to the solution of a real-world problem faster is usually better than solving the problem slower with faster code.

## The Importance of Measuring

The key to proper optimization is measuring. Your assumptions of what will make things faster can actually make things slower. Data structure selection is by far the most important aspect of performance issues, as choosing the right data structure can give dramatically better results over the wrong one.

## Profiling: Finding the Hot Spots

When dealing with performance issues, a profiler can tell you what the hot spots of your code are. It can point out the functions that are the most expensive. Sometimes, when things are slow, it's just one silly thing slowing everything down.

## Conclusion

When you optimize, first have a real performance problem, then measure it. Try to make 80% moves by swapping data structures or moving to a well-known faster algorithm. Profile and find hot spots. Then, worst case, start thinking about what your code is doing under the hood.

## Further

For more in-depth discussion on macro optimization strategies, check out the deleted scenes on CodeAesthetic's Patreon.

## Keywords

- Premature Optimization
- Code Optimization
- Performance
- Velocity
- Adaptability
- Trade-off Triangle
- Micro Performance
- Measuring
- Data Structure Selection
- Profiling
- Hot Spots

---
source: https://www.youtube.com/watch?v=tKbV6BpH-C8
```

# src/content/posts/_draft/230718-form_data_to_google_sheet.md

```md
---
title: Creating a Simple Form to Google Sheets Database
description: Looking for an efficient, easy-to-implement way to capture and store this data, consider using Google Sheets as a makeshift database.
pubDate: 230718 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

## A Step-by-Step Guide subtitle: Learn how to leverage Google Sheets as a makeshift database for capturing form data on your website, while also considering the critical aspects of data security.

Web forms are the gateways that allow your users to interact with you by providing information, inquiries, feedback, and more. As a website owner, this user-generated data is of utmost importance. If you are looking for an efficient, easy-to-implement way to capture and store this data, consider using Google Sheets as a makeshift database.

In this article, we guide you through the steps of setting up a form-to-Google Sheets data pipeline, with an added emphasis on handling the associated security aspects.

## Creating a Google Cloud Project

Your first step towards implementing a Google Sheets database involves creating a Google Cloud Project.

1.  **Navigate to the Google Cloud Console**: Head over to the <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a> to start your project.
2.  **Create a New Project**: Once there, you can create a new project by clicking on "Select a project" at the top of the page, followed by "New Project" on the subsequent page.
3.  **Fill in the Details**: You'll then be asked to fill in the necessary details such as the project name, billing information, and others.

You may also opt to use an existing project if it fits the requirements of your current data capturing needs.

## Enabling Google Sheets API and Generating Credentials

With your project selected, the next step is to enable the Google Sheets API and generate the necessary credentials:

1.  **Search for Google Sheets API**: Enter "Google Sheets API" in the search bar at the top of the Google Cloud Console.
2.  **Enable the API**: Click on "Enable" to activate the Google Sheets API for your project.
3.  **Navigate to Credentials**: Go to the "Credentials" option in the APIs & Services menu.
4.  **Create Service Account**: Click on "+ CREATE CREDENTIALS" and choose "Service account". Follow the prompts, and at the end, you'll have a JSON file downloaded to your machine. This file contains the credentials your application will use to authenticate itself with Google Sheets API.

Remember to note the generated email address for the service account. It usually follows the format: <ins>your-service-account@your-project.iam.gserviceaccount.com</ins>.

## Creating Google Sheets and Sharing with the Service Account

With the service account created and API enabled, your next move is to set up the Google Sheet that will act as your database:

1.  **Create a New Google Sheet**: Create a new Google Sheets document. You may also use an existing one if it suits your needs.
2.  **Share with Service Account**: Share this sheet with the service account's email address, granting "Editor" permissions. This allows your application to make changes to the Sheet via the Google Sheets API.

You will also need to extract the Google Sheets ID from the URL. It follows this pattern: <ins>https://docs.google.com/spreadsheets/d/{spreadsheetID}</ins>.

## Setting up a Google Apps Script Project

The next step in the process requires a bit of coding knowledge. You'll need to set up a Google Apps Script project to handle the incoming form data:

1.  **Navigate to Google Apps Script**: Go to <ins>https://script.google.com/</ins> to create a new Apps Script project.
2.  **Create New Script**: Here, you'll write and deploy a script that handles incoming POST requests and writes data to your Google Sheets document.

## Granting Permissions

When you run the Apps Script or deploy your web application for the first time, it will ask for certain permissions. Granting these permissions allows the application to make changes to the Google Sheets document on your behalf.

## Sharing the Spreadsheet ID and Service Account JSON

The final setup step involves sharing the service account JSON file and the spreadsheet ID with your development team or the person in charge of the form-to-database pipeline.

This should be done securely to prevent unauthorized access to your Google Sheets database.

# A Focus on Security

Handling user data carries a responsibility to protect their privacy and security. Always ensure to handle sensitive data carefully, adhering to best practices for data storage and transmission.

While Google Sheets can serve as a basic database for small applications, it is not designed to be a full-fledged, secure database solution. It does not offer the same level of security or scalability that dedicated databases like Firebase, MySQL, or PostgreSQL provide. For applications with significant security or scalability requirements, consider utilizing these more robust solutions.

# Conclusion

Creating a form-to-Google Sheets data pipeline is a convenient solution for small-scale data collection needs. By following these steps, you can set up an efficient data capturing and storage mechanism for your website.

Remember, the security of your users' data should always be your top priority. The approach outlined in this article provides a basic level of security, but consider investing in more advanced database solutions for larger, more sensitive applications.

## Further Reading

- Detailed instructions on <ins>Google Sheets API</ins>
- More about <ins>Google Apps Script</ins>
- Understanding <ins>Google Cloud Service Accounts</ins>

## Keywords

- Google Cloud Project
- Google Sheets API
- Service Account
- Google Apps Script
- Data Security
- Google Sheets as a Database
```

# src/content/posts/_draft/230713-wordpress_conditional_tags copy.md

```md
---
title: "Importing Data from a CSV File: A Guide for WordPress Developers"
description: Learn how to import data from CSV files into WordPress and create/update posts and pages. Streamline your data import process as a web developer.
pubDate: 230713 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

As a web developer working with WordPress, you often encounter situations where you need to import a large amount of data into your website. One efficient and convenient method to accomplish this is by using a CSV (Comma-Separated Values) file. In this blog post, we will explore the process of importing data from a CSV file and creating/updating posts and pages in WordPress. This guide aims to provide valuable insights and practical steps for web developers who want to streamline their data import process.

## Understanding the CSV Format

Before diving into the import process, let's familiarize ourselves with the CSV format. A CSV file is a plain text file where each line represents a row of data, and the values within each row are separated by commas. The first row often contains the column headers, which correspond to the data fields in your WordPress posts or pages.

## Preparing the CSV File

To begin the import process, you need a well-structured CSV file that aligns with your desired post or page structure. Ensure that the column headers match the respective fields in WordPress, such as title, slug, content, excerpt, categories, tags, and more. Tools like Microsoft Excel or Google Sheets can assist in creating and organizing the CSV file.

## Establishing the Import Functionality

To import data from the CSV file, you will need to write a custom function or plugin within your WordPress development environment. This function should handle the parsing of the CSV file, mapping the data to the appropriate WordPress fields, and creating or updating posts/pages accordingly. The WordPress function `fgetcsv()` is particularly useful for reading and extracting data from the CSV file.

## Implementing the Data Import Process

1.  **Open the CSV File**: Use PHP's `fopen()` function to open the CSV file and establish a file handle for further operations.
2.  **Read the CSV Rows**: Utilize `fgetcsv()` to read each row of the CSV file, retrieving the data as an array.
3.  **Process Each Row**: Iterate through the CSV rows and extract the relevant data for creating/updating posts or pages. Validate and sanitize the data as necessary.
4.  **Create/Update Posts or Pages**: Use WordPress functions like `wp_insert_post()` or `wp_update_post()` to create new posts or update existing ones based on the data extracted from the CSV file. Make sure to map the data fields correctly to their respective WordPress counterparts (e.g., title, content, categories, etc.).
5.  **Handle Relationships and Meta Data**: If your posts or pages have relationships or additional meta data, such as featured images, custom taxonomies, or custom fields, ensure that you incorporate the necessary logic to handle these aspects during the import process.
6.  **Testing and Error Handling**: It's crucial to thoroughly test the data import functionality before performing a full-scale import. Handle potential errors gracefully and log any issues that arise for troubleshooting purposes.

## Conclusion

Importing data from a CSV file can significantly simplify the process of creating or updating posts and pages in WordPress. By understanding the CSV format, preparing the CSV file correctly, and implementing the data import functionality, web developers can save valuable time and effort when dealing with large amounts of content. Remember to validate and sanitize the data, handle relationships and meta data, and thoroughly test the import process to ensure a smooth and successful data import experience.
```

# src/content/posts/_draft/230711-wordpress_conditional_tags.md

```md
---
title: Understanding WordPress Conditional Tags
description: WordPress conditional tags enable developers to control the content flow based on specific conditions.
pubDate: 230711 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

## What are WordPress Conditional Tags?

Conditional tags are functions used in WordPress themes and plugins to change the content displayed on a particular page depending on what conditions that page matches. For instance, you might want to display something different on the home page than on category pages.

## Commonly Used WordPress Conditional Tags

Two of the commonly used conditional tags are `is_front_page()` and `is_home()`.

- `is_front_page()`: Checks if the front page is being displayed. This is usually true when the user navigates to the website root URL.
    
- `is_home()`: Checks if the blog posts index page is being displayed. This is typically true when the user navigates to the main blog listing page.
    

## Using `is_front_page()` and `is_home()`

You can use these tags in your theme files to determine what content to display. Here's a simple usage example:


\`\`\`
if (is_front_page() && is_home()) {
    // The front page is set to display the latest posts.
    // Display specific content for this scenario.
} elseif (is_front_page()) {
    // The front page is set to display a static page.
    // Display specific content for this scenario.
} elseif (is_home()) {
    // The blog posts index page is set to display a static page other than the front page.
    // Display specific content for this scenario.
}
\`\`\`

## The Difference Between `is_front_page()` and `is_home()`

In WordPress, you can set your front page to display either a static page or the latest posts. The settings can be found under Settings > Reading in the WordPress admin panel.

If you set "Your homepage displays" to "Your latest posts", then `is_front_page()` and `is_home()` will both return `true` when on the main URL of your website.

If you set "Your homepage displays" to "A static page", then:

- `is_front_page()` will return `true` on the static page you set to be the homepage.
- `is_home()` will return `true` on the page you set to be the blog posts index.

These conditional tags offer powerful tools for controlling what content is displayed on various parts of your WordPress site. They form the basis for creating dynamic and interactive themes that can cater to a wide range of design requirements.
```

# src/content/posts/_draft/230618-ga4_how_to_conversion.md

```md
---
title: How to Configure GA4 Goals and Conversions
description: A Short guide on how to configure GA4 "Goals" and conversion. Setting up custom events and how to view it.
pubDate: 230618 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

In Google Analytics 4 (GA4), the concept of 'goals' from Universal Analytics has been replaced with 'conversions'. This change in terminology reflects a shift in how we measure user success on our websites. Whether it's making a purchase, signing up for an account, or downloading an ebook, these actions can all be defined as conversions. But how do we set up these conversions in GA4? Let's dive in.

## Sending Events to Google Analytics 4
The first step in setting up conversions in GA4 is to send your event to GA4. An event could be anything that signifies user success on your website. For instance, if you have a contact form on your website, you might want to track form submissions as conversions. To do this, you need to send a 'form_submit' event to GA4.

The event you sent to GA4 may need to wait for 48 hours to show up. Once it does appears, you can mark it as a conversion by toggling the 'Mark as conversion' button.

## Creating a Custom Event
What if you want to track a page view as a conversion? For instance, you might want to track visits to a 'Thank You' page as conversions. In this case, you can create a custom event based on the 'page_view' event.

To create a custom event, go to the 'Create Event' section in GA4 and give your event a name. Then, set the event name to 'page\_view' and add a condition that the 'page\_location' contains 'thank you page'.

Once you've created your custom event, you need to wait for it to show up in your GA4 account. This can also take up to 48 hours. Once your custom event appears in your account, you can mark it as a conversion in the same way as before.

## Viewing Your Conversions
Once you've set up your conversions, you can view them in your GA4 reports. Under the 'Engagement' section, you'll find a 'Conversions' report that shows a graph of your conversions and a list of the conversions that have been counted.

You can also view your conversions in context by looking at other reports. For instance, in the 'User Acquisition' report, you can see where your users are coming from and how many of them are converting.

## Conclusion
Setting up conversions in GA4 involves sending events to GA4 and marking them as conversions. While this process requires some patience, it's crucial for measuring user success on your website. By tracking conversions, you can gain valuable insights into your users' behavior and make data-driven decisions to improve your website.

---

**source:** [How to Configure GA4 Goals and Conversions - MeasureSchool](https://www.youtube.com/watch?v=G-UWyCMnTsU)
```

# src/content/posts/_draft/230618-block_website_access_via_htpasswd.md

```md
---
title: Securing Your WordPress Staging Site with Basic Password Protection
description: A step-by-step guide to securing your staging WordPress site using .htaccess and .htpasswd files.
pubDate: 230618 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

## A step-by-step guide to securing your staging WordPress site using .htaccess and .htpasswd files.

As developers, we occasionally need to test our WordPress sites in a safe, isolated environment, known as a staging site. This post guides you through the process of adding basic password protection to your staging WordPress site using .htaccess and .htpasswd files.

## Creating the .htpasswd File

Start by generating an encrypted password using an online tool such as <[htpasswd Generator](https://www.htaccesstools.com/htpasswd-generator/). Then, create a new file named .htpasswd in a secure location on your server, ideally outside the web root directory. Add the following line to this file:

\`\`\`
username:encrypted_password
\`\`\`

Replace 'username' with your desired username and 'encrypted_password' with the generated encrypted password.

## Modifying the .htaccess File

Next, locate the .htaccess file in the root directory of your staging WordPress installation. If it doesn't exist, create a new one. Add the following code:

apacheCopy code

\`\`\`
AuthType Basic 
AuthName "Restricted Access" 
AuthUserFile /path/to/.htpasswd 
Require valid-user
\`\`\`

Replace '/path/to/.htpasswd' with the actual path to your .htpasswd file. Save the changes.

Your staging WordPress website should now prompt you for a username and password. While this method provides basic password protection, it may not be the most secure option. For stronger security measures, consider using additional authentication methods or plugins specifically designed for WordPress staging environments.

## Improving Security with Bcrypt

If you prefer to use bcrypt to hash your passwords, you can generate a bcrypt hashed password using the htpasswd command-line utility or an online tool.

Remember to replace '/path/to/.htpasswd' with the actual path to your .htpasswd file on your server, ensuring it's not publicly accessible.

## Blocking Search Engines with Robots.txt

To prevent search engines from accessing your WordPress site, create a robots.txt file with the following content:

\`\`\`
User-agent: * Disallow: /
\`\`\`

Upload this file to the root directory of your WordPress site. While this blocks most search engines, it does not guarantee complete privacy or security.

# Conclusion

By following these steps, you can secure your WordPress staging site with basic password protection and prevent search engines from accessing it. However, remember to consider the implications on usability and explore additional security measures for comprehensive protection.

## Further Reading

- More on <u>.htaccess</u>
- Understanding <u>.htpasswd</u>
- Exploring <u>WordPress Staging Environment</u>

## Keywords

- WordPress Staging
- .htaccess
- .htpasswd
- Password Protection
- Bcrypt
- Robots.txt
```

# src/content/posts/_draft/230615-manual_bulk_webp_image_for_wordpress.md

```md
---
title: Streamlining .WebP Image Conversion & Serving for WordPress Websites
description: Do you feel restricted by webp plugins? Discover a do-it-yourself method to incorporate .webp format into your site.
pubDate: 230615 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

Do you feel restricted by webp plugins? Discover a do-it-yourself method to incorporate .webp format into your site.

Have you ever felt frustrated by the limitations of webp plugins? If so, you're not alone. To overcome this, I've figured out a straightforward way to install the .webp format manually.

Follow these steps to convert all .jpg/.png images into .webp format and get your WordPress site up to speed:

1. Use FFmpeg: With this software, convert all your .jpg and .png images into the .webp format.

2. Utilise Bash Scripts: Craft a .sh file to locate each image and convert them in bulk.

3. Test the Accessibility: Check if both image formats (.jpg/.webp) can be accessed via URL.

4. Modify .htaccess: Amend the following in your .htaccess file:

Your .htaccess / Apache may still be a mystery if you haven't delved deeper than simple rewrites for WordPress and redirects. But worry not, because in this case, we're going to serve .webp if the .jpg|.png|.gif file has .webp alongside it.

Hence, when the website is loading the image, it will intercept and load the image/webp instead. The code snippet below accomplishes this:


1. using ffmpeg to convert all .jpg/.png into .webp
2. use bash .sh to find each image, and convert in bulk
3. Test if both image format (.jpg/.webp) are accessible via URL
4. .htaccess add the following 

## Onto WordPress

.htaccess / apache is still an unknown to me as I have never dive deeper than simple rewrite for WordPress and redirect.

In this case, we will have the server to serve .webp if the .jpg|.png|.gif file have .webp next to it.

So when the website is loading the image, it will be intecept and load the *image/webp* instead.


\`\`\`
<IfModule mod_rewrite.c>
RewriteEngine On

# Extract the subdirectory from REQUEST_URI
# Took me hours to solve this as the path misalign as my wordpress root is on "/localhost/wordpress", and %{DOCUMENT_ROOT} does not includes the subdirectory
RewriteCond %{REQUEST_URI} ^(/[^/]+/)
RewriteRule ^ - [E=SUBDIR:%1]

# Check if browser supports WebP images
RewriteCond %{HTTP_ACCEPT} image/webp

# Check if WebP replacement image exists
RewriteCond %{DOCUMENT_ROOT}%{ENV:SUBDIR}$1.webp -f

# Serve WebP image instead
RewriteRule (.+)\.(jpe?g|png|gif)$ $1.webp [T=image/webp,E=REQUEST_image]
</IfModule>

<IfModule mod_headers.c>
# Vary: Accept for all the requests to jpeg, png and gif
Header append Vary Accept env=REQUEST_image
</IfModule>

<IfModule mod_mime.c>
AddType image/webp .webp
</IfModule>
\`\`\`
Source: [WebP images with htaccess](https://github.com/vincentorback/WebP-images-with-htaccess)
```

# src/content/posts/_draft/230614-optimizing_google_fonts.md

```md
---
title: Optimizing Google Fonts for Speed and Security
description: Google Fonts is an amazing resource that many web developers rely on for their projects
pubDate: 230614 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

Google Fonts is an amazing resource that many web developers rely on for their projects. However, there are speed and security issues associated with using Google Fonts directly. In this post, we will explore these issues and provide a solution on how to write your own custom font-face declaration for better performance and security.

## The Problem with Google Fonts
The convenience of Google Fonts comes with two main issues:

1. **Speed**

    When you use Google Fonts, you are not optimizing the speed at which your fonts load. This can affect the performance of your website, especially if you are using multiple fonts.

2. **Privacy and Security**

    Google Fonts has faced legal challenges due to privacy and security concerns. Using Google Fonts requires you to comply with certain legal requirements, which can be a hassle.

## The Solution: Custom Font-Face Declaration
To address these issues, you can set up your own font-face that you load up for users. This process involves downloading a font, declaring a font-face, and then using the font in your CSS. Here's how you can do it:

1. **Download a Font**

    You can download a font from a site like Font Share, which offers free fonts. Make sure to download different versions of the font (e.g., regular, bold, italic) in various formats (e.g., woff2, woff, ttf) for maximum compatibility.

2. **Declare a Font-Face**
  
    In your CSS, you can declare a font-face. This involves specifying the font family name, the source (src) of the font files, the font style, and the font weight. You can also provide a list of sources as a fallback stack, starting with the most preferred format.

3. **Use the Font**
  
    Once you've declared the font-face, you can use the font in your CSS by specifying the font family.

## Enhancing the Solution: Local Fonts and Variable Fonts
You can further enhance this solution in two ways:

1. **Local Fonts**

    You can declare a local font file so that the browser will use whatever's on the user's system first and then only default to what you're uploading if they don't have it on their system. This can significantly improve the speed at which your fonts load.

2. **Variable Fonts**

    Variable fonts are a more modern way to use fonts. They allow you to use a single font file for multiple variations, which can reduce the number of fonts that need to be downloaded.

## Conclusion

While Google Fonts is a convenient resource, it's not always the best solution for every project. By setting up your own font-face, you can improve the speed and security of your website. Plus, you can provide a better user experience by using local fonts and variable fonts.
```

# src/content/posts/_draft/230609-figma_crash_course.md

```md
---
title: "Figma Crash Course: Unlocking Core Features"
description: A deeper dive into Figma, one year on - exploring its fundamental attributes.
pubDate: 230609 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---


```

# src/content/posts/_draft/230606-personal_website_progress.md

```md
---
title: Personal Website Progress 2023
description: Took me long to get to this stage, over-complicate task and stage fright procrastinate. At least its up now.
pubDate: 230606 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

## The Journey of Refinement: Months Spent in Streamlining

/blog was previously swamped with an ever-growing list of aspirational projects, causing it to lose its original focus. The constant addition of new features only served to increase the clutter, rather than enhance the user experience.

This epiphany led me to partition the project into distinct folders or platforms. Such a decision was a breath of fresh air, lifting a considerable burden off my shoulders. It solved the overwhelming task of managing multiple projects co-existing in one space.

My p5js sketches found a new home on the dedicated editor provided on the p5js.org website. I migrated all my experimental work to Stackblitz, effectively creating an additional repository, namely /exp2.

The restructure led to a more organized approach:

- /blog and /portfolio are now partners in showcasing my work.
- /exp is dedicated to experimental designs and standards.
- /p5js solely contains the sketches from editor.p5js.org.

This well-defined division not only aids in better organization but also provides an enhanced user experience by maintaining specific focus areas. By investing time into decluttering, I've managed to unlock the full potential of tools such as Figma, a journey I look forward to sharing with you.
```

# src/content/posts/_draft/221215-disable_right_click.md

```md
---
title: Disabling Right-Click on Your Website
description: Learn how to prevent the right-click action on your website.
pubDate: 221215 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]

draft: true
---

Disabling right-click on your website can be achieved with a simple JavaScript code snippet. By intercepting the right-click event, you can stop it from triggering the default browser context menu. Let's look at how this can be done:

\`\`\`
<script>
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
}, false);
</script>
\`\`\`

This snippet of code effectively bars the default right-click menu from popping up when a user right-clicks anywhere on your website. However, it's important to note that this method isn't entirely foolproof - certain users may still find ways to access the menu via alternative techniques.

Moreover, some users might find this restriction annoying or frustrating, which could potentially have a negative effect on their experience with your site. Therefore, it's crucial to weigh these potential issues against the benefits of implementing such a method.

## How to Disable Right-Click on Images Specifically?

To disable right-clicking solely on images, you can slightly modify the previous code snippet:

\`\`\`
<script>
document.addEventListener("contextmenu", function(event){
    if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault();
    }
}, false);
</script>
\`\`\`

This particular code will prevent the context menu from appearing when a user right-clicks on any image element on your website, while allowing it for the other elements. Similar caveats apply to this method as well, so be mindful of the potential user experience implications.
```

# src/content/posts/_draft/221212-how_should_i_start_my_blog.md

```md
---
title: "Embarking on Your Blogging Journey: A Starter Guide"
description: Unraveling the complexity of launching a blog.
pubDate: 221212 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]

draft: true

---

Starting a blog can initially appear daunting, but with a clear step-by-step guide, you can navigate the process with confidence. Here's a roadmap to set you on the right path:

1. **Select a Blogging Platform**
    <br>
    There's an array of blogging platforms available, such as WordPress, Blogger, and Squarespace. Each platform comes with unique features and capabilities - select the one that aligns best with your needs and preferences.

2. **Initiate Your Blog**
    <br>
    After finalizing your platform, kickstart your blog by creating an account and following the provided instructions. This typically includes choosing a blog name, a design template, and deciding whether to use a custom domain name.

3. **Begin Publishing Content**
    <br>
    With your blog up and running, it's time to start publishing content. This could range from creating original blog posts or repurposing existing content from other sources. Always strive for high-quality, engaging, and informative content that resonates with your audience.

4. **Promote Your Blog**
    <br>
    Harness the power of social media and other platforms to share your content. Engage with your audience through comments and feedback. These strategies not only attract readers but also foster loyalty, contributing to the growth of your blog.

5. **Monitor and Analyze Performance**
    <br>
    Leverage tools and analytics provided by your blogging platform to monitor and understand your blog's performance. Gaining insights into what's working and what needs improvement can be a game-changer for your blogging journey.

## A Dose of Inspiration: Blog Names for Web Development, Mindfulness, and Self-awareness

If your blog centers around web development, mindfulness, and self-awareness, here are some name suggestions to get the ideas flowing:

- The Zen Developer
- The Conscious Coder
- The Mindful Marketer
- Code in Calm
- The Serene Software Engineer
- The Tranquil Tech Guru
- The Web Wanderer
- Mindful of the Matrix
- The Inner Web Explorer
- The Journeying JavaScripter

These proposed names embody elements of both mindfulness and web development, designed to appeal to those interested in personal growth and technology. Each option is distinctive and memorable, encapsulating the fusion of tranquility and technological expertise.
```

# src/content/posts/_draft/_template/blog_template.md

```md
---
title: BlogTemplateTitle
description: BlogTemplateDescription
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---

```

# src/content/posts/_draft/_getstarted/Unlocking the World of Shaders with P5.js - A Beginner's Guide.md

```md
---
title: "Unlocking the World of Shaders with P5.js: A Beginner's Guide"
description: What exactly are shaders, and how can one approach them, especially using a friendly tool like P5.js
pubDate: 231210 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: false

---
## Introduction: The Mystical World of Shaders

In the realm of digital art and game development, shaders are often mentioned with a mix of awe and mystery. But what exactly are shaders, and how can one approach them, especially using a friendly tool like P5.js? This blog aims to demystify shaders and provide a roadmap for beginners eager to explore this fascinating aspect of creative coding.

## Understanding Shaders: The Basics

### Shaders: The Digital Paintbrush

Shaders are small programs written in a specific shading language, such as GLSL (OpenGL Shading Language). They run on the GPU (Graphics Processing Unit) and determine how pixels on the screen are rendered. In simple terms, shaders are the tools that tell your computer how to display graphics, creating effects ranging from simple color changes to complex motion graphics.

## Approaching Shaders with P5.js

### Why P5.js?
P5.js, a JavaScript library, is an excellent gateway into the world of shaders. It's designed for artists and beginners, making it more accessible than other programming environments. P5.js simplifies the implementation of shaders, allowing you to focus on creativity rather than getting bogged down by technical details.

There are other library such as pixi.js which capable of handling shaders, but it geared towards developers well-versed in programming, offering a fast and flexible 2D WebGL renderer suitable for developing rich, interactive graphics and games.
## Key Concepts in Shaders

### 1. Vertex and Fragment Shaders
- **Vertex Shaders:** Determine the position of vertices in 3D space.
- **Fragment Shaders:** Also known as pixel shaders, they define the color, texture, and depth of pixels.
### 2. GLSL (OpenGL Shading Language)
The programming language used to write shaders, offering a wide range of functions for mathematical and graphical operations.
### 3. Uniforms, Varyings, and Attributes
These are types of variables in GLSL, each serving different purposes in shader programming.

## A Glossary for the Shader Novice

1. **GPU (Graphics Processing Unit):** 
   Hardware that executes rendering, calculation, and processing of graphics.
2. **Rendering:** 
   The process of generating an image from a model using computer programs.
3. **Texture:** 
   A bitmap image applied to the surface in 3D graphics.
4. **Coordinate System:** 
   The system in GLSL that helps in positioning and transforming vertices.
5. **Fragment:** 
   A term used in fragment shaders, referring to the data needed to render a single pixel.
6. **WebGL:** 
   A JavaScript API for rendering 3D graphics within any compatible web browser without the use of plug-ins.

## Practical Steps to Start with Shaders in P5.js

1. **Setup P5.js Environment:** 
   Ensure you have the P5.js library set up in your coding environment.
2. **Understand Basic Shapes and Colors:** 
   Start with simple P5.js sketches to get a feel for drawing and coloring.
3. **Introduction to GLSL:** 
   Learn the basics of GLSL, focusing on syntax and basic constructs.
4. **Experiment with Simple Shaders:** 
   Start by creating simple fragment shaders to change colors or textures.
5. **Progress to More Complex Shaders:** 
   Gradually move to more complex shaders involving lighting, texture mapping, and other effects.
6. **Explore and Experiment:** 
   The key to mastering shaders is experimentation. Play around with code, break things, and learn from your mistakes.

## Next: Your Journey into Shaders Begins

Shaders are a blend of art and science, requiring both creative vision and technical skills. With P5.js, you have a user-friendly tool at your fingertips to start this exciting journey. Remember, the world of shaders is vast and complex, but with patience and practice, you can unlock its full potential. 

For more you can give these video a watch first.

[![An introduction to Shader Art Coding](http://img.youtube.com/vi/f4s1h2YETNY/0.jpg)](https://www.youtube.com/watch?v=f4s1h2YETNY "An introduction to Shader Art Coding")

[![# Introduction to shaders: Learn the basics!](http://img.youtube.com/vi/3mfvZ-mdtZQ/0.jpg)](https://www.youtube.com/watch?v=3mfvZ-mdtZQ "Introduction to shaders: Learn the basics!")


```

# src/content/posts/_draft/_sideprojects/What & Why Bursa Malaysia.md

```md
---
title: "Bursa Malaysia: 5-Minute Beginner's Guide"
description: A quick introduction to investing in Malaysia's stock market.
pubDate: 231210 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
## resources
- https://www.moomoo.com/us/learn/detail-guide-for-beginners-investing-in-malaysias-stock-market-116953-231135155
- https://howtofinancemoney.com/how-to-invest-in-stocks
- https://www.imoney.my/articles/how-to-start-trading-on-the-malaysian-stock-market
- https://kclau.com/investment/how-to-trade-stock-at-bursa-malaysia-investing-basic/

---

Everyone said investing is important, but I never found out what Bursa Malaysia actually is way later in life, and whenever it got mentioned its on a newspaper with picture of a building with lot of numbers. Here's is a crash course I which it would help me-from-the-past and anyone that come across this, to help explains the basics.

- **What Are Stocks?**
    - At its core, buying a stock means owning a part of a company. This piece of ownership can potentially grow in value over time.
- **Securities Beyond Stocks**
    - Bursa Malaysia is more than just stocks. It's a diverse marketplace for bonds, derivatives, and other investment vehicles.
- **Investment Benefits**  
    - Investing isn't just about wealth accumulation. It's a strategic move towards achieving financial independence and securing long-term goals.
- **Introduction to Bursa Malaysia?**
    - As Malaysia's primary stock exchange, Bursa Malaysia is a pivotal platform for both local and international investors.

- **Brief Introduction**: Start with what Bursa Malaysia is - the main stock exchange in Malaysia.
- **Importance**: Emphasize its role in the Malaysian economy and as a platform for investment.
#### **Bursa Malaysia Structure**
- **Main Market Insights**
    - The Main Market is the cornerstone of Bursa Malaysia, hosting well-established companies and offering robust trading options.
- **Emerging Opportunities in the ACE Market**
    - The ACE Market is a springboard for high-potential emerging companies, providing exciting opportunities for forward-looking investors.
- **SME Focus in the LEAP Market**
    - The LEAP Market caters specifically to SMEs, offering unique investment opportunities in this vital economic sector.
- **Participant Diversity**
    - The market is a melting pot of individual and institutional investors, each contributing to its dynamic nature.
#### **How Trading Works**
- **Trading Process Simplified**
    - Investors buy and sell stocks through brokers. You can place orders online or through a broker.
- **Trading Hours**
    - Bursa Malaysia operates from 9:00 AM to 5:00 PM, with a break from 12:30 PM to 2:30 PM.
- **Understanding Price Fluctuations**
    - Grasp how external factors influence stock prices, from market demand to company performance.
### Regulation and Investor Safety
- **Securities Commission Malaysia (SC)**
    - This is the statutory body responsible for regulating and systematically developing Malaysia's capital markets. The SC has comprehensive powers to enforce securities laws, ensuring that trading is conducted in a fair and orderly manner. They set rules for public listed companies, market participants, and protect investors.
- **Investor Protection**
    - Various measures are in place to safeguard investments and maintain market integrity.
    - As the stock exchange operator, Bursa Malaysia itself also plays a role in regulation. It ensures compliance with its own set of listing requirements and trading rules. This includes monitoring listed companies and market participants, and ensuring that they adhere to the standards set for fair and transparent trading practices.
#### **Kickstarting Your Investment Journey**
- **Opening an Account**
    - A straightforward guide to choosing a broker, navigating the registration process, and start with a small investment.
- **Leveraging Resources & Tools**
    - Utilize online resources like financial news, market analysis, and investment courses.
    - Essentially doing your own research (due diligences), before you put your money into the basket.
- **Risk Management Essentials**
	    - Understand your risk tolerance and diversify your portfolio to manage potential losses.
	    - Tips and strategies to understand and manage investment risks effectively.
#### **Conclusion**
- **Keep Learning**
    - Investing is a journey. Continue educating yourself and stay updated on market trends.
- **Start Small**
    - Begin with what you can afford to lose and gradually build your investment knowledge and portfolio.
- **The Importance of Understanding Bursa Malaysia**
	- All investors got to know this.
	- Knowing what is Bursa Malaysia is would be the great first step to build a solid investment knowledge. especially for a clueless Malaysian like me that living next to a stock market for decades.
- Additional resources or links for further learning.
	    - Crash Course in Investing
	    - Ray Dalio's Economic Machine
---

## Investments that you've done unknowingly
- EPF
- Everything you ever brought, yes, even toys for your babies

## Jargons
Understanding some basic jargon is crucial for beginners in the investment world, especially when dealing with stock exchanges like Bursa Malaysia. Here's a list of essential terms:

1. **Stock**: A share in the ownership of a company, representing a claim on part of the company's assets and earnings.
    
2. **Bond**: A fixed-income instrument representing a loan made by an investor to a borrower, typically corporate or governmental.
    
3. **Dividend**: A portion of a company's earnings distributed to shareholders.
    
4. **Bear Market**: A market condition where prices are falling or expected to fall, indicating pessimism.
    
5. **Bull Market**: Opposite of a bear market, where prices are rising or expected to rise, reflecting optimism.
    
6. **Portfolio**: A collection of investments held by an individual or institution.
    
7. **IPO (Initial Public Offering)**: The first sale of stock by a company to the public, transitioning from private to public status.
    
8. **Market Capitalization**: The total value of a company's outstanding shares of stock.
    
9. **Index**: A statistical measure of the changes in a portfolio of stocks representing a portion of the overall market.
    
10. **Broker**: An individual or firm that charges a fee or commission for executing buy and sell orders submitted by an investor.
    
11. **Trading Volume**: The number of shares or contracts traded in a security or market during a given period.
    
12. **Liquidity**: The degree to which an asset or security can be quickly bought or sold in the market without affecting its price.
    
13. **Margin Trading**: Borrowing money from a broker to purchase stock, using the investment as collateral.
    
14. **Diversification**: A risk management strategy that mixes a wide variety of investments within a portfolio.
    
15. **Derivative**: A financial security with a value that is reliant upon or derived from an underlying asset or group of assets.
    
16. **Blue Chip Stocks**: Shares in large, well-established companies known for their financial stability and reliability.
    
17. **Volatility**: The degree of variation in the price of a financial instrument over time, indicating the level of risk.
    
18. **Yield**: The income return on an investment, such as the interest or dividends received.
    
19. **Capital Gain**: The profit from the sale of a property or an investment.
    
20. **Order Book**: A list of buy and sell orders for a specific security or financial instrument, organized by price level.
```

# src/content/posts/_draft/_sideprojects/Simplify Subjects for my kids.md

```md
---
title: Simplify Subjects
description: How could we simplify and improves study guides for our kids?
pubDate: 0 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
- Open-source knowledge Hub
	- Get knowledgeable users to help improve and share their knowledge
	- How-to study with AI? How to complement studies with use of AI? 
	- Critical thinking on being aware why students are learning the subject in the first place.
- Writing, visuals, animations
- Generate content via AI
- Vet through the content to prevent misinformation/hallucination


```

# src/content/posts/_draft/_sideprojects/Malaysia's History Exploration.md

```md
---
title: Malaysia's History Exploration
description: Explore Malaysia's History via the power of AI
pubDate: 231210 
author: jyzh 
image:
  url: ""
  alt: "#"
tags: ["general", "webdev"]
draft: true

---
First time I found out about "Tok Janggut"
```

# src/content/posts/_draft/.obsidian/workspace.json

```json
{
  "main": {
    "id": "639aebcb874a93e3",
    "type": "split",
    "children": [
      {
        "id": "9b2a7bee416b2723",
        "type": "tabs",
        "children": [
          {
            "id": "fe7d4be85f07946f",
            "type": "leaf",
            "state": {
              "type": "markdown",
              "state": {
                "file": "230618-block_website_access_via_htpasswd.md",
                "mode": "source",
                "source": false
              }
            }
          }
        ]
      }
    ],
    "direction": "vertical"
  },
  "left": {
    "id": "664f0978310c0989",
    "type": "split",
    "children": [
      {
        "id": "09999f4d5350f8e3",
        "type": "tabs",
        "children": [
          {
            "id": "273b0a99988b3bee",
            "type": "leaf",
            "state": {
              "type": "file-explorer",
              "state": {
                "sortOrder": "byModifiedTime"
              }
            }
          },
          {
            "id": "093896b916719436",
            "type": "leaf",
            "state": {
              "type": "search",
              "state": {
                "query": "",
                "matchingCase": false,
                "explainSearch": false,
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical"
              }
            }
          },
          {
            "id": "03b2e5036aaba785",
            "type": "leaf",
            "state": {
              "type": "bookmarks",
              "state": {}
            }
          }
        ]
      }
    ],
    "direction": "horizontal",
    "width": 300
  },
  "right": {
    "id": "3bab325e14c18e89",
    "type": "split",
    "children": [
      {
        "id": "a261fba73e01a22b",
        "type": "tabs",
        "children": [
          {
            "id": "9d5f445c8871d280",
            "type": "leaf",
            "state": {
              "type": "backlink",
              "state": {
                "file": "230618-block_website_access_via_htpasswd.md",
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical",
                "showSearch": false,
                "searchQuery": "",
                "backlinkCollapsed": false,
                "unlinkedCollapsed": true
              }
            }
          },
          {
            "id": "15b064f17970b77d",
            "type": "leaf",
            "state": {
              "type": "outgoing-link",
              "state": {
                "file": "230618-block_website_access_via_htpasswd.md",
                "linksCollapsed": false,
                "unlinkedCollapsed": true
              }
            }
          },
          {
            "id": "2900b7f1acdd437e",
            "type": "leaf",
            "state": {
              "type": "tag",
              "state": {
                "sortOrder": "frequency",
                "useHierarchy": true
              }
            }
          },
          {
            "id": "bf54c2e536ca19e6",
            "type": "leaf",
            "state": {
              "type": "outline",
              "state": {
                "file": "230618-block_website_access_via_htpasswd.md"
              }
            }
          }
        ]
      }
    ],
    "direction": "horizontal",
    "width": 300,
    "collapsed": true
  },
  "left-ribbon": {
    "hiddenItems": {
      "switcher:Open quick switcher": false,
      "graph:Open graph view": false,
      "canvas:Create new canvas": false,
      "daily-notes:Open today's daily note": false,
      "templates:Insert template": false,
      "command-palette:Open command palette": false
    }
  },
  "active": "fe7d4be85f07946f",
  "lastOpenFiles": [
    "230821-UXUI_kiss.md",
    "231202-nice_ai_art.md",
    "The Malaysian's Favourite Clock.md",
    "231204-circles_goes_wiggling.md",
    "getstarted/Unlocking the World of Shaders with P5.js - A Beginner's Guide.md",
    "whatwhy/Understanding Malaysia's Structure and Functioning.md",
    "On capturing my processing work - ccapturejs.md",
    "Setup for website development.md",
    "sideprojects/What & Why Bursa Malaysia.md",
    "230713-wordpress_conditional_tags copy.md",
    "Setup for my webdev.md",
    "230606-personal_website_progress.md",
    "230718-form_data_to_google_sheet.md",
    "Building GPT for my EDM Music Journey.md",
    "sideprojects/Malaysia's History Exploration.md",
    "221212-how_should_i_start_my_blog.md",
    "getstarted",
    "sideprojects/Simplify Subjects for my kids.md",
    "sideprojects",
    "231126-mvp of blog and portfolio.md",
    "Setup for my generative art.md",
    "Setup for Blog & Portfolio.md",
    "sketch/231204-circles_goes_wiggling.mp4",
    "sketch/231204-Wigglewigglewiggle.mp4",
    "sketch/231204-circles_goes_wiggling.gif",
    "230618-block_website_access_via_htpasswd.md",
    "230618-ga4_how_to_conversion.md",
    "230711-wordpress_conditional_tags.md",
    "230723-premature_optimization.md",
    "230831-atomic_habit.md",
    "template/blog_template.md",
    "assets/DALL·E 2023-11-26 13.11.39 - Create an image of Kuala Lumpur in the 1930s depicted as a low-polygon 3D model scene. The artwork should show the evolution of the city with more mod.jpg",
    "sketch",
    "assets/test.jpg",
    "'./assets",
    "'.",
    "assets/testest.png",
    "assets/DALL·E 2023-11-26 13.11.39 - Create an image of Kuala Lumpur in the 1930s depicted as a low-polygon 3D model scene. The artwork should show the evolution of the city with more mod copy.jpg",
    "assets",
    "template"
  ]
}
```

# src/content/posts/_draft/.obsidian/templates.json

```json
{
  "folder": "template",
  "dateFormat": "YYMMDD",
  "timeFormat": "HHmm"
}
```

# src/content/posts/_draft/.obsidian/hotkeys.json

```json
{
  "insert-template": [
    {
      "modifiers": [
        "Alt"
      ],
      "key": "T"
    }
  ]
}
```

# src/content/posts/_draft/.obsidian/core-plugins.json

```json
[
  "file-explorer",
  "global-search",
  "switcher",
  "graph",
  "backlink",
  "canvas",
  "outgoing-link",
  "tag-pane",
  "page-preview",
  "daily-notes",
  "templates",
  "note-composer",
  "command-palette",
  "editor-status",
  "bookmarks",
  "outline",
  "word-count",
  "file-recovery"
]
```

# src/content/posts/_draft/.obsidian/core-plugins-migration.json

```json
{
  "file-explorer": true,
  "global-search": true,
  "switcher": true,
  "graph": true,
  "backlink": true,
  "canvas": true,
  "outgoing-link": true,
  "tag-pane": true,
  "properties": false,
  "page-preview": true,
  "daily-notes": true,
  "templates": true,
  "note-composer": true,
  "command-palette": true,
  "slash-command": false,
  "editor-status": true,
  "bookmarks": true,
  "markdown-importer": false,
  "zk-prefixer": false,
  "random-note": false,
  "outline": true,
  "word-count": true,
  "slides": false,
  "audio-recorder": false,
  "workspaces": false,
  "file-recovery": true,
  "publish": false,
  "sync": false
}
```

# src/content/posts/_draft/.obsidian/appearance.json

```json
{
  "accentColor": ""
}
```

# src/content/posts/_draft/.obsidian/app.json

```json
{
  "promptDelete": false
}
```

