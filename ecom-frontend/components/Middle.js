import React from 'react'
import { styled } from 'styled-components'

const ChildDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

export default function Middle({children}) {
  return (
      <ChildDiv>{children}</ChildDiv>
  )
}
