"use client";
import styled from "styled-components";
import {
  TitleBlackTheme,
  TitleWhiteTheme,
  DescriptionBlackTheme,
  DescriptionWhiteTheme,
} from "../colors";

export const HomeMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
  color: ${(props) =>
    props.theme.colors === "dark" ? TitleBlackTheme : TitleWhiteTheme};
`;

export const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  color: ${(props) =>
    props.theme.colors === "dark"
      ? DescriptionBlackTheme
      : DescriptionWhiteTheme};
`;
