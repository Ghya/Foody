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
 * {@class} MealSecondary
 * {@extends} Component
 *
 * Show all secondary ingredient while user is
 * creating a meal
 * ================================================
 */

class MealSecondary extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// secondary ingredient list
		secondaryIngredients: PropTypes.array,
		// set current element selected
		setIngredientCurrentBuild: PropTypes.func,
		// secondary object
		secondary1: PropTypes.object,
		// secondary object
		secondary2: PropTypes.object,
		// secondary object
		secondary3: PropTypes.object,
	};

	// == Constructor with state definition ==
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * fn()
	 * {@Event Handler}
	 * {@param}{object}
	 *
	 * Set secondary 1, 2 or 3 depends on each one existence
	 */
	onItemPress = (item) => {
		if (this.props.secondary1.name) {
			if (this.props.secondary2.name) {
				if (this.props.secondary3.name) {
					console.tron.log('Ingredient max atteint');
				} else {
					this.props.setIngredientCurrentBuild({
						element: 'secondary3',
						ingredient: item,
					});
				}
			} else {
				this.props.setIngredientCurrentBuild({ element: 'secondary2', ingredient: item });
			}
		} else {
			this.props.setIngredientCurrentBuild({ element: 'secondary1', ingredient: item });
		}
		Actions.pop();
	};

	render() {
		return (
  <View>
    <FlatList
      data={this.props.secondaryIngredients}
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
	const { secondary1, secondary2, secondary3 } = state.mealReducer;
	const secondaryIngredients = state.ingredientReducer.secondary;
	return {
		secondaryIngredients,
		secondary1,
		secondary2,
		secondary3,
	};
};

export default connect(
	mapStateToProps,
	{ setIngredientCurrentBuild },
)(MealSecondary);
