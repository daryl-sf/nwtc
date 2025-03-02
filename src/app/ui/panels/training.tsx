import Card from "@/app/ui/card";

export default function Training() {
  return (
    <div className="snap-always snap-center" id="training">
      <div className="relative min-h-screen flex bg-brandGreen">
        <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl ">
          <div className="snap-y snap-mandatory grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 overflow-y-scroll no-scrollbar justify-between w-full mx-auto my-6 px-6 max-h-screen">
            <div className="snap-center snap-always">
              <Card />
            </div>
            <div className="snap-center snap-always">
              <Card />
            </div>
            <div className="snap-center snap-always">
              <Card />
            </div>
            <div className="snap-center snap-always">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
