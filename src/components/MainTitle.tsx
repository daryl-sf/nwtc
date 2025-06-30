"use client";
import { TypeAnimation } from "react-type-animation";
// import { geistMono } from "../assets/fonts";

export default function MainTitle() {
  return (
    <TypeAnimation
      wrapper="h1"
      sequence={["North West Triathlon Club"]}
      className={`text-wrap text-center text-4xl text-white`}
      cursor={false}
    />
  );
}
