import type { Route } from "./+types/write-up";
import data from "../assets/data/data.json";

const articleData: {
  [key: string]: {
    team: string;
    title: string;
    byline: string;
    article: string;
  };
} = data;
export async function loader({ params }: Route.LoaderArgs) {
  return articleData[params.slug];
}

// renders after the loader is done
export default function Component({ loaderData }: Route.ComponentProps) {
  const { team } = loaderData;
  return <h1>{team}</h1>;
}
