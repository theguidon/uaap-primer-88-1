import { TeamSection } from "~/components/team-section";
import data from "../assets/data/data.json";

export function Welcome() {
  return (
    <>
      {data.map((team) => (
        <TeamSection
          team={team.team}
          title={team.title}
          blurb={team.blurb}
          articleLink={team.articleLink}
          alignment="right"
          anchor={team.anchor}
        />
      ))}
    </>
  );
}
