import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  children,
  as: Tag = "h1",
  className,
}: Props) {
  return (
    <Tag
      className={clsx(
        "font-display mb-4 border-b-2 border-white pb-3 text-3xl font-semibold uppercase tracking-wide md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
