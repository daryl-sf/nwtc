import clsx from "clsx";
import type { SwimSession, SwimStep } from "../../content/swim";

const difficultyClass: Record<SwimSession["difficulty"], string> = {
  easy: "border-brandGreen/70 text-brandGreen",
  moderate: "border-white/70 text-white",
  hard: "border-red-400/80 text-red-300",
};

export function SessionChips({ session }: { session: SwimSession }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <span
        className={clsx(
          "rounded-full border px-3 py-0.5 text-sm capitalize",
          difficultyClass[session.difficulty],
        )}
      >
        {session.difficulty}
      </span>
      <span className="rounded-full border border-white/40 px-3 py-0.5 text-sm capitalize">
        {session.focus}
      </span>
      <span className="rounded-full border border-white/40 px-3 py-0.5 text-sm">
        {session.totalDistance}m
      </span>
      <span className="rounded-full border border-white/40 px-3 py-0.5 text-sm">
        {session.poolLength}m pool
      </span>
    </div>
  );
}

function StepRow({ step }: { step: SwimStep }) {
  const isRestOnly = !step.distance && /rest/i.test(step.description);

  return (
    <li className="border-b border-white/15 py-2 text-left last:border-0">
      {isRestOnly ? (
        <p>
          <span className="font-semibold text-brandGreen">{step.description}</span>
          {step.rest ? <span className="text-white/80"> — {step.rest}</span> : null}
        </p>
      ) : (
        <>
          <p>
            {step.repeats ? <span className="font-semibold">{step.repeats} × </span> : null}
            {step.distance ? (
              <span className="font-semibold">{step.distance}m </span>
            ) : null}
            <span>{step.description}</span>
          </p>
          {step.rest ? (
            <p className="text-sm text-white/70">{step.rest}</p>
          ) : null}
        </>
      )}
    </li>
  );
}

export function SessionSteps({
  steps,
  className = "",
}: {
  steps: SwimStep[];
  className?: string;
}) {
  return (
    <ol className={className}>
      {steps.map((step, i) => (
        <StepRow key={`${step.description}-${i}`} step={step} />
      ))}
    </ol>
  );
}
