"use client";
import { TypeAnimation } from "react-type-animation";
import { geistMono } from "@/app/ui/fonts";

export default function MainTitle() {
  return (
    <TypeAnimation
      wrapper="h1"
      sequence={["North West Triathlon Club"]}
      className={`text-wrap text-center text-4xl ${geistMono.className} text-white`}
      cursor={false}
    />
  );
}
