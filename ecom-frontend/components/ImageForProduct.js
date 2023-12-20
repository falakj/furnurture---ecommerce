import React from 'react'
import styled from "styled-components";
import { useState } from "react";


const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;


const BigImg = styled.img`
  max-width: 100%;
  max-height: 200px;
`;


const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;


const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.$active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;


const BigImage = styled.div`
  text-align: center;
`;



export default function ImageForProduct({ photos }) {
  const [activePhoto, setActivePhoto] = useState(photos?.[0]);
  return (
    <>
      <BigImage>
        <BigImg src={activePhoto} />
      </BigImage>
      <ImageButtons>
        {photos.map((photo) => (
          <ImageButton
            key={photo}
            $active={photo === activePhoto}
            onClick={() => setActivePhoto(photo)}
          >
            <Img src={photo} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
