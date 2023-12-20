import React from 'react'
import styled from 'styled-components';
import Middle from './Middle';
// import BoxesImg from './BoxesImg';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './ButtonLink';


const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 30px;
  gap: 60px;

  a{
    text-decoration: none;
    color: #212121;
  }

  p{
    display: flex;
    justify-content: center;
    margin-left: -50px;
    font-weight: 600;
    cursor: pointer;
  }

`;

const Heading = styled.div`
 p{
font-weight: 500;
 font-size: 22px;
  margin: 30px 0 20px;
  display: flex;
  justify-content: center;
 }
  `;

const ButtonHome = styled.div`
  display: flex;
  gap: 10px;
  margin: 50px 0 50px -50px;
  justify-content: center;
`;



export default function ProdNew() {
  const url = "/products";
  return (
    <Middle>
      <Heading>
        <p>our best collection for you</p>
      </Heading>

      <ProductsGrid>
        <div>
          <Link href={url}>
            <Image
              src="/livingroom.svg"
              alt="Living Room"
              width={250}
              height={250}
            />
            <p>Living room</p>
          </Link>
        </div>

        <div>
          <Link href={url}>
            <Image
              src="/diningroom.svg"
              alt="Dining Room"
              width={250}
              height={250}
            />
            <p>Dining Room</p>
          </Link>
        </div>

        <div>
          <Link href={url}>
            <Image src="/beedroom.svg" alt="Bedroom" width={250} height={250} />
            <p>Bedroom</p>
          </Link>
        </div>

        <div>
          <Link href={url}>
            <Image
              src="/bathroom.svg"
              alt="Bathroom"
              width={250}
              height={250}
            />
            <p>Bathroom</p>
          </Link>
        </div>

        <div>
          <Link href={url}>
            <Image
              src="/kitchenware.svg"
              alt="Kitchenware"
              width={250}
              height={250}
            />
            <p>Kitchenware</p>
          </Link>
        </div>

        <div>
          <Link href={url}>
            <Image src="/decor.svg" alt="Decor" width={250} height={250} />
            <p>Decor</p>
          </Link>
        </div>
      </ProductsGrid>
      <ButtonHome>
        <ButtonLink href={"/products/"} $primary>
          see more
        </ButtonLink>
      </ButtonHome>
    </Middle>
  );
}
