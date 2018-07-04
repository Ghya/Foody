import { SET_INGREDIENTS } from '../actions/types';

const INITAL_STATE = {
	ingredientFetched: false,
	primary: [],
	secondary: [],
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		case SET_INGREDIENTS:
			return {
				...state,
				ingredientFetched: true,
				[action.section]: action.payload,
			};
		default:
			return state;
	}
};
