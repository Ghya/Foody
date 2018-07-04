// Absolute import
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Relative import
import { saveCurrentMeal, resetCurrentMeal } from '../../actions';
import { CardSection, Card, Button } from '../../components/common';

/**
 * ================================================
 * {@class} MealValidation
 * {@extends} Component
 *
 * Display a current meal's summary
 * before validation
 * ================================================
 */

class MealValidation extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// primary current meal selection
		primary: PropTypes.object,
		// secondary1 current meal selection
		secondary1: PropTypes.object,
		// secondary2 current meal selection
		secondary2: PropTypes.object,
		// secindary3 current meal selection
		secondary3: PropTypes.object,
		// Action which save current created meal
		saveCurrentMeal: PropTypes.func,
		// Action which reset current meal form
		resetCurrentMeal: PropTypes.func,
	};

	/**
	 * fn()
	 * {@Event handler}
	 *
	 * create newMeal object and save it into store
	 */
	handleValidationPress = () => {
		const {
 primary, secondary1, secondary2, secondary3,
} = this.props;
		const newMeal = {
			time: 'lunch',
			date: '28-06-2018',
			pers: 2,
			primary,
			secondary1,
			secondary2,
			secondary3,
		};
		this.props.saveCurrentMeal(newMeal);
		this.props.resetCurrentMeal();
		Actions.popTo('mealHomePage');
	};

	/**
	 * fn()
	 * {@Event handler}
	 *
	 * create newMeal object and pass it to
	 * mealCalendar page for date selection
	 */
	handleCalendarValidationPress = () => {
		const {
 primary, secondary1, secondary2, secondary3,
} = this.props;
		const currentMeal = {
			primary,
			secondary1,
			secondary2,
			secondary3,
		};
		Actions.mealCalendarPage({ currentMeal });
	};

	render() {
		return (
  <View>
    <Card>
      <CardSection>
        <Text>Principal :</Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.primary.name} --- {this.props.primary.selected}
        </Text>
      </CardSection>
    </Card>

    <Card>
      <CardSection>
        <Text>Accompagnement #1</Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.secondary1.name} --- {this.props.secondary1.selected}
        </Text>
      </CardSection>
    </Card>

    <Card>
      <CardSection>
        <Text>Accompagnement #2</Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.secondary2.name} --- {this.props.secondary2.selected}
        </Text>
      </CardSection>
    </Card>

    <Card>
      <CardSection>
        <Text>Accompagnement #3:</Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.secondary3.name} --- {this.props.secondary3.selected}
        </Text>
      </CardSection>
    </Card>

    <Card>
      <CardSection>
        <Button text="Enregistrer" onPress={() => this.handleValidationPress()} />
      </CardSection>
      <CardSection>
        <Button
          text="Ajouter au planning"
          onPress={() => this.handleCalendarValidationPress()}
        />
      </CardSection>
    </Card>
  </View>
		);
	}
}

const mapStateToProps = (state) => {
	const {
 primary, secondary1, secondary2, secondary3,
} = state.mealReducer;
	return {
		primary,
		secondary1,
		secondary2,
		secondary3,
	};
};

export default connect(
	mapStateToProps,
	{ saveCurrentMeal, resetCurrentMeal },
)(MealValidation);
