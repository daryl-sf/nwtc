import React from "react";
import data from "@/app/hall-of-fame/data.json";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import AthleteCard from "@/app/ui/athlete-card";

type Person = {
  name: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  bio: string;
};

const typedData: Record<string, Person> = data;

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const person = typedData[name];

  return {
    title: `${person.name} - Hall of Fame`,
    description: person.bio,
  };
}

const HallOfFamePage = async ({ params }: Props) => {
  const { name } = await params;
  const person = typedData[name];

  if (!person) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <AthleteCard athlete={person} />
      <pre className="container text-wrap rounded-lg bg-white p-4 text-justify text-brandBlue">
        {person.bio}
      </pre>
    </div>
  );
};

export async function generateStaticParams() {
  return Object.keys(data).map((name) => ({ params: { name } }));
}

export default HallOfFamePage;
