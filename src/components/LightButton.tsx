"use client";
import { useLight } from "@/context/LightContext";
import { LightButton } from "@/styles/components/lightButton/LightButton";

type LightButtonProps = {
  dark: boolean;
};

export default function LightButtonComponent({ dark }: LightButtonProps) {
  const { getLight, setLight } = useLight();

  function handleClick() {
    const light = getLight();

    setLight(!light);
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
