import React from "react";
import styled from "styled-components";

const HorizontalLine = styled.div`
  background-color: #a7bbc7;
  height: 0.5px;
  max-width: 1000px;
  margin: 10px auto;
  opacity: 30%;
`;

function Line() {
  return <HorizontalLine />;
}

export default Line;
