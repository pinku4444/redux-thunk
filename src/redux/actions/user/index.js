import {FETCH_USER_LOADING, FETCH_USER_SUCCESS,FETCH_USER_ERROR} from '../type';
import API from '../../../utils/api';


const setLoadingUser = () => {
    return {
        type: FETCH_USER_LOADING
    }
}

const setErrorUser = () => {
    return {
        type: FETCH_USER_ERROR,
        error: "Something went wrong"
    }
}

export const fetchUser = () => async (dispatch) => {
    dispatch(setLoadingUser());
    try {
        const users = await API.get('/users');
        dispatch({
            type: FETCH_USER_SUCCESS,
            users: users.data
        })

    }catch(ex) {
        dispatch(setErrorUser())
    }
    
}