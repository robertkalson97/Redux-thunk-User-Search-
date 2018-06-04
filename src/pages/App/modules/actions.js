import axios from 'axios';
import {
    SEARCH_REQUET,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
} from './index';

export const searchStart = () => {
    return {
        type: SEARCH_REQUET,
    };
};
export const searchSuccess = (userimage) => {
    return {
        type: SEARCH_SUCCESS,
        payload: userimage,
    };
};
export const searchError = (errors) => {
    return {
        type: SEARCH_ERROR,
        errors,
    };
};

export const fetchuser = (keyword) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios.get(`https://api.github.com/users/${keyword}/repos`)
    .then((response) => {
        console.log(response.data);
        dispatch(searchSuccess(response.data));
    })
    .catch((error) => {
        dispatch(searchError(error));
    });
  }
}