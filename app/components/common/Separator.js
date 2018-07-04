import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
	separator: {
		marginLeft: 20,
		backgroundColor: 'black',
		flex: 1,
		height: StyleSheet.hairlineWidth,
	},
});

export default Separator;
