import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
} from '../actions/types';

const INITAL_STATE = {
	email: 't@mail.com',
	password: '123456',
	user: null,
	error: '',
	loading: false,
	success: '',
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {
				...state,
				email: action.payload,
			};
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.payload,
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...INITAL_STATE,
				user: action.payload,
				success: 'Connexion établie !',
			};
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: 'Connexion échoué ...',
				password: '',
				loading: false,
			};
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error: '',
			};
		default:
			return state;
	}
};
