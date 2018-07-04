import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection } from '../../components/common';

import { LoginForm } from '../../components/LoginForm';

class Login extends React.Component {
	render() {
		return (
  <View style={styles.container}>
    <LoginForm />
  </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Login;
