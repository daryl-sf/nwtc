import { TypeAnimation } from "react-type-animation";

export default function MainTitle() {
  return (
    <TypeAnimation
      wrapper="h1"
      sequence={["North West Triathlon Club"]}
      className="font-display text-center text-4xl font-semibold uppercase tracking-wide text-white md:text-6xl"
      cursor={false}
    />
  );
}
