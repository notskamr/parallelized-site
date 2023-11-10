import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import remarkToc from "remark-toc";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [() => { return remarkToc({ skip: "Results" }) }],
  },
});
