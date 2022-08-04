import CartBook from "../CartBook/CartBook";
import "./CartTable.css";

const CartTable = ({cartBooks}) => {
  return (
    <div className="Cart-table">
      <table>
        <tr>
          <th className="cart-first-colm">Книги</th>
          <th>Цена, T</th>
          <th>Кол-во</th>
          <th>Всего, T</th>
        </tr>
        {cartBooks.map((book) => {
          return <CartBook key={book.id} book={book} />;
        })}
      </table>
    </div>
  );
};

export default CartTable;
