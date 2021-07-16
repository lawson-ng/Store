import React from 'react'
import {FlatList} from 'react-native'
import ProductItem from './ProductItem'

const ListProduct = ({productIds}) => {
	const renderProduct = (id) => <ProductItem key={id} productId={id} />

	return (
		<FlatList
			renderItem={({item: productId}) => renderProduct(productId)}
			data={productIds}
			keyExtractor={(productId) => productId}
		/>
	)
}

export default ListProduct
