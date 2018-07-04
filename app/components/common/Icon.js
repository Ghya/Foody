import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const Icon = ({ name, color, size }) => (
  <View style={styles.iconStyles}>
    <Ionicon name={`${ICON_PREFIX}-${name}`} color={color} size={size} />
  </View>
);

Icon.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
};

const styles = StyleSheet.create({
	iconStyles: {
		padding: 5,
	},
});

export default Icon;
