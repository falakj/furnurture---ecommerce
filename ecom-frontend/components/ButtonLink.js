import Link from 'next/link'
import React from 'react'
import { StButton } from "@/components/Button";
import styled from 'styled-components';

const LinkSt = styled(Link)`
   ${StButton}
`;

export default function ButtonLink(props) {
    return (
        <LinkSt {...props} />
    );
}
