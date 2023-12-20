import Head from '@/components/Heading';
import Layout from '@/components/Layout'
import ProductForm from '@/components/ProductForm';
import React, { useState } from 'react';


export default function New() {

  return (
    <Layout>
      <Head>New Product</Head>
      <ProductForm />
    </Layout>
  );
}
