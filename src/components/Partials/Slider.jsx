import axios from "axios";
import React, { useEffect, useState } from "react";
import product from "../../_assets/images/shop/10.jpg";

const Slider = ({ setProduct, cats, tags }) => {
  const [srch, setSrch] = useState("");

  const handleCatSrch = (e, id) => {
    e.preventDefault();

    axios.get(`http://localhost:5050/category/${id}/product/`).then((res) => {
      setProduct(res.data);
      setSrch("");
    });
  };

  const handleTagSrc = (e, id) => {
    e.preventDefault();
    axios.get(`http://localhost:5050/tags/${id}/product/`).then((res) => {
      setProduct(res.data);
      setSrch("");
    });
  };

  useEffect(() => {
    if (srch !== "") {
      axios.get(`http://localhost:5050/product/?q=${srch}`).then((res) => {
        setProduct(res.data);
      });
    }
  });

  return (
    <>
      <div className="col-md-3 hidden-sm hidden-xs">
        <div className="widget">
          <h6 className="upper">Search Shop</h6>
          <form>
            <input
              type="text"
              placeholder="Search.."
              className="form-control"
              value={srch}
              onChange={(e) => setSrch(e.target.value)}
            />
          </form>
        </div>
        <div className="sidebar ">
          <div className="widget">
            <h6 className="upper">Categories</h6>
            <ul className="nav">
              {cats.map((data) => (
                <li>
                  <a onClick={(e) => handleCatSrch(e, data.id)} href={data.id}>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="widget">
            <h6 className="upper">Popular Tags</h6>
            <div className="tags clearfix">
              {tags.map((data) => (
                <a onClick={(e) => handleTagSrc(e, data.id)} href="/">
                  {data.name}
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <h6 className="upper">Trending Products</h6>
            <ul className="nav product-list">
              <li>
                <div className="product-thumbnail">
                  <img src={product} alt="" />
                </div>
                <div className="product-summary">
                  <a href="/">Premium Suit Blazer</a>
                  <span>$199.99</span>
                </div>
              </li>
              <li>
                <div className="product-thumbnail">
                  <img src={product} alt="" />
                </div>
                <div className="product-summary">
                  <a href="/">Premium Suit Blazer</a>
                  <span>$199.99</span>
                </div>
              </li>
              <li>
                <div className="product-thumbnail">
                  <img src={product} alt="" />
                </div>
                <div className="product-summary">
                  <a href="/">Premium Suit Blazer</a>
                  <span>$199.99</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
