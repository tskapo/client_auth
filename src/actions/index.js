import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser ({ email, password }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
            dispatch({ type : AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch( () => {
            dispatch(authError("არასწორი პაროლი ან მომხმარებელი"));
        });
    }
}

export function signupUser ( { email, password } ) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
/*        .then(response => {
            dispatch({ type : AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch( () => {
            dispatch(authError("რეგისტრაცია ვერ მოხერხდა"));
        });*/
    }
}

export function authError (error) {
    return {
        type : AUTH_ERROR,
        payload : error
    };
}

export function signoutUser (error) {
    localStorage.removeItem('token');
    return { type : UNAUTH_USER };
}