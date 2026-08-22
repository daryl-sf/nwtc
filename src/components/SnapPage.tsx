import type { ReactNode } from "react";
import clsx from "clsx";

export function SnapPage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "no-scrollbar h-[calc(100dvh-4rem)] snap-y snap-mandatory overflow-y-scroll md:h-auto md:snap-none md:overflow-visible",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SnapSection({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "snap-start snap-always min-h-full md:min-h-0 md:snap-none",
        className,
      )}
    >
      {children}
    </section>
  );
}
