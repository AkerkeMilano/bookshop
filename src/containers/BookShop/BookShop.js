import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/actions/booksActions";
import { Container } from "@mui/material";
import Search from "../../components/Search/Search";
import "./BookShop.css";

const BookShop = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    books && (
      <Container>
        <div className="BookShop">
          <Search books={books} />
        </div>
      </Container>
    )
  );
};

export default BookShop;
