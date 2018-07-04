import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import {} from '../../actions';

import { Separator } from '../../components/common';
import ShopViewList from '../../components/ShopViewList/ShopViewList';

/**
 * ================================================
 * {@class} ShopList
 * {@extends} Component
 *
 * Display a shopList
 * ================================================
 */
class ShopList extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// user's shopList to display
		shopList: PropTypes.array,
	};

	render() {
		console.tron.log(this.props);
		return (
  <View>
    <FlatList
      data={this.props.shopList}
      renderItem={({ item }) => <ShopViewList list={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={Separator}
    />
  </View>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{},
)(ShopList);
