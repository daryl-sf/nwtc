import Link from "next/link";
import data from "./data.json";

type Person = {
  name: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  bio: string;
};

const HallOfFame = () => {
  const typedData: Record<string, Person> = data;
  return (
    <div className="flex flex-col space-y-4">
      {Object.entries(typedData).map(([slug, athlete]) => (
        <Link href={`/hall-of-fame/${slug}`} key={slug}>
          {athlete.name}
        </Link>
      ))}
    </div>
  );
};

export default HallOfFame;
