import Layout from '@/components/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';


const Heading = styled.h1`
  font-size: 18px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

 const ButtonWrap = styled.div`
   display: flex;
 `;


const Button = styled.button`
  margin: 5px;
  background-color: #212121;
  color: #ffff;
  font-weight: 500;
  font-size: 10px;
  width: auto;
  padding: 8px 16px;
  border: 1px solid #212121;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 600ms ease, color 800ms ease;

  &:hover {
    background-color: #ffff;
    color: #212121;
  }
`;

export default function DeleteProduct() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/handleProducts?id=' + id).then(response => {
      setProduct(response.data);
    });
  }, [id]);

  function goBack() {
    router.push('/products');
  }

  async function deleteProduct() {
    await axios.delete('/api/handleProducts?id=' + id);
    goBack();
  }

    return (
      <Layout>
        <Heading>
          Do you really want to delete &nbsp;`{product?.title}` ?
        </Heading>
        <ButtonWrap>
          <Button onClick={deleteProduct}>Yes</Button>
          <Button onClick={goBack}>No</Button>
        </ButtonWrap>
      </Layout>
    );
}
