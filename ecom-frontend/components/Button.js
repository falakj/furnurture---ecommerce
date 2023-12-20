import React from 'react';
import { css, styled } from 'styled-components';

export const StButton = css`
  border: 0;
  padding: 12px 16px;
  // padding: 10px 6px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.$black &&
    !props.$outline &&
    css`
      background-color: white;
      color: black;
    `}

  ${(props) =>
    props.$black &&
    props.$outline &&
    css`
      background-color: #da7f8f;
      padding: 10px;
      color: #212121;
      font-size: medium;
    `}

  ${(props) =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: white;
      color: black;
    `}

  ${(props) =>
    props.$white &&
    props.$outline &&
    css`
      background-color: transparent;
      color: whitesmoke;
      border: 1px solid #da7f8f;
    `}

    ${(props) =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: #da7f8f;
      color: #faf3f3;
      font-size: 11px;
      font-weight: 500;
    `}

    ${(props) =>
    props.$primary &&
    props.$outline &&
    css`
      background-color: transparent;
      border: 1px solid #da7f8f;
      color: #212121;
      padding: 8px;
      border-radius: 5px;
    `}

    ${(props) =>
  props.$quantity &&
  css`
      background-color: transparent;
      padding: 5px;
    `}

    ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 15px;
      svg {
        height: 18px;
        margin-right: 5px;
      }
    `}
`;

const ButtonSt = styled.button`
  ${StButton}
`;

export default function Button({children, ...all}) {
    return (
        <ButtonSt {...all}>{children}</ButtonSt>
    );
}
