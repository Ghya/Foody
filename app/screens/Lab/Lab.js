import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {} from '../../actions';

import { CardSection, Card, Button } from '../../components/common';

class Lab extends React.Component {
	static propTypes = {};

	render() {
		return (
  <View>
    <Text>Salut page calendar</Text>
  </View>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{},
)(Lab);
