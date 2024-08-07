import Image from "next/image";
import { ResetCss } from "@/styles/reset";
import {
  Description,
  HomeMain,
  MainCard,
  Title,
} from "@/styles/home/HomePageStyle";

export default function Home() {
  return (
    <>
      <HomeMain>
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
      </HomeMain>
    </>
  );
}
