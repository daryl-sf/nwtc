"use client";
import Image from "next/image";
import { FC, ReactNode, useEffect, useRef } from "react";

interface SectionProps {
  children: ReactNode;
  img: { src: string; alt: string; width: number; height: number };
  id: string;
}

const Section: FC<SectionProps> = ({ children, img, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ref = sectionRef;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("animate-fade-in");
          entries[0].target.classList.add("border-brandGreen");
          entries[0].target.classList.add("border");
        } else {
          entries[0].target.classList.remove("animate-fade-in");
          entries[0].target.classList.remove("border");
          entries[0].target.classList.remove("animate-fade-in");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [sectionRef]);
  return (
    <section
      className="bg-foreground rounded-lg flex gap-1"
      id={id}
      ref={sectionRef}
    >
      <Image
        alt={img.alt}
        src={img.src}
        height={img.height}
        width={img.width}
        className="w-1/5 h-full border-r-4 border-brandGreen rounded-l-lg"
      />

      <div className="border-l-2 border-brandGreen pl-3 py-4">{children}</div>
    </section>
  );
};

export default Section;
