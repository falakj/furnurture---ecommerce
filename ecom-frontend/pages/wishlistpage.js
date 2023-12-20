import Header from "@/components/Header";
import Middle from "@/components/Middle";
import styled from "styled-components";
import Button from "@/components/Button";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { WishlistContext } from "@/components/WishlistContext";
import RightArrow from "@/components/icons/RightArrow";
import Heading from "@/components/Heading";
import RemoveIcon from "@/components/icons/RemoveIcon";
import Line from "@/components/Line";

const ColumnsWrapper = styled.div``;

const Wishes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  p{
    font-size: 12px;
    font-weight: 500;
  }
`;

const ProductInfoCell = styled.div`
  padding: 20px 0;
  position: relative; /* Add relative positioning */
`;

const ProductImageBox = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative; 
  img {
    max-width: 100px;
    max-height: 100px;
  }
`;

const RemoveButton = styled(Button)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute; 
  top: -15px;
  right: -36px; 
`;

export default function WishlistPage() {
  const { wishProducts, removeWish } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (wishProducts?.length > 0) {
      axios.post("/api/wishlist", { ids: wishProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [wishProducts]);

  return (
    <div>
      <Header />
      <Line />
      <Middle>
        <Heading>
          Shop <RightArrow /> <p>wishlist</p>
        </Heading>
        <ColumnsWrapper>
          {!wishProducts?.length && <div>Your wishlist is empty!</div>}

          {products?.length > 0 && (
            <Wishes>
              {products.map((product) => (
                <div key={product._id}>
                  <ProductInfoCell>
                    <ProductImageBox>
                      <img src={product.photos[0]} alt="" />
                      <RemoveButton onClick={() => removeWish(product._id)}>
                        <RemoveIcon/>
                      </RemoveButton>
                    </ProductImageBox>
                    <p>{product.title}</p>
                  </ProductInfoCell>
                </div>
              ))}
            </Wishes>
          )}
        </ColumnsWrapper>
      </Middle>
    </div>
  );
}
