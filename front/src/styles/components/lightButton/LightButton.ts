"use client";
import styled from "styled-components";

export const LightButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-image: ${(props) =>
    props.theme.main === "dark" ? "url('./light.svg')" : "url('./dark.svg')"};
  background-size: cover;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
