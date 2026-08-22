import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function PageHero({
  title,
  intro,
  image,
}: {
  title: string;
  intro?: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative isolate min-h-[50vh] overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto flex min-h-[50vh] max-w-4xl flex-col justify-end px-6 py-16">
        <h1 className="mb-4 border-b-2 border-white pb-3 text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="border-t-2 border-brandGreen pt-3 text-lg text-white/90">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function PhotoEditorial({
  title,
  paragraphs,
  image,
  reverse = false,
  children,
}: {
  title: string;
  paragraphs: readonly string[];
  image: { src: string; alt: string };
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 ${
        reverse ? "md:[&>img]:order-2" : ""
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-80 w-full rounded-xl object-cover ring-1 ring-white/20"
      />
      <div>
        <h2 className="mb-4 border-b-2 border-white pb-3 text-3xl">{title}</h2>
        <div className="space-y-4 border-t-2 border-brandGreen pt-3 text-lg leading-relaxed">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}

export function TextCta({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="mt-4 inline-block rounded-lg bg-brandGreen px-4 py-2 font-semibold text-brandBlue hover:bg-brandGreen/80"
    >
      {children}
    </Link>
  );
}
