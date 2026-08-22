import type { FC, ReactNode, AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { social } from "../content/links";

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

function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img aria-hidden src={src} alt={alt} className="h-5 w-5 shrink-0 object-contain" />
  );
}

export function FacebookLink({
  children = "Facebook",
}: {
  children?: ReactNode;
}) {
  return (
    <BrandLink to={social.facebook} target="_blank">
      <SocialIcon src="/social-media/Facebook_Logo_Primary.png" alt="Facebook" />
      {children}
    </BrandLink>
  );
}

export function InstagramLink({
  children = "Instagram",
}: {
  children?: ReactNode;
}) {
  return (
    <BrandLink
      to={social.instagram}
      target="_blank"
    >
      <SocialIcon
        src="/social-media/Instagram_Glyph_Gradient.png"
        alt="Instagram"
      />
      {children}
    </BrandLink>
  );
}
