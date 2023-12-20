import styled from "styled-components";
import BoxesImg from "@/components/BoxesImg";

const AllCategoryStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

const AllProductsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

export default function AllCategories({ categories, products }) {
    return (
      <>
        <AllCategoryStyle>
          {categories?.length > 0 &&
            categories.map((category) => (
              <div key={category._id}>
                {category.name}
                <AllProductsStyle>
                  {products?.length > 0 &&
                    products.map((product) => (
                      <BoxesImg key={product._id} {...product} />
                    ))}
                </AllProductsStyle>
              </div>
            ))}
        </AllCategoryStyle>
      </>
    );
}
