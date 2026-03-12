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
        background: { default: "#f9f4f4", paper: "#a5d4f5" },
      },
      components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: '#827867', // or leave unset to use default
            }
          }
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: '#424a37',
            }
          }
        }
      },
    },
    dark: {
      palette: {
        primary: { main: "#84d2f6" },
        secondary: { main: "#c561f6" },
        background: { default: "#121212", paper: "#191919" },
      },
      components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: '#453823', // or leave unset to use default
            }
          }
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: '#424a37',
            }
          }
        }
      },
    },
  },
});
