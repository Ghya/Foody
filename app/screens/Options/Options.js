import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

/**
 * ================================================
 * {@class} OptionHome
 * {@extends} Component
 *
 * Use react-native-tabview to display 3 pages
 * with a top tabview
 * ================================================
 */
class OptionsHome extends React.Component {
	render() {
		return (
  <View>
    <Text>Page Options</Text>
  </View>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{},
)(OptionsHome);
