import Image from "next/image";

export default function HeroSection() {
  return (
    <nav className="bg-background text-foreground shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/nwtc-logo.PNG"
          alt="NWTC Logo"
          width={536}
          height={536}
          className="border-white border rounded-full h-20 w-20 hover:border-brandGreen"
        />
      </div>
    </nav>
  );
}
