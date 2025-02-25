import Link, { LinkProps } from "next/link";
import { FC, ReactNode, AnchorHTMLAttributes } from "react";

interface BrandLinkProps extends LinkProps {
  children: ReactNode;
  external?: boolean;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const BrandLink: FC<
  BrandLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  children,
  external = false,
  href,
  className = "",
  target,
  ...props
}) => {
  const combinedClassName =
    "flex items-center gap-2 hover:underline hover:underline-offset-4 decoration-brandGreen " +
    className;

  if (external || href?.toString().startsWith("http")) {
    return (
      <a
        href={href as string}
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
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};
