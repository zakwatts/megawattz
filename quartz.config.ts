import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 megwattz garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "zakwatts.github.io/megawattz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Poppins", // A geometric sans serif that's modern and friendly
        body: "JetBrains Mono", // Highly readable for text, modern and clean
        code: "JetBrains Mono", // A monospaced font with programming ligatures, modern and functional
      },
      colors: {
        lightMode: {
          light: "#F0F8FF", // A softer, airy light blue for background
          lightgray: "#B0E0E6", // Powder blue for light surfaces
          gray: "#5F9EA0", // Cadet blue for neutral tones
          darkgray: "#4682B4", // Steel blue for darker elements
          dark: "#0F4C75", // Dark sapphire for strong contrast
          secondary: "#FFD700", // Gold for vibrant secondary elements
          tertiary: "#FF6347", // Tomato for tertiary accents
          highlight: "rgba(255, 165, 0, 0.2)", // Orange with transparency for highlights
        },
        darkMode: {
          light: "#3A5BA0", // A darker shade of blue for light surfaces in dark mode
          lightgray: "#627DA3", // A muted blue, similar to powder blue but darker
          gray: "#2B3A67", // A deep blue, akin to cadet blue but suitable for dark mode
          darkgray: "#1E2A50", // A very dark blue, close to steel blue in darkness
          dark: "#162038", // A deep navy, similar to dark sapphire but for dark mode
          secondary: "#FFD700", // Keeping the gold for vibrant secondary elements
          tertiary: "#FFB347", // A darker shade of orange for tertiary accents, complementing the blue
          highlight: "rgba(255, 165, 0, 0.2)", // Keeping the orange with transparency for highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
