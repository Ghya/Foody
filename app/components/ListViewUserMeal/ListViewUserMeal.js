import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../common';

import styles from './styles';

const renderIcon = (status) => {
	if (status === 'transit') {
		return <Icon name="car" color="#0033cc" size={20} />;
	}
	if (status === 'delivered') {
		return <Icon name="checkmark-circle" color="#00cc44" size={20} />;
	}
	return <Icon name="close-circle" color="#cccccc" size={20} />;
};

const ListViewUserMeal = ({ onPress, meal }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.bigRow}>
      <View style={styles.smallRow}>
        <View style={styles.textColumn}>
          <Text style={styles.text}>{meal.primary.name}</Text>
        </View>
      </View>
      <Icon name="star-outline" color="#8c8c8c" size={20} />
    </View>
  </TouchableHighlight>
);

ListViewUserMeal.propTypes = {
	onPress: PropTypes.func,
	meal: PropTypes.object,
};

export default ListViewUserMeal;
