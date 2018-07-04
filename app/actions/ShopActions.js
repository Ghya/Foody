import { SAVE_SHOP_LIST } from './types';

export const saveShopList = (shopList, start, end) => ({
	type: SAVE_SHOP_LIST,
	newList: shopList,
	start,
	end,
});
