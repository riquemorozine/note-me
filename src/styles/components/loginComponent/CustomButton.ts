"use client";
import { CustomButtonColor } from "@/styles/colors";
import styled from "styled-components";

export const CustomButton = styled.button`
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  background: ${CustomButtonColor};
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
