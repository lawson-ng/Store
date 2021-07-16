import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import ListProduct from './components/ListProduct'
import {fetchProducts, selectIds} from 'slice/products'
import {useDispatch, useSelector} from 'react-redux'

const ProductScreen = () => {
	const dispatch = useDispatch()

	const productIds = useSelector(selectIds)
	console.log(
		'🚀 ~ file: index.js ~ line 10 ~ ProductScreen ~ productIds',
		productIds,
	)
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<View style={styles.container}>
			<ListProduct productIds={productIds} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f7f7f7',
	},
})

export default ProductScreen
