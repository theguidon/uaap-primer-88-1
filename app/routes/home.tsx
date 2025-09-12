import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import EditorMessage from "~/pages/EditorMessage";
import Homepage from "../pages/Homepage";
import MainPage from "~/pages/MainPage";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The GUIDON UAAP 88th Season First Semester Primer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <MainPage />;
}
