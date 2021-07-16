import {StyleSheet} from 'react-native'

export const productItemStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginVertical: 5,
		marginHorizontal: 8,
		padding: 10,
		flexDirection: 'row',
		borderRadius: 8,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		elevation: 9,
	},
	image: {
		height: 100,
		width: 100,
	},
	info: {},
	name: {
		color: 'black',
		fontSize: 14,
	},
	price: {
		color: '#f0b616',
		fontSize: 14,
		fontWeight: 'bold',
	},
	productType: {
		color: '#0bb09f',
		fontWeight: 'bold',
	},
	rightItem: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
	rating: {
		marginTop: 5,
		alignSelf: 'flex-start',
	},
	bottomInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	colorsContainer: {
		marginTop: 5,
		flexDirection: 'row',
	},
	productColor: (color) => ({
		backgroundColor: color,
		height: 20,
		width: 20,
		marginVertical: 10,
		marginHorizontal: 4,
		borderRadius: 10,
	}),
})
