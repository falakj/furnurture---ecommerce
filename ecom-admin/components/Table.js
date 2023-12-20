import styled from "styled-components";
import { ButtonForTable } from '@/components/ButtonForTable';


const TableSt = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    text-transform: uppercase;
  }

  td.text-green {
    color: #046E59;
    font-weight: 700;
  }

  td.text-red {
    color: #bea9df;
    font-weight: 700;
  }
`;


export default function StyledTable(props) {
  return <TableSt {...props} />;
}
