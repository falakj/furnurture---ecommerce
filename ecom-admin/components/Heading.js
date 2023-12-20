import styled from "styled-components";

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: #b19cd8;
`;

export default function Head(props) {
  return <Heading {...props} />;
}
