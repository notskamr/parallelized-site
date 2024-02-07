/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        print: { raw: "print" },
        noprint: { raw: "not print" },
      },
    },
    fontFamily: {
      mono: ["Fira Code", "monospace"],
      sans: ["Epilogue", "system-ui", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    function ({ addVariant }) {
      addVariant("supports-dynamic", "@supports (width: 1dvw)");
    },
  ],
};
