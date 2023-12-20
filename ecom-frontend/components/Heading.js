import styled from "styled-components";

const StyledHeading = styled.div`
  font-size: 11px;
  margin: 30px 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    color: #da7f8f;
    text-decoration: underline #a7bbc7;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 4px;
  }
`;

export default function Heading(props) {
  return <StyledHeading {...props} />;
}
