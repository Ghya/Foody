// Absolute import
import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

// Relative import
import { saveShopList } from '../../actions';
import { CardSection, Card, Button, Separator } from '../../components/common';
import ShopViewList from '../../components/ShopViewList/ShopViewList';

/**
 * ================================================
 * {@class} ShopCreateList
 * {@extends} Component
 *
 * Use mealListUser props to generarte
 * a shopList, with startDate and endDate
 * ================================================
 */
class ShopCreateList extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// Action which save shopList to store
		saveShopList: PropTypes.func,
		// user's mealList from store
		mealListUser: PropTypes.array,
		// startDate for the created shopList
		start: PropTypes.string,
		// endDate for the created shopList
		end: PropTypes.string,
	};

	/**
	 * fn()
	 *
	 * get all user's mealList and filtered it by date
	 * date comes from previous page, date seletion page
	 * date comes in props
	 */
	getListByDate = () => {
		const startDate = moment(this.props.start, 'DD/MM/YYYY').subtract(1, 'days');
		const endDate = moment(this.props.end, 'DD/MM/YYYY').add(1, 'days');
		const mealList = [];
		this.props.mealListUser.forEach((element) => {
			const compareDate = moment(element.date, 'DD/MM/YYYY');
			if (compareDate.isBetween(startDate, endDate)) {
				mealList.push(element);
			}
		});
		return mealList;
	};

	/**
	 * fn()
	 * {@param}{array} => listBydate
	 *
	 * {@return}{array} => mealList
	 *
	 * use listByDate array and re-order it in order to be use for
	 * a shop list creation
	 */
	orderListByDate = (listByDate) => {
		const mealList = [];
		listByDate.map((item) => {
			const mealListItem = [
				[
					item.primary.name,
					item.primary.selected,
					this.extractDetails(item.primary.ways, item.primary.selected),
				],
				[
					item.secondary1.name,
					item.secondary1.selected,
					this.extractDetails(item.secondary1.ways, item.secondary1.selected),
				],
				[
					item.secondary2.name,
					item.secondary2.selected,
					this.extractDetails(item.secondary2.ways, item.secondary2.selected),
				],
				[
					item.secondary3.name,
					item.secondary3.selected,
					this.extractDetails(item.secondary3.ways, item.secondary3.selected),
				],
			];
			mealList.push(mealListItem);
			return null;
		});
		return mealList;
	};

	/**
	 * fn()
	 * {@param}{array} => ways
	 * {@param}{string} => selected
	 *
	 * {@return}{object} => details
	 *
	 * helper method for orderListbyDate()
	 * extract and order ways details by selected name
	 */
	extractDetails = (ways, selected) => {
		let details = {};
		if (ways) {
			ways.forEach((element) => {
				if (element.type === selected) {
					details = {
						qty: element.qty,
						unit: element.unit,
					};
				}
			});
		}
		return details;
	};

	/**
	 * fn()
	 * {@param}{array} => list (orderedList)
	 *
	 * {@return}{object} => finalShopList
	 *
	 * create a shop list with orderedList param
	 */
	makeShopList = (list) => {
		/**
		 * exctract and order previous list to set element
		 */
		const mealShopList = [];
		let finalShopList = [];
		list.forEach((meal) => {
			meal.forEach((ingredient) => {
				if (ingredient[0]) {
					const shopItem = {
						name: ingredient[0],
						type: ingredient[1],
						qty: ingredient[2].qty,
						unit: ingredient[2].unit,
					};
					mealShopList.push(shopItem);
				}
			});
		});

		/**
		 * use previous meal list created and reorder and check
		 * existence in finalShopList
		 * if exist => add quantity value
		 * else => push element to the list
		 */
		mealShopList.forEach((element) => {
			if (this.checkAndAdd(element, finalShopList)) {
				finalShopList = finalShopList.map((item) => {
					if (item.name === element.name && item.type === element.type) {
						return {
							...item,
							qty: item.qty + element.qty,
						};
					}
					return item;
				});
			} else {
				finalShopList.push(element);
			}
		});
		return finalShopList;
	};

	/**
	 * fn()
	 * {@param}{object} => obj
	 * {@param}{array} => list
	 *
	 * {@return}{bool}
	 *
	 * helper method for makeShopList()
	 * extract and order ways details by selected name
	 */
	checkAndAdd = (obj, list) => {
		const found = list.some(el => el.name === obj.name && el.type === obj.type);
		if (found) {
			return true;
		}
		return false;
	};

	handleSaveListPress = (mealShopList) => {
		this.props.saveShopList(mealShopList, this.props.start, this.props.end);
		Actions.popTo('shopHomePage');
	};

	render() {
		const listByDate = this.getListByDate();
		const orderedMealList = this.orderListByDate(listByDate);
		const mealShopList = this.makeShopList(orderedMealList);
		return (
  <View>
    <Card>
      <CardSection>
        <Button
          text="Enregistrer"
          onPress={() => this.handleSaveListPress(mealShopList)}
        />
      </CardSection>
    </Card>
    <Card>
      <FlatList
        data={mealShopList}
        renderItem={({ item }) => <ShopViewList list={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
    </Card>
  </View>
		);
	}
}

const mapStateToProps = (state) => {
	const { mealListUser } = state.mealReducer;
	return { mealListUser };
};

export default connect(
	mapStateToProps,
	{ saveShopList },
)(ShopCreateList);
