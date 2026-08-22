import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function CtaLink({ to, children, className, external }: Props) {
  const combined = clsx(
    "mt-6 inline-block rounded-lg bg-brandGreen px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-brandBlue hover:bg-brandGreen/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    className,
  );

  if (external || to.startsWith("http") || to.endsWith(".pdf")) {
    return (
      <a
        href={to}
        className={combined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={combined}>
      {children}
    </Link>
  );
}
