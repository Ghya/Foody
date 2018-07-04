// Absolute import
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Relative import
import { CardSection, Card, Button, Input } from '../../components/common';

/**
 * ================================================
 * {@class} ShopDateSlection
 * {@extends} Component
 *
 * Display a date selector for
 * shopList generation
 * ================================================
 */
class ShopDateSelection extends React.Component {
	// == Constructor with state definition ==
	constructor(props) {
		super(props);
		this.state = {
			startDate: '',
			endDate: '',
		};
	}

	/**
	 * fn()
	 * {@param}{string} => date
	 * {@Event handler}
	 *
	 * handle date change selection, set startDate state
	 * Call by startDate input
	 */
	handleStartDateChange = (date) => {
		this.setState({
			startDate: date,
		});
	};

	/**
	 * fn()
	 * {@param}{string} => date
	 * {@Event handler}
	 *
	 * handle date change selection, set endDate state
	 * Call by endtDate input
	 */
	handleEndDateChange = (date) => {
		this.setState({
			endDate: date,
		});
	};

	/**
	 * fn()
	 * {@Event handler}
	 *
	 * navigate to shopListCreatePage with params => state startDate, state endDate
	 */
	handleCreateList = () => {
		Actions.shopCreateListPage({ start: this.state.startDate, end: this.state.endDate });
	};

	render() {
		return (
  <View>
    <Card>
      <CardSection>
        <Input
          label="Du"
          value={this.state.startDate}
          onChangeText={date => this.handleStartDateChange(date)}
          placeholder="jj/mm/aaaa"
        />
      </CardSection>
      <CardSection>
        <Input
          label="au"
          value={this.state.endDate}
          onChangeText={date => this.handleEndDateChange(date)}
          placeholder="jj/mm/aaaa"
        />
      </CardSection>
      <CardSection>
        <Button text="Créer" onPress={() => this.handleCreateList()} />
      </CardSection>
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
	{},
)(ShopDateSelection);
