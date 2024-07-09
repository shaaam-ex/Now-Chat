import { useNavigate } from 'react-router-dom';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstant';

const backendUrl = 'http://localhost:4000/api/auth';


// Login
export const login = ( email, password ) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST });

        
        const response = await fetch(`${backendUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        let json = await response.json();

        console.log(json);

        if(json.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: json.user
            })
        }

        else {
            dispatch({
                type: LOGIN_FAIL,
                payload: json.message
            })
        }
    }

    catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const signupUser = ( name, email, password, confirmPassword, phone ) => async (dispatch) => {
    if(name != null && email != null && password != null && confirmPassword != null && (password === confirmPassword) && phone != null) {
        dispatch({
            type: REGISTER_REQUEST
        })

        const response = await fetch(`${backendUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, confirmPassword, phoneNumber: phone })
        })

        let json = await response.json();

        if(json.message) {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
    }
}