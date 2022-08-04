import { useDispatch } from 'react-redux';
import { addBookToCart } from "../../store/actions/cartActions";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./BookItem.css";

const BookItem = ({ book }) => {
    const dispatch = useDispatch();
    const addBookInCart = (id) => {
        dispatch(addBookToCart(id))
    }

  return (
    <div className="BookItem">
      <img src={book.img} alt={book.title} />
      <div>{book.title}</div>
      <div>
        <b>{book.price} ТГ</b>
      </div>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addBookInCart(book.id)}>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default BookItem;
