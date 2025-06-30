import type { FC, ReactNode, AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface BrandLinkProps extends LinkProps {
  children: ReactNode;
  external?: boolean;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const BrandLink: FC<
  BrandLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, external = false, to, className = "", target, ...props }) => {
  const combinedClassName =
    "flex items-center gap-2 hover:underline hover:underline-offset-4 decoration-brandGreen " +
    className;

  if (external || to?.toString().startsWith("http")) {
    return (
      <a
        href={to as string}
        className={combinedClassName}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};
