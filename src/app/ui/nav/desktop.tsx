import { BrandLink } from "@/app/ui/link";

export const DesktopNav = () => {
  return (
    <ul className="hidden sm:flex gap-6">
      <li>
        <BrandLink href="#About">About</BrandLink>
      </li>
      <li>
        <BrandLink href="#Training">Training</BrandLink>
      </li>
      <li>
        <BrandLink href="#Races">Races</BrandLink>
      </li>
      <li>
        <BrandLink href="#Join">Join</BrandLink>
      </li>
    </ul>
  );
};
