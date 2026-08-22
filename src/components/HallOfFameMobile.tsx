import ReactMarkdown from "react-markdown";
import SwipeableCarousel from "../components/SwipableCarousel";
import { hallOfFameEntries } from "../content/hallOfFame";

export default function HallOfFameMobile() {
  return (
    <main className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start snap-always" id="hall-of-fame">
        <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
          <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
            <SwipeableCarousel
              className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
              id="hall-of-fame"
            >
              {hallOfFameEntries.map((entry) => {
                return (
                  <div key={entry.sk}>
                    {entry.image ? (
                      <img
                        src={entry.image.src}
                        width={entry.image.width}
                        height={entry.image.height}
                        alt={`${entry.name} hall of famer`}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                      <div className="w-3/4 text-center md:w-2/4">
                        <div className="mb-4 flex items-center justify-center">
                          <img
                            src={entry.profileImage.src}
                            width={entry.profileImage.width}
                            height={entry.profileImage.height}
                            alt={`${entry.name} hall of famer`}
                            className="h-36 w-36 rounded-full border-2 border-brandGreen object-cover"
                          />
                        </div>
                        <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                          {entry.name}
                        </h1>
                        <div className="no-scrollbar relative max-h-[60dvh] overflow-scroll text-ellipsis rounded-xl border-t-2 border-brandGreen px-3 py-3 text-justify">
                          <ReactMarkdown>{entry.description}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </SwipeableCarousel>
          </div>
        </div>
      </div>
    </main>
  );
}
