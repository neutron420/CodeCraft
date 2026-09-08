import { HighlightText } from "@/components/ui/highlight-text";

export default function Content() {
  return (
    <section className="bg-background @container py-24">
      <div className="@2xl:grid-cols-2 mx-auto grid max-w-3xl gap-6 px-6">
        <h2 className="text-balance font-serif text-4xl font-medium">
          Prep the way interviews <HighlightText variant="orange">actually work</HighlightText>
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground">
            <HighlightText variant="orange" textClassName="font-semibold text-xs uppercase tracking-wider">Pick a company</HighlightText>{" "}
            Start from the exact list of problems reported at the company you
            are interviewing with.
          </p>

          <p className="text-muted-foreground">
            <HighlightText variant="yellow" textClassName="font-semibold text-xs uppercase tracking-wider">Filter by topic</HighlightText>{" "}
            Narrow any list down to a single pattern - Arrays, DP, Graphs - and
            drill it until it sticks.
          </p>

          <p className="text-muted-foreground">
            <HighlightText variant="cyan" textClassName="font-semibold text-xs uppercase tracking-wider">Jump to LeetCode</HighlightText>{" "}
            Every problem links straight to its LeetCode page, so you go from
            list to editor in one click.
          </p>
        </div>
      </div>
    </section>
  );
}
