import Image from "next/image";

export default function Card() {
  return (
    <div className="w-96 rounded bg-brandBlue text-white">
      <Image
        src="/about-image.jpg"
        alt="NWTC Logo"
        width={1600}
        height={1062}
        className="rounded-t w-full border-b-brandGreen border-b-4"
      />
      <div className="px-2 py-4">
        <h2>Swimming</h2>
        <p className=" text-base">Thursday 6pm</p>
        <p className=" text-base">Templemore Sports Complex</p>
        <p className=" text-base">
          Coached session lasting 1 hour.
          <br />
          <br />
          All abilities welcome.
        </p>
      </div>
    </div>
  );
}
