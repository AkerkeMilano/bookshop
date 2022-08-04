import { ADD_BOOK_CART, REMOVE_BOOK_CART } from "../actionTypes";

const initialState = {
  booksInCart: {},
  totalBooks: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_CART:
      const cartCopy = { ...state.booksInCart };
      if (!(action.id in cartCopy)) {
        cartCopy[action.id] = 1;
      } else {
        cartCopy[action.id] += 1;
      }
      return {
        ...state,
        booksInCart: cartCopy,
        totalBooks: state.totalBooks + 1,
      };
    case REMOVE_BOOK_CART:
      const _cartCopy = { ...state.booksInCart };
      if (action.id in _cartCopy) {
        _cartCopy[action.id] -= 1;
      } 
      return {
        ...state,
        booksInCart: _cartCopy,
        totalBooks: state.totalBooks - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
