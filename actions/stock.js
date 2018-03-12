/**
 * Created by jocelio on 12/03/18.
 */
import { axiosInstance } from "../factory/AxiosFactory";

export const GET_STOCK = 'GET_STOCK'


const axios = axiosInstance();

export const getStock = () => {

    return {
        type: GET_STOCK,
        payload: axios.get(`/stock`)
    }
}
