import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import MealReducer from './MealReducer';
import IngredientReducer from './IngredientReducer';
import ShopReducer from './ShopReducer';

export default combineReducers({
	authReducer: AuthReducer,
	mealReducer: MealReducer,
	ingredientReducer: IngredientReducer,
	shopReducer: ShopReducer,
});
