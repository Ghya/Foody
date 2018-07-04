import firebase from 'firebase';

import { SET_INGREDIENTS } from './types';

export const ingredientFetch = section => (dispatch) => {
	firebase
		.database()
		.ref(`/ingredients/${section}`)
		.on('value', (snapshot) => {
			dispatch({
				type: SET_INGREDIENTS,
				payload: snapshot.val(),
				section,
			});
		});
};
