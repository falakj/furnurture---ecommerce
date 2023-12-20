import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Middle from "./Middle";
import ButtonLink from "./ButtonLink";

const Rectangle = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e1e5ea;
  margin: 120px 0 0 0;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 80px 0;
  gap: 80px;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    text-decoration: none;
  }

  p {
    font-weight: 600;
    margin-top: 16px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  span {
    font-size: 14px;
    font-family: "Lora", serif;
    text-transform: none;
    letter-spacing: 0;
    font-weight: 100;
    margin-top: 15px;
    margin-bottom: 14px;
    cursor: pointer;
  }
`;

const Span1 = styled.div`
`;


const Copyright = styled.div`
  margin: 40px 0 10px 0;
  display: flex;
  justify-content: end;
  font-size: 10px;
  letter-spacing: 0;
  color: #a7bbc7;
`;

export default function Footer() {
  return (
    <>
      <Rectangle>
        <Middle>
          <ProductsGrid>
            <div>
              <p>OUR STORY</p>
              <p>POPULAR CATEGORIES</p>
              <p>CITIES WE DELIVER TO</p>
              <p>FIND A STORE</p>
              <p>CUSTOMER REVIEWS</p>
            </div>

            <div>
              <p>SHOP</p>
              <span>Living Room</span>
              <span>Dining Room</span>
              <span>Kitchenware</span>
              <span>Decor</span>
            </div>

            <div>
              <p>SUPPORT</p>
              <span>Shipping & Returns</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>Partner With Us</span>
            </div>

            <div>
              <p>CONTACT</p>
              <span style={{ display: "inline-block" }}>
                <Image
                  src="/phone.svg"
                  alt="Phone"
                  width={18}
                  height={18}
                  style={{ marginRight: "13px" }}
                />

                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                  style={{ marginRight: "13px" }}
                />

                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={18}
                  height={18}
                  style={{ marginRight: "13px" }}
                />

                <Image
                  src="/mail.svg"
                  alt="Mail"
                  width={18}
                  height={18}
                  style={{ marginRight: "13px" }}
                />

                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                
                />
              </span>

              <span>Be The First To Know</span>
              <span
                style={{
                  borderBottom: "1px solid #212121",
                  color: "#A7BBC7",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                Enter Your Email Address
              </span>

              <ButtonLink href={"/products/"} $primary>
                subscribe
              </ButtonLink>
            </div>
          </ProductsGrid>
        </Middle>
      </Rectangle>

      <Copyright>@ copyright furnurture 2021</Copyright>
    </>
  );
}
