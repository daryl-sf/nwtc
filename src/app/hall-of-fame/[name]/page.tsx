import React from "react";
import Image from "next/image";
import data from "../data.json";
import { notFound } from "next/navigation";

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

const HallOfFamePage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  const person = typedData[name];

  if (!person) {
    return notFound();
  }

  return (
    <div>
      <h1 className=" text-4xl font-bold">{person.name}</h1>
      <div>
        <Image
          src={`${person.image.src}`}
          alt={person.image.alt}
          width={person.image.width}
          height={person.image.height}
          className="rounded-lg w-full md:w-min float-start mr-2"
        />
        <pre className="container text-ellipsis text-wrap mt-4">
          {person.bio}
        </pre>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return Object.keys(data).map((name) => ({ params: { name } }));
}

export default HallOfFamePage;
