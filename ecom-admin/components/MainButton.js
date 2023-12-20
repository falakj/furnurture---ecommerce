import styled from "styled-components";


const Bt = styled.button`
  display: flex;
  align-items: center;
  background-color: #212121;
  margin-right: 10px;
  color: #ffff;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  width: fit-content;
  padding: 12px 18px;
  border: 1px solid #212121;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 600ms ease, color 800ms ease;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    height: 24px;
    margin-right: 5px;
  }

  &:hover {
    background-color: #ffff;
    color: #212121;
  }
`;



export default function MainButton(props) {
  return <Bt {...props} />;
}
