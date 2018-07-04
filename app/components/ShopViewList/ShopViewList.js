import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../common';

import styles from './styles';

const ShopViewList = ({ onPress, list }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.bigRow}>
      <View style={styles.smallRow}>
        <View style={styles.textColumn}>
          <Text style={styles.text}>{list.name}</Text>
          <Text>
            {list.type} - {list.qty} {list.unit}
          </Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

ShopViewList.propTypes = {
	onPress: PropTypes.func,
	list: PropTypes.object,
};

export default ShopViewList;
