export const aboutPage = {
  title: "About us",
  intro:
    "Founded in 1983, North West Triathlon Club is one of Ireland's longest-standing triathlon communities, based in Derry, Northern Ireland.",
};

export const aboutSlides = [
  {
    id: "origins",
    title: "Our origins",
    image: {
      src: "/about-us/reid.jpg",
      alt: "Aileen Reid crossing finish line",
      width: 1440,
      height: 810,
    },
    paragraphs: [
      "Founded in 1983, North West Triathlon Club (NWTC) is one of Ireland's longest-standing triathlon communities, based in Derry, Northern Ireland.",
      "As a Triathlon Ireland-affiliated club, we welcome athletes of all levels from across the Northwest region, offering a supportive and inclusive environment to train, compete, and grow.",
    ],
  },
  {
    id: "offer",
    title: "What we offer",
    image: {
      src: "/about-us/swimmers.jpg",
      alt: "Swimmers swimming in pool",
      width: 2000,
      height: 1335,
    },
    paragraphs: [
      "From complete beginners to seasoned triathletes, our members benefit from expert coaching, structured training sessions, and a vibrant social community.",
      "We also run a dedicated junior program to inspire the next generation of triathletes. Whether your goal is fitness, fun, or high-level competition, NWTC is here to help you achieve it.",
    ],
  },
  {
    id: "community",
    title: "By the community, for the community",
    image: {
      src: "/about-us/running-legs.jpg",
      alt: "Legs running",
      width: 5071,
      height: 3379,
    },
    paragraphs: [
      "NWTC is a volunteer-run club, with members contributing to coaching, event planning, and club management.",
      "Our ethos is built on community spirit, with members supporting each other to achieve their goals, whether that's completing their first triathlon or qualifying for international competition.",
    ],
  },
  {
    id: "affiliation",
    title: "Fully affiliated with Triathlon Ireland",
    image: {
      src: "/juniors/bike-on-ground.jpg",
      alt: "Bike on the ground at side of road",
      width: 2000,
      height: 1333,
    },
    paragraphs: [
      "NWTC is fully aligned with Triathlon Ireland, ensuring that our coaching, safeguarding, and safety practices meet the highest standards.",
      "Our dedicated, qualified coaches are committed to creating a positive and inclusive training environment.",
    ],
  },
  {
    id: "hall-of-fame",
    title: "NWTC Hall of Fame",
    image: {
      src: "/races/cyclists-racing.jpg",
      alt: "Cyclists racing",
      width: 5071,
      height: 3379,
    },
    paragraphs: [
      "The NWTC Hall of Fame is a celebration of our members' achievements, both on and off the course.",
      "We recognize the dedication, perseverance, and sportsmanship of our athletes, and we are proud to showcase their accomplishments.",
    ],
    cta: {
      to: "/hall-of-fame",
      label: "View the Hall of Fame",
    },
  },
] as const;
