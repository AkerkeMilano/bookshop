import "./Cart.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartTable from "../../components/CartTable/CartTable";

const Cart = () => {
  const { booksInCart } = useSelector((state) => state.cart);
  const { books } = useSelector((state) => state.books);
  const [cartBooks, setCartBooks] = useState([]);
  useEffect(() => {
    const tempCart = [];
    Object.keys(booksInCart).forEach((bookId) => {
      books.forEach((book) => {
        if (book.id === bookId) {
          let chartBook = { ...book };
          chartBook.quantity = booksInCart[bookId];
          tempCart.push(chartBook);
        }
      });
    });
    setCartBooks(tempCart);
  }, [books, booksInCart]);
  return (
    <div className="Cart">
      <h2>Корзина</h2>
      {cartBooks.length > 0 ? 
      <div className="Cart-block">
        <CartTable cartBooks={cartBooks} />
        <div className="order-block">
          <div>Всего стоимость: </div>
          {cartBooks.reduce(function (acc, book) {
            return acc + parseInt(book.price) * parseInt(book.quantity);
          }, 0)}{" "}
          T
        </div>
      </div> : <div className="Cart-no-books">Книги не выбраны</div>}
    </div>
  );
};

export default Cart;
