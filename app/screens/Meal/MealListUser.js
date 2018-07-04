import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {} from '../../actions';

import { Separator } from '../../components/common';
import { ListViewUserMeal } from '../../components/ListViewUserMeal';

/**
 * ================================================
 * {@class} MealListUser
 * {@extends} Component
 *
 * Show all user's meal
 * Page used with react-native-tabview
 * ================================================
 */

class MealListUser extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// user's mealList from store
		mealListUser: PropTypes.array,
	};

	/**
	 * fn()
	 * {@Event Handler}
	 *
	 * navigate to meal page
	 */
	onMealPress = () => {
		console.tron.log('meal press');
	};

	render() {
		return (
  <View>
    <FlatList
      data={this.props.mealListUser}
      renderItem={({ item }) => (
        <ListViewUserMeal onPress={() => this.onMealPress(item)} meal={item} />
					)}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={Separator}
    />
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
	{},
)(MealListUser);
