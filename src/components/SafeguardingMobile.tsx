import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { BrandLink } from "../components/link";
import { safeguardingPage } from "../content/safeguarding";
import { social } from "../content/links";

export default function SafeguardingMobile() {
  return (
    <main className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start snap-always" id="hall-of-fame">
        <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
          <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
            <div
              className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
              id="safeguarding"
            >
              <div>
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                  <div className="w-3/4 text-center md:w-2/4">
                    <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                      {safeguardingPage.title}
                    </h1>
                    <p className="rounded-xl border-t-2 border-brandGreen py-3">
                      {safeguardingPage.paragraphs[0]}
                    </p>
                    <p>{safeguardingPage.paragraphs[1]}</p>
                    <div className="flex flex-wrap justify-around pt-3">
                      <BrandLink
                        to={social.safeguardingPdf}
                        target="_blank"
                        external
                      >
                        <ArrowDownTrayIcon className="h-6 w-6" />{" "}
                        {safeguardingPage.posterLabel}
                      </BrandLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
