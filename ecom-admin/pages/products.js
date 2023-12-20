import ButtonForTable from '@/components/ButtonForTable';
import Head from '@/components/Heading';
import Layout from '@/components/Layout'
import MainButton from '@/components/MainButton';
import StyledTable from '@/components/Table';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';




export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/handleProducts').then(response => {
      setProducts(response.data);
    });
  }, []);
  

  return (
    <Layout>
      <Head>Products</Head>
      <MainButton>
        <Link href="/products/new">Add New Product</Link>
      </MainButton>
      <StyledTable>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <ButtonForTable>
                  <Link href={"/products/edit/" + product._id}>Edit</Link>
                </ButtonForTable>
                <ButtonForTable>
                  <Link href={"/products/delete/" + product._id}>Delete</Link>
                </ButtonForTable>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Layout>
  );
}
