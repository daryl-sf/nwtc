import Link from "next/link";
import data from "@/app/hall-of-fame/data.json";
import AthleteCard from "@/app/ui/athlete-card";

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
    <div className="flex flex-wrap justify-center gap-4">
      {Object.entries(typedData).map(([slug, athlete]) => (
        <Link href={`/hall-of-fame/${slug}`} key={slug}>
          <AthleteCard athlete={athlete} isLink />
        </Link>
      ))}
    </div>
  );
};

export default HallOfFame;
