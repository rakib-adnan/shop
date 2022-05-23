import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsAdd = ({ tags, cats, makeSlug }) => {
  // ===== category add form state =======>

  // const [catAddFrm, setCatAddForm] = useState(false);
  // const [catEditForm, setEidtForm] = useState(false);

  // // handle add form

  // const handleFrmshow = () => {
  //   setCatAddForm(true);
  //   setEidtForm(false);
  //   setCat({
  //     name : '',
  //     id   : ''
  //   })
  // }

  //   // < ===== input data get ======== >
  //   const [cat, setCat] = useState([]);
  //   const [tags, setTags] = useState([]);

  //    //Slug genaretor
  // const makeSlug = (data) =>{
  //   let arr = data.split(' ') ;
  //   return arr.join('-').toLowerCase();

  // }

  const [inputs, setInputs] = useState({
    name: "",
    reg_price: "",
    sale_price: "",
    sort_dec: "",
    rating: "",
    photo: "",
    categoryId: "",
    tagsId: "",
  });

  const chandHandler = (event) => {
    event.preventDefault();
    setInputs({
      [event.target.name]: event.target.value,
    });
  };

  const handleProductAdd = (e) => {
    e.preventDefault();
    let slug = makeSlug(inputs.name);
    axios
      .post("http://localhost:5050/product", {
        name: inputs.name,
        slug: slug,
        reg_price: inputs.reg_price,
        sale_price: inputs.sale_price,
        sort_dec: inputs.sort_dec,
        rating: inputs.rating,
        photo: inputs.photo,
        categoryId: inputs.categoryId,
        tagsId: inputs.tagsId,
      })
      .then((res) => {
        setInputs({
          name: "",
          reg_price: "",
          sale_price: "",
          sort_dec: "",
          rating: "",
          photo: "",
          categoryId: "",
          tagsId: "",
        });
      });
  };

  return (
    <>
      <h1>Add New Product</h1>
      <hr />
      <div className="btn">
        <Link to={"/admin/product"} className="btn btn-sm btn-primary ">
          All-Product{" "}
        </Link>
      </div>
      <br />
      <br />

      <Form onSubmit={handleProductAdd}>
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={inputs.name}
            onChange={chandHandler}
          />
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Regular Price</Form.Label>
          <Form.Control
            type="text"
            value={inputs.reg_price}
            onChange={(e) =>
              setInputs({ ...inputs, reg_price: e.target.value })
            }
          />
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Sale Price</Form.Label>
          <Form.Control
            type="text"
            value={inputs.sale_price}
            onChange={(e) =>
              setInputs({ ...inputs, sale_price: e.target.value })
            }
          />
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Sort Desc</Form.Label>
          <textarea
            className="form-control"
            value={inputs.sort_dec}
            onChange={(e) => setInputs({ ...inputs, sort_dec: e.target.value })}
          ></textarea>
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            value={inputs.rating}
            onChange={(e) => setInputs({ ...inputs, rating: e.target.value })}
          />
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            value={inputs.photo}
            onChange={(e) => setInputs({ ...inputs, photo: e.target.value })}
          />
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Categories</Form.Label>
          <select
            className="form-control"
            name=""
            id=""
            value={inputs.tagsId}
            onChange={(e) => setInputs({ ...inputs, tagsId: e.target.value })}
          >
            <option value="">-select-</option>
            {cats.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </Form.Group>{" "}
        <br />
        <Form.Group>
          <Form.Label>Tag</Form.Label>
          <select
            className="form-control"
            name=""
            id=""
            value={inputs.categoryId}
            onChange={(e) =>
              setInputs({ ...inputs, categoryId: e.target.value })
            }
          >
            <option value="">-select-</option>
            {tags.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </Form.Group>{" "}
        <br />
        <Button type="submit">ADD NOW</Button>
      </Form>
    </>
  );
};

export default ProductsAdd;
