import { LOGIN, LOGOUT } from '../../actions/auth';

const initialState = {
    isLogged: false,
    loading: false,
};

const authReducer = ( state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return ({
                ...state,
                isLogged:true,
                loading: false,
            });

        case LOGOUT:
            return ({
                ...state,
                isLogged:false,
                loading: false,
            })
        default:
            return state
    }
};

export default authReducer;