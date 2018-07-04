import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bigRow: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	smallRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		color: 'black',
	},
	textColumn: {
		flexDirection: 'column',
		paddingLeft: 20,
	},
});

export default styles;
