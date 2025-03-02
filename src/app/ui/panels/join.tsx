import Image from "next/image";

export default function Join() {
  return (
    <div className="snap-always snap-center" id="join">
      <div className="relative min-h-screen flex bg-brandGreen">
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl ">
          <div className="flex flex-col gap-8 items-center justify-center">
            <Image
              src="/globe.svg"
              alt="NWTC Logo"
              width={536}
              height={536}
              className="border-white text-brandBlue border rounded-full hover:border-brandGreen h-56 w-56"
            />
            <h1 className="text-center text-wrap text-4xl">Join Us</h1>
            <p className="text-center text-brandBlue">
              Some copy and CTA to join the club.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
