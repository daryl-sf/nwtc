import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { BrandLink } from "../components/link";

export default function HallOfFamePage() {
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
                      Safeguarding
                    </h1>
                    <p className="rounded-xl border-t-2 border-brandGreen py-3">
                      At NWTC, we are committed to creating a safe and positive
                      environment for all members, especially children and young
                      people. Every athlete has the right to enjoy sport free
                      from harm, abuse or neglect.
                    </p>
                    <p>
                      If you are concerned about the welfare or protection of a
                      child, or if you are a young person who needs to talk to
                      someone, please rech out. We all have a role to play in
                      keeping our community safe.
                    </p>
                    <div className="flex flex-wrap justify-around pt-3">
                      <BrandLink
                        to="/Safeguarding-Poster-NI-2025.pdf"
                        target="_blank"
                        external
                      >
                        <ArrowDownTrayIcon className="h-6 w-6" /> View our
                        Safeguarding Poster 2025
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
