import Image from "next/image";

export default function Races() {
  return (
    <div className="snap-always snap-center" id="races">
      <div className="relative min-h-screen flex bg-brandBlue text-brandGreen">
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl ">
          <div className="flex flex-col gap-8 items-center justify-center">
            <Image
              src="/file.svg"
              alt="NWTC Logo"
              width={536}
              height={536}
              className="border-white text-brandGreen border rounded-full hover:border-brandGreen h-56 w-56"
            />
            <h1 className="text-center text-wrap text-4xl">Races</h1>
            <p className="text-center text-white">
              A bit of copy about the races the clubs hosts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
