import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getAllSelectedProductsTitle,
  unSelectedProducts,
} from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import "./style.css";

const ProductsList = () => {
    const [selectedAllProduct, setSelectedAllProduct] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const selectedProduct = useSelector(
    (state) => state.product.selectedProducts
  );

    const sortProductsByDate = products.sort((a, b) => {
    return new Date(a.event_date).valueOf() - new Date(b.event_date).valueOf();
  });
  
    useEffect(() => {
    dispatch(getProducts());
  }, []);

    useEffect(() => {
    if (selectedAllProduct) {
      dispatch(
        getAllSelectedProductsTitle(
          products.map((product) => product.event_title)
        )
      );
    } else {
      dispatch(unSelectedProducts());
    }
  }, [selectedAllProduct]);
  
    const submitSelectedProducts = () => {
        alert(selectedProduct);
  };
  
  const submitBtn = {
    padding: "50px",
    padding: "24px 33px 6px 43px",
    margin: "0 824px 0 0",
    color: "whitesmoke",
    backgroundColor: "blueviolet",
    borderRadius: "3px solid white",
    textAlign: "center",
    fontSize: "20px",
  };

  const selectAll = {
    padding: "44px 0 0 798px",
    margin: "0px 0px 0px 13px",
    textAlign: "center",
    fontSize: "20px",
  };
  
  return (
    <>
      <div className="form-check" style={selectAll}>
        <input
          className="form-check-input"
          type="checkbox"
          id="selectAllProducts"
          value={selectedAllProduct}
          onClick={() => setSelectedAllProduct(!selectedAllProduct)}
        />
        <label htmlFor="selectAllProducts" className="form-check-label">
          Select All
        </label>
      </div>
      {selectedProduct.length > 0 ? (
        <button
          className="btn btn-primary"
          style={submitBtn}
          onClick={submitSelectedProducts}
        >
          Submit
        </button>
      ) : null}
      <div className="row">
        {sortProductsByDate.map((productItems) => (
          <ProductCard
            key={productItems.event_id}
            productItems={productItems}
            selectedAllProduct={selectedAllProduct}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
