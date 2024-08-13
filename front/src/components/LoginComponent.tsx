import React from "react";
import Image from "next/image";

import {
  DiscordButton,
  JoinAnonymously,
  JoinContainer,
  Line,
  LoginCard,
} from "@/styles/components/loginComponent/LoginComponent";

import LoginInputComponent from "./LoginInput";
import LoginButton from "./CustomButton";
import { useLight } from "@/context/LightContext";

export default function LoginComponent() {
  const { getLight } = useLight();

  return (
    <LoginCard>
      <Image
        src={getLight() === true ? "/Logo_dark.svg" : "/logo.svg"}
        width={300}
        height={65}
        alt="logo image"
      />
      <DiscordButton>
        <Image
          width={24}
          height={24}
          alt="discord image"
          src="/whiteDiscordLogo.svg"
        />
        &nbsp; Join with Discord
      </DiscordButton>

      <JoinContainer>
        <Line />
        <JoinAnonymously>or join anonymously</JoinAnonymously>
        <Line />
      </JoinContainer>

      <LoginInputComponent placeholder="Type your secret codename" />
      <LoginButton
        label="Join anonymously"
        src="/login.png"
        alt="login image"
        height={20}
        width={20}
      />
    </LoginCard>
  );
}
