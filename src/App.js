import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Category from "./components/Admin/Category";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import Tag from "./components/Admin/Tag";
import Dash from "./components/Admin/Dash";
import LogOut from "./components/Admin/LogOut";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import ProductSingle from "./components/Pages/ProductSingle";

import Shop from "./components/Pages/Shop";
import "./_assets/css/bundle.css";
import "./_assets/css/style.css";
import AddTags from "./components/Admin/AddTags";
import ProductsAdd from "./components/Admin/ProductAdd";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //tsg show for table useState

  const [tags, setTags] = useState([]);
  // useEffect
  const [cats, setCats] = useState([]);

  const [product, setProduct] = useState([]);

  //Slug genaretor
  const makeSlug = (data) => {
    let arr = data.split(" ");
    return arr.join("-").toLowerCase();
  };

  useEffect(() => {
    axios.get("http://localhost:5050/tags").then((res) => {
      setTags(res.data.reverse());
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5050/category").then((res) => {
      setCats(res.data.reverse());
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5050/product").then((res) => {
      setProduct(res.data.reverse());
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route
            path="/admin/cate"
            element={<Category cats={cats} makeSlug={makeSlug} />}
          />
          <Route
            path="/admin/product"
            element={<Products product={product} makeSlug={makeSlug} />}
          />
          <Route
            path="/admin/productAdd"
            element={
              <ProductsAdd tags={tags} cats={cats} makeSlug={makeSlug} />
            }
          />
          <Route path="/admin/tags" element={<Tag tags={tags} />} />
          <Route path="/admin/add-tags" element={<AddTags />} />
          <Route path="/admin/dash" element={<Dash />} />
          <Route path="/admin/logout" element={<LogOut />} />
        </Route>
        <Route
          path="/shop"
          element={
            <Shop
              setProduct={setProduct}
              product={product}
              makeSlug={makeSlug}
              cats={cats}
              tags={tags}
            />
          }
        />
        <Route path="/shop/:slug" element={<ProductSingle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
