"use client";
import { LightButton } from "@/styles/components/lightButton/LightButton";

type LightButtonProps = {
  dark: boolean;
};

export default function LightButtonComponent({ dark }: LightButtonProps) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <LightButton
        theme={{ main: dark ? "dark" : "white" }}
        onClick={handleClick}
      />
    </>
  );
}
