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
import Loading from "./loading";
import LightButtonComponent from "@/components/LightButton";

export default function Home() {
  return (
    <>
      <HomeMain>
        <HomeHeader>
          <LightButtonComponent dark={true} />
        </HomeHeader>
        <HomeSection>
          <MainCard>
            <Image
              src="/login_page_computer_icon.svg"
              alt="login page icon"
              width={370}
              height={300}
            />
            <Title>Keep life simple</Title>
            <Description>
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
