import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Middle from "./Middle";

const Rectangle = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e1e5ea;
  margin: 100px 0;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 80px;
  gap: 60px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #212121;
  }

  p {
    display: flex;
    font-weight: 600;
    margin-top: 20px;
  }

  h5 {
    display: flex;
    font-size: 11.5px;
    font-family: "Lora", serif;
    text-transform: none;
    letter-spacing: 0;
    font-weight: 100;
    margin-top: 0px;
  }
`;

export default function AboutUs() {
  return (
    <>
      <Rectangle>
        <Middle>
          <ProductsGrid>
            <div>
              <Image
                src="/designs.svg"
                alt="Living Room"
                width={60}
                height={60}
              />
              <p>Designs that last</p>
              <h5>
                Best materials from authentic factories.
              </h5>
            </div>

            <div>
              <Image
                src="/ecofriendly.svg"
                alt="Living Room"
                width={60}
                height={60}
              />
              <p>Eco friendly</p>
              <h5>
                We use sustainable materials.
              </h5>
            </div>

            <div>
              <Image
                src="/comfortable.svg"
                alt="Living Room"
                width={60}
                height={60}
              />
              <p>comfortable</p>
              <h5>
               10 years warranty assured.
              </h5>
            </div>
          </ProductsGrid>
        </Middle>
      </Rectangle>
    </>
  );
}
