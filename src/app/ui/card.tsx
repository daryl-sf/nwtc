import Image from "next/image";

export default function Card({
  title,
  time,
  location,
  description,
  image,
}: {
  title: string;
  time: string;
  location: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}) {
  return (
    <div className="w-96 rounded bg-brandBlue text-white">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="rounded-t w-full border-b-brandGreen border-b-4"
      />
      <div className="px-2 py-4">
        <h2>{title}</h2>
        <p className=" text-base">{time}</p>
        <p className=" text-base">{location}</p>
        <p className=" text-base">{description}</p>
      </div>
    </div>
  );
}
