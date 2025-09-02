import { TeamSection } from "~/components/team-section";
import data from "../assets/data/data.json";

export function Welcome() {
  return (
    <>
      {data.map(({ team, title, article, articleLink, anchor }) => (
        <TeamSection
          key={anchor}
          team={team}
          title={title}
          blurb={article.split("\n\n")[0]} // get first paragraph of article
          articleLink={articleLink}
          alignment="right"
          anchor={anchor}
        />
      ))}
    </>
  );
}
