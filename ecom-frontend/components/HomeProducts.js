import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Middle from './Middle';
import Image from 'next/image';
import Button from './Button';
import ButtonLink from './ButtonLink';
import CartIcon from './icons/CartIcon';
import { CartContext } from './CartContext';
import ButtonCart from './icons/ButtonCart';

const CenterSt = styled.div`
   color: #212121;
   padding: 40px 0 50px 0;
`;

const Heading = styled.div`
margin-top: 20px;

  p {
    font-size: 13px;
    font-weight: normal;
  }
  h3 {
    font-size: 26px;
    font-weight: normal;
  }
  h2{
    font-size: 27px;
    font-weight: normal;
  }
`;


const ImgOuter = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    //gap: 40px;

    img{
        max-width: 100%;
        margin-left: 8rem;
    }
`;

const MainText = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonHome = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
`;



export default function HomeProducts({ product }) {
  const { addProduct } = useContext(CartContext);
  function addHProductToCart() {
    addProduct(product._id);
  }

  return (
    <CenterSt>
      <Middle>
        <ImgOuter>
          <MainText>
          
              <Heading>
                <p>CREATE THE HOME OF YOUR DREAMS</p>
                <h3>MINIMALIST DESIGN</h3>
                <h2> MODERN FURNITURE</h2>
              </Heading>

              <ButtonHome>
              <ButtonLink href={"/products"} $primary>
                EXPLORE
              </ButtonLink>
                {/* <Button onClick={addHProductToCart} $primary>
                  <ButtonCart />
                  ADD TO CART
                </Button> */}
              </ButtonHome>

          </MainText>
          <MainText>
            <Image
              src="/home.svg"
              alt="HomeImage"
              width={450}
              height={350}
              priority
            />
          </MainText>
        </ImgOuter>
      </Middle>
    </CenterSt>
  );
}
 