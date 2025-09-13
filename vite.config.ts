import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // dev base
  // base: "/uaap-88-primer-first-semester",
  // prod base
  base: "https://theguidon.com/uaap-88-primer-first-semester/",
});
