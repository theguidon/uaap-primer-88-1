import { TeamSection } from "~/components/team-section";
import data from "../assets/data/data.json";

export function Welcome() {
  return (
    <>
      {Object.entries(data).map(([key, { team, title, article }], idx) => (
        <TeamSection
          key={key}
          team={team}
          title={title}
          blurb={article.split("\n\n")[0]} // get first paragraph of article
          alignment={idx % 2 == 0 ? "right" : "left"}
          slug={key}
        />
      ))}
    </>
  );
}
