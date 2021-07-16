import React from 'react'
import {View} from 'react-native'
import ListProduct from './components/ListProduct'
import styles from './styles'

const ProductScreen = () => {
	return (
		<View style={styles.container}>
			<ListProduct />
		</View>
	)
}

export default ProductScreen
