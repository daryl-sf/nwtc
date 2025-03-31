import clsx from "clsx";
import Image from "next/image";

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

const AthleteCard = ({
  athlete,
  isLink = false,
}: {
  athlete: Person;
  isLink?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "w-full transform rounded-lg transition-transform md:w-min",
        isLink && "cursor-pointer hover:scale-105",
      )}
    >
      <Image
        src={`${athlete.image.src}`}
        alt={athlete.image.alt}
        width={athlete.image.width}
        height={athlete.image.height}
        className="w-full rounded-lg rounded-b-none border-b-4 border-brandBlue md:w-min"
      />
      <div className="text-nowrap rounded-lg rounded-t-none border-t-4 border-brandGreen bg-white px-4 py-2">
        <h2 className="text-center text-3xl font-bold text-brandBlue">
          {athlete.name}
        </h2>
      </div>
    </div>
  );
};

export default AthleteCard;
