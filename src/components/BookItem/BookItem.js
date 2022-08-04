import { useDispatch } from "react-redux";
import { addBookToCart } from "../../store/actions/cartActions";
import IconButton from "@mui/material/IconButton";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import CheckIcon from "@mui/icons-material/Check";
import "./BookItem.css";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const addBookInCart = (id) => {
    dispatch(addBookToCart(id));
  };

  return (
    <div className="BookItem">
      <div className="BookItem-img">
        <img src={book.img} alt={book.title} />
      </div>
      <div>{book.title}</div>
      <div className="BookItem-bottom">
        <div>{book.price} ТГ</div>
        <IconButton color="primary" onClick={() => addBookInCart(book.id)}>
          <ShoppingCartSharpIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </div>
  );
};

export default BookItem;
