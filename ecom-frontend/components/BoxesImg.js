import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Wishlist from "./icons/Wishlist";
import { WishlistContext } from "@/components/WishlistContext";
import ButtonCart from "./icons/ButtonCart";

const ProductWrapper = styled.div`
  position: relative;
`;

const WhiteBox = styled.div`
  background-color: #fff;
  //border: 0.5px solid #a7bbc7;
  padding: 0 20px 20px 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
    opacity: 40%;
  }

  .hover-button {
    opacity: 0;
    transition: opacity 0.3s ease;
    position: relative;
    //position: absolute;
    margin-top: -45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover .hover-button {
    opacity: 1;
  }
`;

const Title = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: #212121;
  text-decoration: none;
  margin: 0;
  letter-spacing: 1px;

  /* .hover-text {
    color: #da7f8f;
    transition: opacity 0.3s ease;
    transform: translate(-50%, -50%);
  } */

 
    &:hover {
      color: #da7f8f;
    }
  
`;

const ProductInfoBox = styled.div`
  margin-top: 16px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  gap: 100px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Price = styled.div`
  font-size: 12px;
`;

const ButWish = styled.button`
background-color:transparent ;
border:none;
cursor:pointer ;
`;


export default function BoxesImg({ _id, title, description, price, photos }) {
  const { addProduct } = useContext(CartContext);
  const { addWish } = useContext(WishlistContext);
  const url = "/product/" + _id;
  
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>
          <img src={photos?.[0]} alt="" />
          <Button
            onClick={() => addProduct(_id)}
            $primary
            className="hover-button"
          >
            <ButtonCart />
            Add to cart
          </Button>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>&#8377; {price}</Price>
          <ButWish onClick={() => addWish(_id)}>
            <Wishlist />
          </ButWish>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
