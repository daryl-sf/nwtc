export const joinPage = {
  title: "Join",
  intro:
    "Join North West Triathlon Club through Triathlon Ireland and become part of a supportive community of athletes.",
};

export const joinSlides = [
  {
    id: "member",
    title: "Become a member today",
    image: {
      src: "/join/runners-on-bridge.jpg",
      alt: "A group of runners on a bridge",
      width: 2000,
      height: 1324,
    },
    paragraphs: [
      "Join North West Triathlon Club today and become part of a vibrant and supportive community of athletes. You can join our club through the Triathlon Ireland website.",
    ],
    kind: "membership" as const,
  },
  {
    id: "conversation",
    title: "Join the conversation",
    image: {
      src: "/join/swimmer-open-water.jpg",
      alt: "Single swimmer in open water",
      width: 2000,
      height: 1333,
    },
    paragraphs: [
      "Follow us on social media to stay up to date with the latest club news, events, and training sessions. We are active on Facebook and Instagram.",
    ],
    kind: "social" as const,
  },
  {
    id: "contact",
    title: "Get in touch",
    image: {
      src: "/training/open-water-swimming.jpg",
      alt: "Athlete swimming in open water",
      width: 1200,
      height: 605,
    },
    paragraphs: [
      "The best way to reach NWTC is through Facebook or Instagram. Membership is arranged via Triathlon Ireland. For welfare concerns, see our safeguarding information.",
    ],
    kind: "contact" as const,
  },
] as const;
