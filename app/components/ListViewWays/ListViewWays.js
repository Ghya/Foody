import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../common';

import styles from './styles';

const renderListView = (way) => {
	if (way.selected) {
		return (
  <View style={styles.selectedRow}>
    <Text>{way.type}</Text>
  </View>
		);
	}
	return (
  <View style={styles.basicRow}>
    <Text>{way.type}</Text>
  </View>
	);
};

const ListViewWays = ({ onPress, way }) => (
  <TouchableHighlight onPress={onPress}>{renderListView(way)}</TouchableHighlight>
);

ListViewWays.propTypes = {
	onPress: PropTypes.func,
	way: PropTypes.object,
};

export default ListViewWays;
