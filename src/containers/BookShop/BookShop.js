import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksList from "../../components/BooksList/BooksList";
import { fetchBooks } from "../../store/actions/booksActions";
import "./BookShop.css";

const BookShop = () => {
    const dispatch = useDispatch();
    const {books, loading} = useSelector(state => state.books);
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    return books && 
    <div className="BookShop">
        <BooksList books={books} />
    </div> 
};

export default BookShop;