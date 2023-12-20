import Header from '@/components/Header'
import Middle from '@/components/Middle';
import styled from "styled-components";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import TableCart from '@/components/TableCart';
import Input from '@/components/Input';
import Line from '@/components/Line';
import Heading from '@/components/Heading';
import RightArrow from '@/components/icons/RightArrow';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';



const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 40px;
  //margin-top: 40px;
`;

const Info = styled.div`
  margin: 0 0 30px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-decoration: underline #a7bbc7;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 4px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 30px 30px 30px;
`;

const ProductInfoCell = styled.td`
  padding: 20px 0;
  p{
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
  img {
    max-width: 70px;
    max-height: 70px;
  }
`;

const QuantityLabel = styled.span`
  background-color: transparent;
  border: 1px solid #2222;
  color: #212121;
  padding: 5px;
  border-radius: 5px;
`;

const Quantity = styled.div`
display: flex;
align-items: center;
`;


const Cities = styled.div`
  display: flex;
  gap: 5px;
`;


export default function CartPage() {
    const {cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [country, setCountry] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
 
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, [clearCart]);
  
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <div>
        <Header />
        <Line />
        <Middle>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be shipped.</p>
            </Box>
          </ColumnsWrapper>
        </Middle>
      </div>
    );
  }
 
  return (
    <div>
      <Header />
      <Line />
      <Middle>
        <Heading>
          Shop <RightArrow /> <p>cart</p>
        </Heading>

        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && <div>Your cart is empty !</div>}

            {products?.length > 0 && (
              <>
                <Info>order information</Info>
                <TableCart>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.photos[0]} alt="" />
                          </ProductImageBox>
                          <p>{product.title}</p>
                        </ProductInfoCell>
                        <td>
                          <Quantity>
                            <Button
                              $quantity
                              onClick={() => lessOfThisProduct(product._id)}
                            >
                              <MinusIcon />
                            </Button>
                            <QuantityLabel>
                              {
                                cartProducts.filter((id) => id === product._id)
                                  .length
                              }
                            </QuantityLabel>
                            <Button
                              $quantity
                              onClick={() => moreOfThisProduct(product._id)}
                            >
                              <PlusIcon />
                            </Button>
                          </Quantity>
                        </td>
                        <td>
                          &#8377;
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>&#8377;{total}</td>
                    </tr>
                  </tbody>
                </TableCart>
              </>
            )}
          </Box>

          {!!cartProducts?.length && (
            <Box>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />

              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />

              <Cities>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </Cities>

              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />

              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />

              <Input
                type="hidden"
                value={cartProducts.join(",")}
                name="products"
              />

              <Button $black $primary $block onClick={goToPayment}>
                Continue To Payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Middle>
    </div>
  );
}
