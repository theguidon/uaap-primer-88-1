import { TeamSection } from "~/components/team-section";
import data from "../assets/data/data.json";

export function Welcome() {
  return (
    <>
      {data.map(({ team, title, article, slug }, idx) => (
        <TeamSection
          key={slug}
          team={team}
          title={title}
          blurb={article.split("\n\n")[0]} // get first paragraph of article
          alignment={idx % 2 == 0 ? "right" : "left"}
          slug={slug}
        />
      ))}
    </>
  );
}
