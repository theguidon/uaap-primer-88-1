import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:sport/:slug?", "pages/WriteUp.tsx"),
] satisfies RouteConfig;
