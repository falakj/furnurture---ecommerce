import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { withSwal } from "react-sweetalert2";
import Head from "@/components/Heading";
import StyledTable from "@/components/Table";
import ButtonForTable from "@/components/ButtonForTable";
import MainButton from "@/components/MainButton";



const Label = styled.label`
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 600;
  color: #046e59;
`;

const FormHeader = styled.div`
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 14px;
  margin: 15px 20px 20px 0;
  border-radius: 10px;
  border: 0.5px solid lightgray;
`;

const Select = styled.select`
  width: 300px;
  padding: 14px;
  margin: 0 20px 20px 0;
  border-radius: 10px;
  border: 0.5px solid lightgray;
`;

const Option = styled.option`
`;


const PropSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PropHead = styled.div`
`;


function Categories({swal}) {
  const [editCat, setEditCat] = useState(null);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(() => { 
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get('/api/handleCategories').then(result => {
      setCategories(result.data);
    });
  }

  async function saveCategory(ev) {
    ev.preventDefault();
    const data = { name, parentCategory, properties: properties.map(p => ({ name:p.name, values:p.values.split(','), })), };
    if (editCat) {
      data._id = editCat._id;
      await axios.put("/api/handleCategories", data);
      setEditCat(null);
    } else {
        await axios.post("/api/handleCategories", data);
    }
    setName('');
    setParentCategory('');
    setProperties([]);
    fetchCategories();
  }

  function editCategory(category) {
    setEditCat(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(category.properties.map(({name,values}) => ({name, values: values.join(',')})));
  }

  async function deleteCategory(category) {
    swal
      .fire({
        title: `Delete Category: ${category?.name} ?`,
        text: "Are you sure?",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async result => {
        if (result.isConfirmed) {
          const { _id } = category;
          await axios.delete('/api/handleCategories?_id=' + _id);
          fetchCategories();
        }
      });
  }

  function addProperty() {
    setProperties((prev) => {
      return [...prev, { name: "", values: "" }];
    });
  }
  
  function updatePropName(index, property, newName) {
    setProperties((prev) => {
      const properts = [...prev];
      properts[index].name = newName;
      return properts;
    });
  }

    function updatePropValues(index, property, newValues) {
      setProperties((prev) => {
        const properts = [...prev];
        properts[index].values = newValues;
        return properts;
      });
  }
  
  function removeProp(indexRem) {
    setProperties(prev => {
      return [...prev].filter((p, propIndex) => {
        return propIndex !== indexRem;
      });
    });
  }



    return (
      <Layout>
        <Head>Categories</Head>
        <Label>
          {editCat ? `Edit Category : ${editCat.name}` : "Create New Category"}
        </Label>

        <Form onSubmit={saveCategory}>
          <FormHeader>
            <Input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder="New Category Name"
            />
            <Select
              onChange={(ev) => setParentCategory(ev.target.value)}
              value={parentCategory}
            >
              <Option value="0">No parent category</Option>
              {categories.length > 0 &&
                categories.map((category) => (
                  <Option key={categories._id} value={category._id}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </FormHeader>

          <PropSection>
            <Label>Properties</Label>
            <ButtonForTable type="button" onClick={addProperty}>
                Add Properties
            </ButtonForTable>
            {properties.length > 0 &&
              properties.map((property, index) => (
                <PropHead key={properties._id}>
                  <Input
                    type="text"
                    value={property.name}
                    onChange={(ev) =>
                      updatePropName(index, property, ev.target.value)
                    }
                    placeholder="Property Name (example: color)"
                  />
                  <Input
                    type="text"
                    value={property.values}
                    onChange={(ev) =>
                      updatePropValues(index, property, ev.target.value)
                    }
                    placeholder="Values (Separate by comma)"
                  />
                  <ButtonForTable onClick={() => removeProp(index)}>
                    Remove
                  </ButtonForTable>
                </PropHead>
              ))}
          </PropSection>
          {editCat && (
            <ButtonForTable
                onClick={() => {
                  setEditCat(null);
                  setName("");
                  setParentCategory();
                  setProperties([]);
                }}
                type="button"
              >
                Cancel
            </ButtonForTable>
          )}
          <MainButton type="submit">
           Add Category
          </MainButton>
        </Form>

        {!editCat && (
          <StyledTable>
            <thead>
              <tr>
                <th>Category</th>
                <th>Parent Category</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 &&
                categories.map((category) => (
                  <tr key={category._id}>
                    <td>{category.name}</td>
                    <td>{category?.parent?.name}</td>
                    <td>
                      <ButtonForTable onClick={() => editCategory(category)}>
                        Edit
                      </ButtonForTable>
                      <ButtonForTable onClick={() => deleteCategory(category)}>
                        Delete
                      </ButtonForTable>
                    </td>
                  </tr>
                ))}
            </tbody>
          </StyledTable>
        )}
      </Layout>
    );
}

export default withSwal(({ swal }, ref) => (
  <Categories swal={swal} />
));



