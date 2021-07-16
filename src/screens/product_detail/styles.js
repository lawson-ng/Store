import {StyleSheet} from 'react-native'
import {screenDimension} from 'utilities/constants'

const {width} = screenDimension
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f7ec4a',
		flex: 1,
	},
	imageContainer: {
		backgroundColor: 'white',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		elevation: 9,
	},
	image: {
		width,
		height: 200,
	},
	title: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 10,
		fontWeight: 'bold',
		paddingBottom: 10,
	},
	colorsContainer: {
		marginHorizontal: 10,
	},
	productColor: (color) => ({
		marginVertical: 30,
		backgroundColor: color,
		height: 30,
		width: 30,
		marginHorizontal: 4,
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.32,
		elevation: 5,
	}),
	info: {
		marginHorizontal: 10,
	},
	description: {
		color: 'black',
		marginVertical: 10,
	},
	brand: {
		color: '#0bb09f',
		fontWeight: 'bold',
		marginVertical: 10,
	},
	price: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10,
	},
})

export default styles
