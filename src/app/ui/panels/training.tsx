import Card from "@/app/ui/card";

export default function Training() {
  return (
    <div className="snap-always snap-center" id="training">
      <div className="relative min-h-screen flex bg-brandGreen">
        <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl ">
          <div className="snap-y snap-mandatory grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 overflow-y-scroll no-scrollbar justify-between w-full mx-auto my-6 px-6 max-h-screen">
            <div className="snap-center snap-always">
              <Card
                image={{
                  src: "/training/pool-swimming.jpg",
                  alt: "Athlete swimming in pool",
                  width: 6000,
                  height: 4000,
                }}
                title="Pool Swimming"
                description="Join our structured pool swimming sessions to improve your technique, speed, and endurance. Suitable for all levels."
                location="Foyle Arena, Derry"
                time="Tuesdays 8:30-9:30pm"
              />
            </div>
            <div className="snap-center snap-always">
              <Card
                image={{
                  src: "/training/running.jpg",
                  alt: "Athlete running on road",
                  width: 4489,
                  height: 2988,
                }}
                title="Running"
                description="Our weekly running sessions are designed to help you build speed, strength, and stamina. All abilities welcome."
                location="Templmore Sports Complex, Derry"
                time="Wednesdays 6:15pm"
              />
            </div>
            <div className="snap-center snap-always">
              <Card
                image={{
                  src: "/training/cycling.jpg",
                  alt: "Two female athletes cycling on road",
                  width: 6000,
                  height: 4000,
                }}
                title="Club Events"
                description="Join us for regular club events, including time trials, duathlons, and social rides. Suitable for all members."
                location="Various locations"
                time="Check calendar for details"
              />
            </div>
            <div className="snap-center snap-always">
              <Card
                image={{
                  src: "/training/pool-swimming.jpg",
                  alt: "Athlete swimming in pool",
                  width: 6000,
                  height: 4000,
                }}
                title="Pool Swimming"
                description="Join our structured pool swimming sessions to improve your technique, speed, and endurance. Suitable for all levels."
                location="Templemore Sports Complex, Derry"
                time="Tuesdays 6-7pm"
              />
            </div>
            <div className="snap-center snap-always">
              <Card
                image={{
                  src: "/training/open-water-swimming.jpg",
                  alt: "Athlete swimming in open water",
                  width: 6637,
                  height: 3348,
                }}
                title="Open Water Swimming"
                description="During summer months, we host open water swimming sessions at local lakes and beaches. All levels welcome."
                location="Various locations"
                time="Check calendar for details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
