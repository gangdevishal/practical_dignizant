import axios from "axios";
import { GET_PRODUCTS, SELECTED_ALL_PRODUCTS, UNSELECTED_ALL_PRODUCTS } from "./types"


export const getProducts = () => async dispach => {
  const result = await axios.get("http://localhost:8000/data");
  dispach({
    type:GET_PRODUCTS,
    payload:result.data,
  });
}

export const getAllSelectedProductsTitle = (title) => async dispach => {
  dispach({
    type:SELECTED_ALL_PRODUCTS,
    payload:title,
  });
}

export const unSelectedProducts = () => async dispach => {
  dispach({
    type:UNSELECTED_ALL_PRODUCTS,
  });
}


