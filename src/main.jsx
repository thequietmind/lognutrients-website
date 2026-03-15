import { createApp } from "@quietmind/mdx-docs";
import "@quietmind/mdx-docs/index.css";
import { pages } from "../config/pages.js";
import { site } from "../config/site.js";
import { theme } from "../config/theme.js";

createApp({
  pages,
  site,
  theme,
});
