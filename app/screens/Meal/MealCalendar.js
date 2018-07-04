// Absolute import
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

// Relative import
import { saveCurrentMeal, resetCurrentMeal } from '../../actions';
import { CardSection, Card, Button } from '../../components/common';
import { Calendar } from '../../components/Calendar';

/**
 * ================================================
 * {@class} MealCalendar
 * {@extends} Component
 *
 * Displays a calendar in order to let the user
 * pick a date and a moment day for a meal
 * Come after meal Creation
 * ================================================
 */

class MealCalendar extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// action wich save the current created meal
		saveCurrentMeal: PropTypes.func,
		// action to reset current meal form
		resetCurrentMeal: PropTypes.func,
		// currentMeal object
		currentMeal: PropTypes.object,
		// mealList from redux store
		mealListUser: PropTypes.array,
	};

	// == Constructor with state definition ==
	constructor(props) {
		super(props);
		this.state = {
			selectedDate: moment().format('DD-MM-YYYY'),
		};
	}

	/**
	 * fn()
	 * {@param}{string}
	 * set date selected in state => selectedDate
	 */
	onDateSelected = (date) => {
		this.setState({ selectedDate: moment(date).format('DD-MM-YYYY') });
	};

	/**
	 * fn()
	 * {@param}{string}
	 * create new meal from props and add
	 * time => the moment of the day :
	 * lunch or dinner
	 */
	handleValidationPress = (time) => {
		const newMeal = {
			...this.props.currentMeal,
			time,
			date: this.state.selectedDate,
		};
		this.props.saveCurrentMeal(newMeal);
		this.props.resetCurrentMeal();
		Actions.popTo('mealHomePage');
	};

	/**
	 * fn()
	 * render mealList from store
	 * filtered with state selectedDate param
	 */
	renderListByDate = () => {
		const date = this.state.selectedDate;
		const mealList = [];
		this.props.mealListUser.map((item) => {
			if (item.date === date) {
				mealList.push(item);
			}
			return null;
		});
		return mealList;
	};

	/**
	 * fn()
	 * {@param}{array}
	 * render lunch content view by extracting
	 * meal planned on lunch from user's meal List
	 */
	renderLunchContent = (listByDate) => {
		let lunch = null;
		listByDate.map((item) => {
			if (item.time === 'lunch') {
				lunch = item;
			}
			return null;
		});

		if (lunch) {
			return (
  <Card>
    <CardSection>
      <Text>Midi</Text>
    </CardSection>
    <CardSection>
      <Text style={{ flex: 2 }}>{lunch.primary.name}</Text>
      <Button style={{ flex: 1 }} text="remplacer" />
    </CardSection>
  </Card>
			);
		}
		return (
  <Card>
    <CardSection>
      <Text>Midi</Text>
    </CardSection>
    <CardSection>
      <Text style={{ flex: 2 }}>Aucun plat prévu</Text>
      <Button
        style={{ flex: 1 }}
        text="ajouter"
        onPress={() => this.handleValidationPress('lunch')}
      />
    </CardSection>
  </Card>
		);
	};

	/**
	 * fn()
	 * {@param}{array}
	 * render lunch content view by extracting
	 * meal planned on lunch from user's meal List
	 */
	renderDinnerContent = (listByDate) => {
		let dinner = null;
		listByDate.map((item) => {
			if (item.time === 'dinner') {
				dinner = item;
			}
			return null;
		});

		if (dinner) {
			return (
  <Card>
    <CardSection>
      <Text>Soir</Text>
    </CardSection>
    <CardSection>
      <Text style={{ flex: 2 }}>plat du soir prévu</Text>
      <Button style={{ flex: 1 }} text="remplacer" />
    </CardSection>
  </Card>
			);
		}
		return (
  <Card>
    <CardSection>
      <Text>Soir</Text>
    </CardSection>
    <CardSection>
      <Text style={{ flex: 2 }}>Aucun plat prévu</Text>
      <Button
        style={{ flex: 1 }}
        text="ajouter"
        onPress={() => this.handleValidationPress('dinner')}
      />
    </CardSection>
  </Card>
		);
	};

	render() {
		const listByDate = this.renderListByDate();
		const customDate = [
			{
				startDate: moment().format('YYYY-MM-DD'),
				dateNameStyle: { color: 'red' },
				dateNumberStyle: { color: 'red' },
				dateContainerStyle: { borderColor: 'red', borderWidth: 1 },
			},
			{
				startDate: moment()
					.add(1, 'days')
					.format('YYYY-MM-DD'),
				dateNameStyle: { color: 'yellow' },
				dateNumberStyle: { color: 'yellow' },
			},
		];
		const selectedDate = moment().format('YYYY-MM-DD');
		return (
  <View>
    <Calendar
      selectedDate={selectedDate}
      customDate={customDate}
      onDateSelected={date => this.onDateSelected(date)}
    />
    <View>
      <Card>
        <CardSection>
          <Text>Journée du : {this.state.selectedDate}</Text>
        </CardSection>
      </Card>
    </View>
    <View>{this.renderLunchContent(listByDate)}</View>
    <View>{this.renderDinnerContent(listByDate)}</View>
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
	{ saveCurrentMeal, resetCurrentMeal },
)(MealCalendar);
