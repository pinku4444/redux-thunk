import { FETCH_USER_ERROR,
        FETCH_USER_LOADING,
        FETCH_USER_SUCCESS} from '../../actions/type'


let initialState = {
    loading : false,
    users : [],
    error : null
};


const userReducer = (state = initialState,actions) => {
    switch(actions.type) {
        case FETCH_USER_LOADING : 
            return {
                ...state,
                loading: true,
                error: null
            }
            break;
        case FETCH_USER_SUCCESS : 
            return {
                ...state,
                loading : false,
                users : actions.users,
                error : null
            } 
            break;
        case FETCH_USER_ERROR : 
            return {
                ...state,
                loading : false,
                error : actions.error
            }
        default :
            return state;
    }
}

export default userReducer;