import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  image: string;
  alt: string;
  children: ReactNode;
  reverse?: boolean;
  id?: string;
  className?: string;
};

export default function CinematicSplit({
  image,
  alt,
  children,
  reverse = false,
  id,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "relative flex min-h-full items-stretch md:grid md:min-h-[min(36rem,72dvh)] md:grid-cols-2",
        className,
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 md:relative md:min-h-[28rem]",
          reverse && "md:order-2",
        )}
      >
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="relative z-10 flex min-h-full w-full items-center justify-center bg-black/70 px-6 py-20 md:bg-brandBlue md:px-12 md:py-16">
        <div className="w-full max-w-xl text-center md:text-left">
          <div className="border-t-2 border-brandGreen pt-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
