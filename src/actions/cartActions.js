import { INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM, ADD_TO_CART } from "../actionTypes/cartActionTypes";

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { id },
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: { id },
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: { id },
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: { item },
  };
};
