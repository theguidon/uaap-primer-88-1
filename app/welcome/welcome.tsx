import { TeamSection } from "~/components/team-section";

const testData = {
  team: "Men’s Basketball",
  title: "RESTORING ORDER",
  blurb:
    "BUILT ON years of excellence, the Ateneo Men’s Basketball Team has long operated under a standard of winning. Despite the roadblock of missing the Final Four for the first time in 11 years, the Blue Eagles return with the same mission: to assert their place among the UAAP’s elite.",
  anchor: "mbasketball",
};
export function Welcome() {
  return (
    <>
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        alignment="right"
        anchor={testData.anchor}
      />
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        alignment="left"
        anchor={testData.anchor + "2"}
      />
      <TeamSection
        team={testData.team}
        title={testData.title}
        blurb={testData.blurb}
        alignment="right"
        anchor={testData.anchor + "3"}
      />
    </>
  );
}
