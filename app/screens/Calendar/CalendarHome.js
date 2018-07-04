// Absolute import
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

// Relative import
import { CardSection, Card, Button } from '../../components/common';
import { Calendar } from '../../components/Calendar';

/**
 * ================================================
 * {@class} CalendarHome
 * {@extends} Component
 *
 * Displays a calendar in order to show
 * user's meal for each days
 * ================================================
 */

class CalendarHome extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// array from redux store, with all user's meals
		mealListUser: PropTypes.array.isRequired,
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
	 * get mealList from props and filter it by given date
	 * date used => state selectedDate
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
	 * {@param}{array} listbyDate
	 * {@return} if lunch meal => meal, else => string
	 * extract meals planned for lunch
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
      <View style={{ flexDirection: 'column', flex: 2 }}>
        <Text style={{ color: 'black' }}>
          {lunch.primary.name} - {lunch.primary.selected}
        </Text>
        <Text>
          {lunch.secondary1.name} - {lunch.secondary1.selected}
        </Text>
        <Text>
          {lunch.secondary2.name ? (
            <Text>
              {lunch.secondary2.name} - {lunch.secondary2.selected}
            </Text>
								) : null}
        </Text>
        <Text>
          {lunch.secondary3.name ? (
            <Text>
              {lunch.secondary3.name} - {lunch.secondary3.selected}
            </Text>
								) : null}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button text="remplacer" />
      </View>
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
      <Button style={{ flex: 1 }} text="ajouter" />
    </CardSection>
  </Card>
		);
	};

	/**
	 * fn()
	 * {@param}{array} listbyDate
	 * {@return} if dinner meal => meal, else => string
	 * extract meals planned for dinner
	 */
	renderDinnerContent = (listByDate) => {
		let dinner = null;
		listByDate.map((item) => {
			if (item.time === 'dinner') {
				dinner = item;
				console.tron.log(dinner);
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
      <View style={{ flexDirection: 'column', flex: 2 }}>
        <Text style={{ color: 'black' }}>
          {dinner.primary.name} - {dinner.primary.selected}
        </Text>
        <Text>
          {dinner.secondary1.name} - {dinner.secondary1.selected}
        </Text>
        <Text>
          {dinner.secondary2.name ? (
            <Text>
              {dinner.secondary2.name} - {dinner.secondary2.selected}
            </Text>
								) : null}
        </Text>
        <Text>
          {dinner.secondary3.name ? (
            <Text>
              {dinner.secondary3.name} - {dinner.secondary3.selected}
            </Text>
								) : null}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button text="remplacer" />
      </View>
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
      <Button style={{ flex: 1 }} text="ajouter" />
    </CardSection>
  </Card>
		);
	};

	/**
	 * ==================
	 *
	 *   Render Method
	 *
	 * ==================
	 */

	render() {
		const listByDate = this.renderListByDate();
		const customDate = [
			{
				startDate: moment().format('YYYY-MM-DD'),
				dateNameStyle: { color: 'red' },
				dateNumberStyle: { color: 'red' },
				dateContainerStyle: { borderColor: 'red', borderWidth: 1 },
			},
		];
		const selectedDate = moment().format('YYYY-MM-DD');

		/**
		 * ==================
		 *
		 *   Diplayed View
		 *
		 * ==================
		 */

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

/**
 * ==================================
 *
 *   Actions and Redux store access
 *   Connect export
 *
 * ==================================
 */

const mapStateToProps = (state) => {
	const { mealListUser } = state.mealReducer;
	return { mealListUser };
};

export default connect(
	mapStateToProps,
	{},
)(CalendarHome);
