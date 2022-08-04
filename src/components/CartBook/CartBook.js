import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addBookToCart } from "../../store/actions/cartActions";
import { removeBookFromCart } from "../../store/actions/cartActions";
import "./CartBook.css";

const CartBook = ({ book }) => {
    const dispatch = useDispatch();
    const addBookInCart = (id) => {
        dispatch(addBookToCart(id))
    }
    const removeBookCart = (id) => {
        dispatch(removeBookFromCart(id));
    }
  return (
    <tr className="CartBook">
      <td className="CartBook-title">{book.title}</td>
      <td>{book.price}</td>
      <td className="CartBook-count">
        <div className="CartBook-btns">
          <IconButton onClick={() => removeBookCart(book.id)} disabled={book.quantity===1}>
            <RemoveIcon />
          </IconButton>
         {book.quantity}
          <IconButton onClick={() => addBookInCart(book.id)}>
            <AddIcon />
          </IconButton>
        </div>
      </td>
      <td className="CartBook-price">
        {parseInt(book.price) * parseInt(book.quantity)}
      </td>
    </tr>
  );
};

export default CartBook;
