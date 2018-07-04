// Absolute import
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

// Relative import
import MealListUser from './MealListUser';
import Options from '../Options/Options';

/**
 * ================================================
 * Route Definition for tabViwew
 * ================================================
 */
const FirstRoute = () => (
  <View>
    <MealListUser />
  </View>
);
const SecondRoute = () => (
  <View>
    <MealListUser />
  </View>
);
const ThirdRoute = () => Options;

/**
 * ================================================
 * {@class} MealSelection
 * {@extends} Component
 *
 * Use react-native-tabview to display 3 pages
 * with a top tabview
 * ================================================
 */

class MealSelection extends React.Component {
	// == Constructor with state definition ==
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			routes: [
				{ key: 'first', title: 'Mes plats' },
				{ key: 'second', title: 'Favoris' },
				{ key: 'third', title: 'Foody' },
			],
		};
	}

	/**
	 * fn()
	 * render label for tab with route title
	 */
	renderLabel = ({ route }) => <Text>{route.title}</Text>;

	render() {
		return (
  <TabView
    navigationState={this.state}
    renderTabBar={props => (
      <TabBar
        {...props}
        style={styles.tabBar}
        bounces
        scrollEnabled
        indicatorStyle={{ backgroundColor: 'red' }}
        renderLabel={this.renderLabel}
      />
				)}
    renderScene={SceneMap({
					first: FirstRoute,
					second: SecondRoute,
					third: ThirdRoute,
				})}
    onIndexChange={index => this.setState({ index })}
    initialLayout={{ width: Dimensions.get('window').width }}
  />
		);
	}
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: 'orange',
	},
});

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{},
)(MealSelection);
