export const trainingPage = {
  title: "Training",
  intro:
    "Structured coaching across swim, bike, and run, with club events through the year. Sessions are open to members of all abilities.",
};

export const trainingSlides = [
  {
    id: "pool",
    title: "Pool Swimming",
    image: {
      src: "/training/pool-swimming.jpg",
      alt: "Athlete swimming in pool",
      width: 1500,
      height: 800,
    },
    paragraphs: [
      "Join our structured pool swimming sessions to improve your technique, speed, and endurance. With each lane catering to a different ability level, our sessions are suitable for all members.",
    ],
    sessions: [
      { venue: "Foyle Arena, Derry", time: "Tuesdays 8:30pm" },
      { venue: "Templemore Complex, Derry", time: "Thursdays 6pm" },
    ],
    social: false,
  },
  {
    id: "running",
    title: "Running",
    image: {
      src: "/training/running.jpg",
      alt: "Athlete running on road",
      width: 1200,
      height: 799,
    },
    paragraphs: [
      "Our weekly running sessions are designed to help you build speed, strength, and stamina. Training plans are designed with the race calendar in mind, with a focus on improving performance and reducing injury risk.",
    ],
    sessions: [
      { venue: "Templemore Complex, Derry", time: "Wednesday 6:15pm" },
    ],
    social: false,
  },
  {
    id: "open-water",
    title: "Open Water Swimming",
    image: {
      src: "/training/open-water-swimming.jpg",
      alt: "Athlete swimming in open water",
      width: 1200,
      height: 605,
    },
    paragraphs: [
      "During summer months, we host open water swimming sessions at local lakes and beaches. Wetsuits, swim caps, and a swim buoy are required. Follow us on social media for updates.",
    ],
    sessions: [{ venue: "Various", time: "Various" }],
    social: true,
  },
  {
    id: "club-events",
    title: "Club Events",
    image: {
      src: "/training/cycling.jpg",
      alt: "Two female athletes cycling on road",
      width: 1200,
      height: 800,
    },
    paragraphs: [
      "Join us for regular club events, including time trials, duathlons, and social rides. We offer these to all members with a collection for local charities at each event. Follow us on social media for updates.",
    ],
    sessions: [{ venue: "Various", time: "Various" }],
    social: true,
  },
] as const;
