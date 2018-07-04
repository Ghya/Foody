import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {} from '../../actions';

import { CardSection, Card, Button, Separator } from '../../components/common';
import ListViewShopList from '../../components/ListViewShopList/ListViewShopList';

/**
 * ================================================
 * {@class} Shophome
 * {@extends} Component
 *
 * Show all user's shopList
 * ================================================
 */
class ShopHome extends React.Component {
	// ======== PropTypes definition ========
	static propTypes = {
		// user's shopList from store
		shopList: PropTypes.array,
	};

	/**
	 * fn()
	 * {@param}{object} => item
	 *
	 * navigate to shopListPage with params ShopList item.list
	 */
	onListItemPress = (item) => {
		Actions.shopListPage({ shopList: item.list });
	};

	/**
	 * fn()
	 * {@Event handler}
	 *
	 * navigate to shopDateSelection Page
	 */
	handleCreateList = () => {
		Actions.shopDateSelectionPage();
	};

	/**
	 * fn()
	 * {@return} => component
	 */
	renderShopLists = () => {
		if (this.props.shopList) {
			return (
  <FlatList
    data={this.props.shopList}
    renderItem={({ item }) => (
      <ListViewShopList
        onPress={() => this.onListItemPress(item)}
        date={item.date}
      />
					)}
    keyExtractor={(item, index) => index.toString()}
    ItemSeparatorComponent={Separator}
  />
			);
		}
		return <Text>Aucune liste de course</Text>;
	};

	render() {
		return (
  <View>
    <Card>
      <CardSection>
        <Button
          text="Créer une liste de course"
          onPress={() => this.handleCreateList()}
        />
      </CardSection>
    </Card>
    <Card>
      <CardSection>
        <Text>Mes listes de courses</Text>
      </CardSection>
      <CardSection>{this.renderShopLists()}</CardSection>
    </Card>
  </View>
		);
	}
}

const mapStateToProps = (state) => {
	const { shopList } = state.shopReducer;
	return { shopList };
};

export default connect(
	mapStateToProps,
	{},
)(ShopHome);
