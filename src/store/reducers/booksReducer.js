import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, INIT_BOOKS_STATE} from "../actionTypes";

const initialState = {
    products: [],
    error: null,
    loading: false,
}
const booksReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {...state, loading: true};
        case FETCH_BOOKS_SUCCESS:
            return {...state, loading: false, books: action.books};
        case FETCH_BOOKS_ERROR:
            return {...state, loading: false, error: action.error};
        case INIT_BOOKS_STATE:
            return {...initialState}
        default:
            return state;
    }
}

export default booksReducer;