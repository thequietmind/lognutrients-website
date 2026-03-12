import { createApp } from "@quietmind/mdx-docs";
import "@quietmind/mdx-docs/index.css";
import { pages } from "../config/pages.js";
import { site } from "../config/site.js";

createApp({
  pages,
  site,
  theme: {
    fontFamily: '"Fira Sans", -apple-system, system-ui, sans-serif',
    light: {
      palette: {
        primary: { main: "#0269d4" },
        secondary: { main: "#7611a6" },
        background: { default: "#ffffff", paper: "#a5d4f5" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#84d2f6" },
        secondary: { main: "#c561f6" },
        background: { default: "#121212", paper: "#191919" },
      },
    },
  },
});
