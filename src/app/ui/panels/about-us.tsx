// import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="snap-always snap-center" id="about-us">
      <div className="relative min-h-screen flex bg-brandBlue">
        <div className="container max-w-screen-xl mx-auto h-4/5 flex flex-col gap- justify-center items-center text-base my-4">
          {/* <Image
            src="/about-image.jpg"
            alt="Club members having fun"
            width={1600}
            height={1062}
            className="rounded-lg rounded-b-none border-b-4 border-brandGreen"
          /> */}
          <div className="p-4 bg-white rounded-lg rounded-t-none text-brandBlue flex flex-col gap-3">
            <h1 className="text-2xl font-extrabold text-brandBlue">About Us</h1>
            <p>
              Founded in 1983, North West Triathlon Club (NWTC) is one of
              Ireland&apos;s longest-standing triathlon communities, based in
              Derry, Northern Ireland. As a Triathlon Ireland-affiliated club,
              we welcome athletes of all levels from across the Northwest
              region, offering a supportive and inclusive environment to train,
              compete, and grow.
            </p>
            <p>
              From complete beginners to seasoned triathletes, our members
              benefit from expert coaching, structured training sessions, and a
              vibrant social community. We also run a dedicated junior program
              to inspire the next generation of triathletes. Whether your goal
              is fitness, fun, or high-level competition, NWTC is here to help
              you achieve it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
