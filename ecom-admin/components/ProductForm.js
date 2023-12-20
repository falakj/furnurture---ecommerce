import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import Loader from "@/components/Loader";
import { ReactSortable } from "react-sortablejs";
import MainButton from "./MainButton";



const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-weight: 500;
    text-transform: uppercase;
    color: crimson;
    margin-top: 10px;
  }
`;

const Input = styled.input`
  width: 300px;
  padding: 16px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0.5px solid #212121;
`;

const Textarea = styled.textarea`
  width: 300px;
  padding: 16px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0.5px solid #212121;
`;


const Select = styled.select`
  width: 300px;
  padding: 14px;
  margin: 0 20px 20px 0;
  border-radius: 10px;
  border: 0.5px solid #212121;
`;

const Option = styled.option``;


const Properts = styled.div`
display: flex;
flex-direction: column;
`;

const PropProduct = styled.div`
`;

const ProdHead = styled.div`
display: flex;
font-weight: 500;
gap: 20px;
margin-top: 15px;
`;

const Loads = styled.div`
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotosContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: start;
`;

const ShowPhoto = styled.div`
`;

const ShowPhotos = styled.img`
    height: 80px;
    border-radius: 8px;
`;


export default function ProductForm({_id,title:currTitle, description:currDesc, price:currPrice, photos:currPhotos, cat: currCat, propes:oldProp,}) {
  const [title, setTitle] = useState(currTitle || "");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState(currDesc || "");
  const [price, setPrice] = useState(currPrice || "");
  const [showProducts, setShowProducts] = useState(false);
  const [photos, setPhotos] = useState(currPhotos || []);
  const [isUploading, setIsUploading] = useState(false);
  const [cat, setCat] = useState(currCat || "");
  const [productProp, setProductProp] = useState(oldProp || {});
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/handleCategories').then(result => {
      setCategories(result.data);
    })
   }, []);
  
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      photos,
      cat,
      propes: productProp,
    };
    if (_id) {
      //updating product
      await axios.put("/api/handleProducts", { ...data, _id });
    } else {
      //creating product
      await axios.post("/api/handleProducts", data);
    }
    setShowProducts(true);
  }

  if (showProducts) {
    router.push("/products");
  }

  async function uploadPh(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }
      
      const res = await axios.post('/api/uploadPhotos', data);
      setPhotos(oldPhotos => {
        return [...oldPhotos, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function sortPhotosOrder(photos) {
    setPhotos(photos);
  }

  const properts = [];
  if (categories.length > 0 && cat) {
    let selectedCat = categories.find(({ _id }) => _id === cat);
    properts.push(...selectedCat.properties);
    while (selectedCat?.parent?._id) {
      const parentCat = categories.find(({ _id }) => _id === selectedCat?.parent?._id);
      properts.push(...parentCat.properties);
      selectedCat = parentCat;
    }
  }

  function changeProductProp(popName, value) {
    setProductProp(prev => {
      const newProdProp = { ...prev };
      newProdProp[popName] = value;
      return newProdProp;
    });
  }


  return (
    <>
      <Form onSubmit={saveProduct}>
        <label>Product Name</label>
        <Input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Product Name"
        />

        <label>Category Name</label>
        <Select value={cat} onChange={(ev) => setCat(ev.target.value)}>
          <Option value="">Uncategorized</Option>
          {categories.length > 0 &&
            categories.map((catg) => (
              <Option key={categories._id} value={catg._id}>
                {catg.name}
              </Option>
            ))}
        </Select>

        <label>Description</label>
        <Textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          placeholder="Description"
        />

        <label>
          Price <span>(INR &#8377;)</span>
        </label>
        <Input
          type="number"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          placeholder="Price"
        />

        <Properts>
          <label>Properties</label>

          {properts.length > 0 &&
            properts.map((pop) => (
              <ProdHead key={pop.id}>
                <PropProduct>{pop.name}</PropProduct>
                <Select
                  value={productProp[pop.name]}
                  onChange={(ev) =>
                    changeProductProp(pop.name, ev.target.value)
                  }
                >
                  {pop.values.map((v) => (
                    <Option key={pop.name} value={v}>
                      {v}
                    </Option>
                  ))}
                </Select>
              </ProdHead>
            ))}
        </Properts>

        <label>Photos</label>
        <PhotosContainer>
          <Input type="file" onChange={uploadPh} />
          <ReactSortable list={photos} setList={sortPhotosOrder}>
            {!!photos?.length &&
              photos.map((link) => (
                <ShowPhoto key={link}>
                  <ShowPhotos src={link} alt="" />
                </ShowPhoto>
              ))}
          </ReactSortable>
          {isUploading && (
            <Loads>
              <Loader />
            </Loads>
          )}
          {!photos?.length && <p>No Photos for this product</p>}
        </PhotosContainer>

        <MainButton type="submit">
          Add or Save Product
        </MainButton>
      </Form>
    </>
  );
}
