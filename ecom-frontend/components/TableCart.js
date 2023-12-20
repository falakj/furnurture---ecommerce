import React from 'react'
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #da7f8f;
    font-weight: 600;
    font-size: 10px;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default function TableCart(props) {
  return <StyledTable {...props} />;
}
