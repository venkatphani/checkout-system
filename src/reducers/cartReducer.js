import { INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM, ADD_TO_CART } from "../actionTypes/cartActionTypes";
import { pizzas } from "../utils/helpers";

const initState = {
  items: pizzas,
  cart: [],
};

const cartReducer = (state = initState, action) => {
  const modifiedItems = JSON.parse(JSON.stringify(state.items));
  let modifiedCart = JSON.parse(JSON.stringify(state.cart));
  switch (action.type) {
    case ADD_TO_CART: {
      const { payload } = action;
      const { item: pizza } = payload;
      const { id } = pizza;
      const updatedItems = modifiedItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      const alreadyAdded = modifiedCart.find((item) => item.id === id);
      if (alreadyAdded) {
        modifiedCart = modifiedCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        pizza.quantity += 1;
        modifiedCart.push(pizza);
      }
      return {
        ...state,
        items: updatedItems,
        cart: modifiedCart,
      };
    }

    case INCREASE_QUANTITY: {
      const { payload } = action;
      const { id } = payload;
      const updatedItems = modifiedItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      const updatedCart = modifiedCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      return {
        ...state,
        items: updatedItems,
        cart: updatedCart,
      };
    }

    case DECREASE_QUANTITY: {
      const { payload } = action;
      const { id } = payload;
      const updatedItems = modifiedItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
      const updatedCart = modifiedCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
      return {
        ...state,
        items: updatedItems,
        cart: updatedCart,
      };
    }

    case DELETE_ITEM: {
      const { payload } = action;
      const { id } = payload;
      const updatedItems = modifiedItems.map((item) => (item.id === id ? { ...item, quantity: 0 } : item));
      const updatedCart = modifiedCart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: updatedCart,
        items: updatedItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
