import "./BookItem.css";

const BookItem = ({book}) => {
    return (
        <div className="BookItem">
            <img src={book.img} alt={book.title} />
            <div>{book.title}</div>
            <div><b>{book.price} ТГ</b></div>
        </div>
    )
};

export default BookItem;