import { article } from "motion/react-client";
import { TeamSection } from "~/components/team-section";

const testData = {
  team: "Men’s Basketball",
  title: "RESTORING ORDER",
  blurb:
    "BUILT ON years of excellence, the Ateneo Men’s Basketball Team has long operated under a standard of winning. Despite the roadblock of missing the Final Four for the first time in 11 years, the Blue Eagles return with the same mission: to assert their place among the UAAP’s elite.",
  articleLink: "https://theguidon.com",
  anchor: "mbasketball",
};
export function Welcome() {
  return (
    <>
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        articleLink={testData.articleLink}
        alignment="right"
        anchor={testData.anchor}
      />
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        articleLink={testData.articleLink}
        alignment="left"
        anchor={testData.anchor + "2"}
      />
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        articleLink={testData.articleLink}
        alignment="right"
        anchor={testData.anchor + "3"}
      />
    </>
  );
}
