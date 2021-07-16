import React, {useEffect} from 'react'
import {View, FlatList} from 'react-native'
import ProductItem from './ProductItem'
import {fetchProducts, selectIds} from 'slice/products'
import {useDispatch, useSelector} from 'react-redux'
import Loader from 'components/Loader'

const ListProduct = () => {
	const dispatch = useDispatch()

	const productIds = useSelector(selectIds)
	const isLoading = useSelector((state) => state.products.isLoading)

	const handleFetchProducts = () => dispatch(fetchProducts())

	useEffect(() => {
		// TODO: add current pagination
		handleFetchProducts()
	}, [])

	const renderProduct = (id) => <ProductItem key={id} productId={id} />

	return (
		<View>
			{isLoading && <Loader />}
			<FlatList
				renderItem={({item: productId}) => renderProduct(productId)}
				data={productIds}
				keyExtractor={(productId) => productId}
				refreshing={false}
				onRefresh={handleFetchProducts}
				onEndReached={handleFetchProducts}
				onEndReachedThreshold={1}
			/>
		</View>
	)
}

export default ListProduct
