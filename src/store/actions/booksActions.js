import axiosUrl from "../../axiosUrl";
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, INIT_BOOKS_STATE} from "../actionTypes";

const fetchBooksRequest = () => {
    return {type: FETCH_BOOKS_REQUEST};
}

const fetchBooksSuccess = (books) => {
    return{type: FETCH_BOOKS_SUCCESS, books}
}

const fetchBooksError = (error) => {
    return {type: FETCH_BOOKS_ERROR, error}
}

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch(fetchBooksRequest());
        try{
            const response = await axiosUrl.get("./bookshop.json");
            const resArr = Object.keys(response.data).map(item => {
                return {id: item, ...response.data[item]}
            })
            dispatch(fetchBooksSuccess(resArr));
        } catch(e) {
            dispatch(fetchBooksError(e));
        }
    }
};

export const initBookStates = () => {
    return {type: INIT_BOOKS_STATE};
};