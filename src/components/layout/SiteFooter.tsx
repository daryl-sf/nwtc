import { Link } from "react-router-dom";
import { BrandLink } from "../link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer
      className={
        compact
          ? "bg-brandBlue px-6 py-10"
          : "border-t border-white/10 bg-brandBlue px-6 py-12"
      }
    >
      <div className="mx-auto grid max-w-screen-xl gap-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <img
              src="/nwtc-logo.PNG"
              alt="NWTC"
              className="h-12 w-12 rounded-full border border-white"
            />
            <p className="font-display text-lg uppercase tracking-wide">
              North West Triathlon Club
            </p>
          </div>
          <p className="max-w-sm text-white/80">
            Ireland&apos;s northwest triathlon community since 1983. Based in
            Derry, affiliated with Triathlon Ireland.
          </p>
        </div>

        <div>
          <p className="font-display mb-3 uppercase tracking-wider text-brandGreen">
            Club
          </p>
          <ul className="flex flex-col gap-2 text-white/90">
            <li>
              <Link to="/about" className="hover:text-brandGreen">
                About
              </Link>
            </li>
            <li>
              <Link to="/training" className="hover:text-brandGreen">
                Training
              </Link>
            </li>
            <li>
              <Link to="/races" className="hover:text-brandGreen">
                Races
              </Link>
            </li>
            <li>
              <Link to="/juniors" className="hover:text-brandGreen">
                Juniors
              </Link>
            </li>
            <li>
              <Link to="/safeguarding" className="hover:text-brandGreen">
                Safeguarding
              </Link>
            </li>
            <li>
              <Link to="/hall-of-fame" className="hover:text-brandGreen">
                Hall of Fame
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display mb-3 uppercase tracking-wider text-brandGreen">
            Follow
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <BrandLink
                to="https://www.facebook.com/north.westtriathlon/"
                target="_blank"
              >
                Facebook <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </BrandLink>
            </li>
            <li>
              <BrandLink
                to="https://www.instagram.com/northwest.triathlonclub/"
                target="_blank"
              >
                Instagram <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </BrandLink>
            </li>
            <li>
              <BrandLink to="https://www.triathlonireland.com/" target="_blank">
                Triathlon Ireland{" "}
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </BrandLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-screen-xl text-sm text-white/50">
        © {new Date().getFullYear()} North West Triathlon Club
      </p>
    </footer>
  );
}
