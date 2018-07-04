import {
	SET_INGREDIENT_CURRENT_BUILD,
	SET_SELECTED_CURRENT_BUILD,
	SAVE_CURRENT_MEAL,
	RESET_CURRENT_MEAL,
} from './types';

export const setIngredientCurrentBuild = ({ element, ingredient }) => ({
	type: SET_INGREDIENT_CURRENT_BUILD,
	element,
	ingredient,
});

export const setSelectedCurrentBuild = ({ element, selected }) => ({
	type: SET_SELECTED_CURRENT_BUILD,
	element,
	selected,
});

export const saveCurrentMeal = newMeal => ({
	type: SAVE_CURRENT_MEAL,
	newMeal,
});

export const resetCurrentMeal = () => ({
	type: RESET_CURRENT_MEAL,
});
