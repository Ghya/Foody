import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
} from './types';

export const emailChanged = text => ({
	type: EMAIL_CHANGED,
	payload: text,
});

export const passwordChanged = text => ({
	type: PASSWORD_CHANGED,
	payload: text,
});

export const loginUser = ({ email, password }) => (dispatch) => {
	console.tron.log(password);
	dispatch({ type: LOGIN_USER });

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((err) => {
			console.tron.log(err);
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch((e) => {
					console.tron.log(e);
					loginUserFail(dispatch);
				});
		});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});

	// Navigation Action (react-native-router-flux)
	Actions.mealFlow();
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};
