"use client";
import Image from "next/image";

import {
  Description,
  HomeMain,
  MainCard,
  Title,
  HomeSection,
  HomeHeader,
} from "@/styles/home/HomePageStyle";

import LoginComponent from "@/components/LoginComponent";
import LightButtonComponent from "@/components/LightButton";
import { useLight } from "@/context/LightContext";

export default function Home() {
  const { getLight } = useLight();

  return (
    <>
      <HomeMain theme={{ main: getLight() === true ? "dark" : "light" }}>
        <HomeHeader>
          <LightButtonComponent dark={getLight()} />
        </HomeHeader>
        <HomeSection>
          <MainCard>
            <Image
              src={
                getLight() === true
                  ? "/login_page_computer_icon_dark.svg"
                  : "/login_page_computer_icon.svg"
              }
              alt="login page icon"
              width={370}
              height={300}
            />
            <Title theme={{ main: getLight() === true ? "dark" : "light" }}>
              Keep life simple
            </Title>
            <Description
              theme={{ main: getLight() === true ? "dark" : "light" }}
            >
              Store all your notes in a simple and intuitive app that helps you
              enjoy what is most important in life.
            </Description>
          </MainCard>
          <LoginComponent />
        </HomeSection>
      </HomeMain>

      {/* <Loading dark={false} /> */}
    </>
  );
}
