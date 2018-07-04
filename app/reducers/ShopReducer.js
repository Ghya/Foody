import { SAVE_SHOP_LIST } from '../actions/types';

const INITAL_STATE = {
	shopList: [],
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		case SAVE_SHOP_LIST:
			return {
				...state,
				shopList: [
					...state.shopList,
					{ list: action.newList, date: { start: action.start, end: action.end } },
				],
			};
		default:
			return state;
	}
};
