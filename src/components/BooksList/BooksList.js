import BookItem from "../BookItem/BookItem";
import { nanoid } from 'nanoid';
import "./BooksList.css";

const BooksList = ({books}) => {
    return (
        <div className="BooksList">
            {books.map(book => {
                return <BookItem key={nanoid()}book={book}/>})}
        </div>
    )
};

export default BooksList;