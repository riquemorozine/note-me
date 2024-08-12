"use client";
import styled from "styled-components";

export const LoadingComponent = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => (props.theme.main === "dark" ? "#000000" : "white")};
`;
