// ======================================
// ========== MEAL REDUCER ==============
// ======================================

// Combine reducer key : mealReducer

import {
	SET_INGREDIENT_CURRENT_BUILD,
	SET_SELECTED_CURRENT_BUILD,
	SAVE_CURRENT_MEAL,
	RESET_CURRENT_MEAL,
} from '../actions/types';

// Initial state use for the reducer
const INITAL_STATE = {
	primary: {},
	secondary1: {},
	secondary2: {},
	secondary3: {},
	mealListUser: [],
	inCreation: false,
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		// Action creator : setIngredientCurrentBuild (primary or secondary)
		// @param: element - string, the type of element to update
		// @param: ingredient - string, the ingredient to update
		case SET_INGREDIENT_CURRENT_BUILD:
			return {
				...state,
				[action.element]: {
					selected: '',
					...action.ingredient,
				},
			};
		// Action creator : setSelectedCurrentBuild
		// @param: element - string, the type of element to update (primary or secondary)
		// @param: selected - string, ingredient's use selected
		case SET_SELECTED_CURRENT_BUILD:
			return {
				...state,
				inCreation: true,
				[action.element]: {
					...state[action.element],
					selected: action.selected,
					ways: state[action.element].ways.map((item) => {
						if (item.type === action.selected) {
							return {
								...item,
								selected: true,
							};
						}
						return {
							...item,
							selected: false,
						};
					}),
				},
			};
		// Action creator : saveCurrentMeal
		// @param: newMeal - object, the type of element to update
		case SAVE_CURRENT_MEAL:
			return {
				...state,
				mealListUser: [...state.mealListUser, action.newMeal],
			};
		// Action creator : resetCurrentMeal
		// Reset current meal build form
		case RESET_CURRENT_MEAL:
			return {
				...state,
				primary: {},
				secondary1: {},
				secondary2: {},
				secondary3: {},
				inCreation: false,
			};

		default:
			return state;
	}
};
