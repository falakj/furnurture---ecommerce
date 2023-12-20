import React, { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Middle from "@/components/Middle";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import BoxesImg from "@/components/BoxesImg";
import DownArrow from "@/components/icons/DownArrow";
import Line from "@/components/Line";
import RightArrow from "@/components/icons/RightArrow";
import Heading from "@/components/Heading";



const AllProductsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
`;

const Filters = styled.div`
display: flex;
gap: 40px;
`;

const DropdownButton = styled.div`
  background-color: transparent;
  color: #212121;
  margin-bottom: 40px;
  position: relative;
  gap: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      padding: 12px 16px;
      text-decoration: none;
      &:hover {
        background-color: #d2efee;
      }
    }
  }

  &:hover .dropdown-content {
    display: flex;
    flex-direction: column;
    top: 100%;
    
  }
`;


export default function Products({ products }) {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  let sortedProducts = [...products];
  if (sortOption === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Header />
      <Line />
      <Middle>
        <Heading>
          Shop <RightArrow /> <p>All products</p>
        </Heading>
        <Filters>
          <DropdownButton>
            Sort by <DownArrow />
            <div className="dropdown-content">
              <a onClick={() => handleSortChange("price-low-high")}>
                Price (Low to High)
              </a>
              <a onClick={() => handleSortChange("price-high-low")}>
                Price (High to Low)
              </a>
            </div>
          </DropdownButton>
          <DropdownButton>
            Filter by <DownArrow />
            {/* <div className="dropdown-content">
              <a onClick={() => handleSortChange("price-low-high")}>
                Price (Low to High)
              </a>
              <a onClick={() => handleSortChange("price-high-low")}>
                Price (High to Low)
              </a>
            </div> */}
          </DropdownButton>
        </Filters>

        <AllProductsStyle>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <BoxesImg key={product._id} {...product} />
            ))
          ) : (
            <p>No products match the selected criteria.</p>
          )}
        </AllProductsStyle>
      </Middle>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
