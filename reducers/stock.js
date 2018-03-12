import { GET_STOCK } from "../actions/stock";


export default (state = [], action) => {

    switch (action.type) {

        case GET_STOCK:
            return {...state, stockList: action.payload.data}

        default:
            return state;

    }

};
