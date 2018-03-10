import { DO_LOGIN, USER_INFO } from './../actions/login'


export default (state = [], action) => {

    switch (action.type) {

        case DO_LOGIN:
            return {...state, login: action.payload.data}
        case USER_INFO:
            return {...state, userInfo: action.payload.data}

        default:
            return state;

    }

};
