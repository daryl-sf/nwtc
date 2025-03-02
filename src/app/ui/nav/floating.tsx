import { HomeIcon } from "@heroicons/react/24/outline";

export default function FloatingMenu() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white text-brandBlue px-2">
      <div className="flex gap-4 p-4">
        <a href="#home" className="hover:text-brandGreen text-brandBlue">
          <HomeIcon className="h-6 w-6" />
        </a>
        <a href="#about-us" className="hover:text-brandGreen">
          About
        </a>
        <a href="#training" className="hover:text-brandGreen">
          Training
        </a>
        <a href="#races" className="hover:text-brandGreen">
          Races
        </a>
        <a href="#join" className="hover:text-brandGreen">
          Join
        </a>
        <a href="#juniors" className="hover:text-brandGreen">
          Juniors
        </a>
      </div>
    </div>
  );
}
