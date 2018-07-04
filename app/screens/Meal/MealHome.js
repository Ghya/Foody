import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ingredientFetch } from '../../actions';

import { CardSection, Card, Button } from '../../components/common';

/**
 * ================================================
 * {@class} MealHome
 * {@extends} Component
 *
 * Home page for tab 'Meal'
 * ================================================
 */

class MealHome extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// Action which fetch ingredient from database
		ingredientFetch: PropTypes.func,
	};

	/**
	 * fn() -- componentDidMount --
	 * {@param}{object}
	 *
	 * when home page mount, launch fetch
	 * ingredient methos if it's first
	 * time app launch or version or ingredient
	 * in database change
	 */
	componentDidMount = () => {
		/*
		if (this.props.ingredientFetched) {
			this.props.ingredientFetch();
		}
		*/
		this.props.ingredientFetch('primary');
		this.props.ingredientFetch('secondary');
	};

	/**
	 * fn()
	 * {@Event Handler}
	 *
	 * Navigate to meal creation page
	 */
	handleCreateMealPress = () => {
		Actions.mealCreatePage();
	};

	/**
	 * fn()
	 * {@Event Handler}
	 *
	 * Navigate to meal selection page
	 */
	handleMealPress = () => {
		Actions.mealSelectionPage();
	};

	// ======================================
	// ========== Displayed View ============
	// ======================================
	render() {
		return (
  <View>
    <Card>
      <CardSection>
        <Button
          text="Créer un plats"
          onPress={() => this.handleCreateMealPress()}
        />
      </CardSection>
      <CardSection>
        <Button text="Mes plats" onPress={() => this.handleMealPress()} />
      </CardSection>
    </Card>
  </View>
		);
	}
}

const mapStateToProps = (state) => {
	const { ingredientFetched } = state.ingredientReducer;
	return { ingredientFetched };
};

export default connect(
	mapStateToProps,
	{ ingredientFetch },
)(MealHome);
