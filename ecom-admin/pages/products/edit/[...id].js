import Layout from '@/components/Layout'
import ProductForm from '@/components/ProductForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';


const Heading = styled.h1`
  font-size: 18px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export default function EditProduct() {
    const [prodInfo, setProdInfo] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get("/api/handleProducts?id=" + id).then((response) => {
          setProdInfo(response.data);
        });
    }, [id]);

    return (
      <Layout>
        <Heading>Edit Product</Heading>
        {prodInfo && (<ProductForm {...prodInfo} />)}
      </Layout>
    );
}
