import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import EditorMessage from "~/pages/EditorMessage";
import Homepage from "../pages/Homepage";
import SideBar from "~/components/SideBar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <SideBar />
      <Homepage />
    </>
  );
}
