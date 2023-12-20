import styled from "styled-components";
import BoxesImg from '@/components/BoxesImg';

const AllProductsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

export default function AllProducts({ products }) {

  return (
    <AllProductsStyle>
      {products?.length > 0 &&
        products.map((product) => <BoxesImg key={product._id} {...product} />)}
    </AllProductsStyle>
  );
}

