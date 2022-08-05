import CartBook from "../CartBook/CartBook";
import "./CartTable.css";

const CartTable = ({ cartBooks }) => {
  return (
    <div className="Cart-table">
      <table>
        <thead>
          <tr>
            <th className="cart-first-colm">Книги</th>
            <th>Цена, T</th>
            <th>Кол-во</th>
            <th>Всего, T</th>
          </tr>
        </thead>
        <tbody>
          {cartBooks.map((book) => {
            return <CartBook key={book.id} book={book} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
