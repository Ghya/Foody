import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../../actions';

import { Card, CardSection, Input, Button, Spinner } from '../common';

import styles from './styles';

class LoginForm extends React.Component {
	static propTypes = {
		emailChanged: PropTypes.func,
		passwordChanged: PropTypes.func,
		loginUser: PropTypes.func,
		email: PropTypes.string,
		password: PropTypes.string,
		error: PropTypes.string,
		success: PropTypes.string,
		loading: PropTypes.bool,
	};

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	getResponseMessage() {
		if (this.props.error) {
			return (
  <View>
    <Text style={styles.errorTxt}>{this.props.error}</Text>
  </View>
			);
		}

		if (this.props.success) {
			return (
  <View>
    <Text style={styles.successTxt}>{this.props.success}</Text>
  </View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return <Button text="Login" onPress={() => this.onButtonPress()} />;
	}

	render() {
		return (
  <View style={styles.container}>
    <Card>
      <CardSection>
        <Input
          label="Email"
          value={this.props.email}
          placeholder="user@email.com"
          onChangeText={text => this.onEmailChange(text)}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          value={this.props.password}
          placeholder="password"
          onChangeText={text => this.onPasswordChange(text)}
        />
      </CardSection>

      {this.getResponseMessage()}

      <CardSection>{this.renderButton()}</CardSection>
    </Card>
  </View>
		);
	}
}

const mapStateToProps = ({ authReducer }) => {
	const {
 email, password, error, loading, success,
} = authReducer;

	return {
		email,
		password,
		error,
		loading,
		success,
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, loginUser },
)(LoginForm);
