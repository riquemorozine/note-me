"use client";
import {
  ButtonTextCollor,
  DescriptionWhiteTheme,
  DiscordBackgroundColor,
} from "@/styles/colors";
import styled from "styled-components";

export const LoginCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`;

export const DiscordButton = styled.button`
  font-size: 1rem;
  width: 320px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  font-weight: 500;
  background-color: ${DiscordBackgroundColor};
  color: ${ButtonTextCollor};
`;

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Line = styled.div`
  width: 76px;
  border-bottom: 1px solid ${DescriptionWhiteTheme};
  display: flex;
`;

export const JoinAnonymously = styled.span`
  font-size: 1rem;
  color: ${DescriptionWhiteTheme};
`;
