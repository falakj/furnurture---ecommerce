import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Middle from "@/components/Middle";
import ImageForProduct from "@/components/ImageForProduct";
import ButtonCart from "@/components/icons/ButtonCart";



const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProdTitle = styled.h2`
  font-size: 20px;
  margin: 30px 0 40px;
  font-weight: 600;
`;


const ProdDesc = styled.p`
  font-size: 14px;
  margin: 30px 0 40px;
  font-weight: 400;
  font-family: "Lora", serif;
  text-transform: none;
  line-height: 2rem;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin: 40px 0;
`;


const PriceRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 40px;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;


export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  
  return (
    <>
      <Header />
      <Middle>
        <Column>
          <Box>
            <ImageForProduct photos={product.photos} />
          </Box>
          <div>
            <ProdTitle>{product.title}</ProdTitle>
            <ProdDesc>{product.description}</ProdDesc>

            <PriceRow>
              <div>
                <Price>INR {product.price}</Price>
              </div>
              <div>
                <Button $primary onClick={() => addProduct(product._id)}>
                  <ButtonCart />
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </Column>
      </Middle>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
