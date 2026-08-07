import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nanxiichen.github.io",
  base: "/nanxi-homepage",
  output: "static",
  build: {
    format: "directory"
  }
});
