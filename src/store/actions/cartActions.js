import { ADD_BOOK_CART, REMOVE_BOOK_CART } from "../actionTypes";

export const addBookToCart = (id) => {
  return { type: ADD_BOOK_CART, id };
};

export const removeBookFromCart = (id) => {
  return { type: REMOVE_BOOK_CART, id };
};
