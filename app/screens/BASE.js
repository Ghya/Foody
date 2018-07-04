import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {} from '../../actions';

import { CardSection, Card, Button } from '../../components/common';

class Home extends React.Component {
	static propTypes = {
		foobar: PropTypes.func,
	};
	constructor(props) {
		super(props);
		this.state = {
			someState: {},
		};
	}

	render() {
		return (
  <View>
    <Text>Salut page home</Text>
  </View>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{},
)(Home);
