import Header from '@/components/Header'
import HomeProducts from '@/components/HomeProducts'
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import React from 'react'
import ProdNew from '@/components/ProdNew';
import Line from '@/components/Line';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';



export default function Homepage({ homeProduct, newProducts }) {
  //console.log({newProducts});
  return (
    <div>
      <Header />
      <Line />
      <HomeProducts product={homeProduct} />
      <ProdNew />
      {/* <ProdNew products={newProducts} /> */}
      {/* <AboutUs />
      <Footer/> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const homeProductId = '650c629e1e91d00c69f087dd';
  await mongooseConnect();
  const homeProduct = await Product.findById(homeProductId);
  // const newProducts = await Product.find({}, null, {
  //   sort: { _id: -1 },
  //   limit: 6,
  // });
  return {
    props: {
      homeProduct: JSON.parse(JSON.stringify(homeProduct)),
      //newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
