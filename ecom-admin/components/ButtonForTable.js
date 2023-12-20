import styled from "styled-components";


const TableBt = styled.button`
  background-color: #212121;
  margin-right: 10px;
  color: #ffff;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  width: fit-content;
  padding: 10px 16px;
  border: 1px solid #212121;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 600ms ease, color 800ms ease;
  
  a {
    text-decoration: none; 
    color: inherit; 
  }
  
  &:hover {
    background-color: #ffff;
    color: #212121;
  }
`;



export default function ButtonForTable(props) {
  return <TableBt {...props} />;
}
