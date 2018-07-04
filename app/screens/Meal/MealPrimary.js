// Absolute import
import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Relative import
import { setIngredientCurrentBuild } from '../../actions';
import { Separator } from '../../components/common';
import { ListViewPrimary } from '../../components/ListViewPrimary';

/**
 * ================================================
 * {@class} MealPrimary
 * {@extends} Component
 *
 * Show all primary ingredient while user is
 * creating a meal
 * ================================================
 */

class MealPrimary extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// primary ingredient list
		primaryIngredients: PropTypes.array,
		// Action which update reducer with current selection
		setIngredientCurrentBuild: PropTypes.func,
	};

	/**
	 * fn()
	 * {@Event Handler}
	 *
	 * set current element for meal creatio
	 * then navigate, pop back
	 */
	onItemPress = (item) => {
		this.props.setIngredientCurrentBuild({ element: 'primary', ingredient: item });
		Actions.pop();
	};

	render() {
		return (
  <View>
    <FlatList
      data={this.props.primaryIngredients}
      renderItem={({ item }) => (
        <ListViewPrimary onPress={() => this.onItemPress(item)} primary={item} />
					)}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={Separator}
    />
  </View>
		);
	}
}

const mapStateToProps = (state) => {
	const primaryIngredients = state.ingredientReducer.primary;
	return { primaryIngredients };
};

export default connect(
	mapStateToProps,
	{ setIngredientCurrentBuild },
)(MealPrimary);
