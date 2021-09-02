import { GET_PRODUCTS, SELECTED_ALL_PRODUCTS, UNSELECTED_ALL_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  selectedProducts:[],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
      case SELECTED_ALL_PRODUCTS:
        return{
          ...state,
          selectedProducts:payload,
        }
        case UNSELECTED_ALL_PRODUCTS:
        return{
          ...state,
          selectedProducts:[],
        }
    default:
      return state;
  }
};
