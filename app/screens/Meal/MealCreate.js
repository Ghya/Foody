import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { setSelectedCurrentBuild, saveCurrentMeal, resetCurrentMeal } from '../../actions';

import { CardSection, Card, Button, Separator } from '../../components/common';
import { ListViewWays } from '../../components/ListViewWays';

/**
 * ================================================
 * {@class} MealCreate
 * {@extends} Component
 *
 * Ingredient's selection page to create a meal
 * ================================================
 */

class MealCreate extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// inform if a meal is in creation
		inCreation: PropTypes.bool,
		// primary current meal selection
		primary: PropTypes.object,
		// secondary1 current meal selection
		secondary1: PropTypes.object,
		// secondary2 current meal selection
		secondary2: PropTypes.object,
		// secindary3 current meal selection
		secondary3: PropTypes.object,
		// Action which update reducer with current selection
		setSelectedCurrentBuild: PropTypes.func,
	};

	/**
	 * fn()
	 * {@param}{object}
	 * set primary selected for current buils
	 * call when button primary seleection press
	 */
	onPrimaryPress = (item) => {
		this.props.setSelectedCurrentBuild({ element: 'primary', selected: item.type });
	};

	/**
	 * fn()
	 * {@param}{object}
	 * set secondary selected for current buils
	 * call when button primary seleection press
	 */
	onSecondary1Press = (item) => {
		this.props.setSelectedCurrentBuild({ element: 'secondary1', selected: item.type });
	};

	/**
	 * fn()
	 * {@param}{object}
	 * set secondary selected for current buils
	 * call when button primary seleection press
	 */
	onSecondary2Press = (item) => {
		this.props.setSelectedCurrentBuild({ element: 'secondary2', selected: item.type });
	};

	/**
	 * fn()
	 * {@param}{object}
	 * set secondary selected for current buils
	 * call when button primary seleection press
	 */
	onSecondary3Press = (item) => {
		this.props.setSelectedCurrentBuild({ element: 'secondary3', selected: item.type });
	};

	/**
	 * fn()
	 * navigate to primary page
	 */
	handlePrimaryPress = () => {
		Actions.mealPrimaryPage();
	};

	/**
	 * fn()
	 * navigate to secondary page
	 */
	handleSecondaryPress = () => {
		Actions.mealSecondaryPage();
	};

	/**
	 * fn()
	 * navigate to validation page
	 */
	handleValidationPress = () => {
		Actions.mealValidationPage();
	};

	/**
	 * fn()
	 * display view for primary selection
	 */
	renderPrimaySelection = () => {
		if (this.props.primary.name) {
			return (
  <Card>
    <CardSection>
      <Text>{this.props.primary.name}</Text>
    </CardSection>
    <CardSection>
      <FlatList
        data={this.props.primary.ways}
        renderItem={({ item }) => (
          <ListViewWays
            onPress={() => this.onPrimaryPress(item)}
            way={item}
          />
							)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        horizontal
      />
    </CardSection>
  </Card>
			);
		}
	};

	/**
	 * fn()
	 * display view for secondary selection
	 */
	renderSecondary1Selection = () => {
		if (this.props.secondary1.name) {
			return (
  <Card>
    <CardSection>
      <Text>{this.props.secondary1.name}</Text>
    </CardSection>
    <CardSection>
      <FlatList
        data={this.props.secondary1.ways}
        renderItem={({ item }) => (
          <ListViewWays
            onPress={() => this.onSecondary1Press(item)}
            way={item}
          />
							)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        horizontal
      />
    </CardSection>
  </Card>
			);
		}
	};

	/**
	 * fn()
	 * display view for secondary selection
	 */
	renderSecondary2Selection = () => {
		if (this.props.secondary2.name) {
			return (
  <Card>
    <CardSection>
      <Text>{this.props.secondary2.name}</Text>
    </CardSection>
    <CardSection>
      <FlatList
        data={this.props.secondary2.ways}
        renderItem={({ item }) => (
          <ListViewWays
            onPress={() => this.onSecondary2Press(item)}
            way={item}
          />
							)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        horizontal
      />
    </CardSection>
  </Card>
			);
		}
	};

	/**
	 * fn()
	 * display view for secondary selection
	 */
	renderSecondary3Selection = () => {
		if (this.props.secondary3.name) {
			return (
  <Card>
    <CardSection>
      <Text>{this.props.secondary3.name}</Text>
    </CardSection>
    <CardSection>
      <FlatList
        data={this.props.secondary3.ways}
        renderItem={({ item }) => (
          <ListViewWays
            onPress={() => this.onSecondary3Press(item)}
            way={item}
          />
							)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        horizontal
      />
    </CardSection>
  </Card>
			);
		}
	};

	/**
	 * fn()
	 * display add secondary's button
	 */
	renderSecondaryButton = () => {
		if (this.props.inCreation) {
			return (
  <Card>
    <CardSection>
      <Button
        text="Ajouter accompagnement"
        onPress={() => this.handleSecondaryPress()}
      />
    </CardSection>
  </Card>
			);
		}
	};

	/**
	 * fn()
	 * display validation's button
	 */
	renderValidationButton = () => {
		if (this.props.secondary1.name) {
			return (
  <Card>
    <CardSection>
      <Button text="Enregistrer" onPress={() => this.handleValidationPress()} />
    </CardSection>
  </Card>
			);
		}
	};

	render() {
		return (
  <ScrollView>
    <View>
      <Card>
        <CardSection>
          <Text>
								Pour commencer la création, selectionnez son élément principal
          </Text>
        </CardSection>
        <CardSection>
          <Button
            text="Element principal"
            onPress={() => this.handlePrimaryPress()}
          />
        </CardSection>
      </Card>

      {this.renderPrimaySelection()}
      {this.renderSecondary1Selection()}
      {this.renderSecondary2Selection()}
      {this.renderSecondary3Selection()}
      {this.renderSecondaryButton()}
      {this.renderValidationButton()}
    </View>
  </ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	const {
 primary, secondary1, secondary2, secondary3, inCreation,
} = state.mealReducer;
	return {
		primary,
		secondary1,
		secondary2,
		secondary3,
		inCreation,
		state,
	};
};

export default connect(
	mapStateToProps,
	{ setSelectedCurrentBuild, saveCurrentMeal, resetCurrentMeal },
)(MealCreate);
