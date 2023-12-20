import clientPromise from '@/lib/mongodb';
import mongoose from 'mongoose';
import React from 'react'
import { Product } from '@/models/Product';
import { mongooseConnect } from '@/lib/mongoose';
import { isAdmin, optionsAuth } from "./auth/[...nextauth]";


export default async function handleProducts(req, res, ) {
  const { method } = req;
  await mongooseConnect();
  await isAdmin(req, res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id:req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === 'POST') {
    const { title, description, price, photos, cat, propes } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
      photos,
      cat,
      propes,
    });
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const { title, description, price, _id, photos, cat, propes } = req.body;
    await Product.updateOne(
      { _id },
      { title, description, price, photos, cat, propes }
    );
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }

}
