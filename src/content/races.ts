export const racesPage = {
  title: "Races",
  intro:
    "NWTC hosts two flagship events each year: the Liam Ball Sprint Triathlon and the Buncrana Duathlon. Both welcome beginners and experienced athletes.",
};

export const races = {
  liamBall: {
    slug: "liam-ball",
    path: "/races/liam-ball",
    title: "Liam Ball Sprint Triathlon",
    image: {
      src: "/races/liamball.jpg",
      alt: "Liam Ball mural",
      width: 1500,
      height: 999,
    },
    summary:
      "NWTC's annual sprint triathlon, named in honour of Derry Olympian Liam Ball. The event continues to grow year after year, keeping his story alive and inspiring the next generation of athletes.",
    paragraphs: [
      "Liam Ball, a proud Derry swimmer, represented Ireland at the 1968 and 1972 Olympics. A remarkable athlete, he left a lasting legacy despite his untimely death in 1984 at 33.",
      "To honour his memory, NWTC named their annual sprint triathlon after him. Year after year the event continues to grow, keeping his story alive and inspiring the next generation of athletes.",
      "The Liam Ball Sprint Triathlon is the club's flagship race: a community occasion as much as a competition, drawing local athletes and visitors to race in Derry.",
    ],
  },
  buncrana: {
    slug: "buncrana",
    path: "/races/buncrana",
    title: "Buncrana Duathlon",
    image: {
      src: "/races/cyclists-racing.jpg",
      alt: "Triathletes racing",
      width: 2000,
      height: 1333,
    },
    summary:
      "A flat, fast season-opener in Buncrana: 3.2km run, 16km bike, and 3.2km run. Built for first-timers and seasoned athletes alike.",
    paragraphs: [
      "The Buncrana Duathlon is a great way to start the season. Taking place in the beautiful town of Buncrana, the duathlon consists of a 3.2km run, 16km bike and a 3.2km run.",
      "The course is flat and fast and is perfect for beginners and seasoned athletes alike.",
      "Run, bike, run — no swim — so it is an accessible first race of the year and a sharp early-season test for experienced members.",
    ],
  },
} as const;

export const raceList = [races.liamBall, races.buncrana] as const;
