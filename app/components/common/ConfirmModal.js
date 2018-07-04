import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Modal, StyleSheet } from 'react-native';

import CardSection from './CardSection';
import Button from './Button';

const ConfirmModal = ({
 visible, text, onAccept, onDecline,
}) => (
  <Modal animationType="slide" onRequestClose={() => {}} transparent visible={visible}>
    <View style={styles.container}>
      <CardSection style={styles.cardSection}>
        <Text style={styles.text}>{text}</Text>
      </CardSection>

      <CardSection>
        <Button onPress={onAccept} text="Oui" />
        <Button onPress={onDecline} text="Non" />
      </CardSection>
    </View>
  </Modal>
);

ConfirmModal.propTypes = {
	visible: PropTypes.bool,
	text: PropTypes.string,
	onAccept: PropTypes.func,
	onDecline: PropTypes.func,
};

const styles = StyleSheet.create({
	cardSection: {
		justifyContent: 'center',
		width: '90%',
	},
	text: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40,
	},
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ConfirmModal;
