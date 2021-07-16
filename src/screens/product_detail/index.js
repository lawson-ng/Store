import {useRoute} from '@react-navigation/core'
import React, {useEffect} from 'react'
import {View, ScrollView, Text, Image, StatusBar} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProduct, selectById} from 'slice/products'
import styles from './styles'

const ProductDetailScreen = () => {
	const route = useRoute()
	const dispatch = useDispatch()

	const {productId} = route?.params

	if (!productId) {
		null
	}

	const product = useSelector((state) => selectById(state, productId))

	const {
		name,
		image_link,
		price,
		description,
		product_colors = [],
		brand,
	} = product

	useEffect(() => {
		const {product_api_url: productUrl} = product
		if (productUrl) {
			dispatch(fetchProduct(productUrl))
		}
	}, [])

	return (
		<ScrollView style={styles.container}>
			<StatusBar hidden />
			<View style={styles.imageContainer}>
				<Image
					source={{uri: image_link}}
					style={styles.image}
					resizeMode='contain'
				/>
				<Text style={styles.title}>{name}</Text>
			</View>

			<View style={styles.colorsContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{product_colors.map(({colour_name, hex_value}, index) => {
						return (
							<View
								key={`${colour_name}-${index}`}
								style={styles.productColor(hex_value)}
							/>
						)
					})}
				</ScrollView>
			</View>

			<View style={styles.info}>
				<Text style={styles.price}>${price}</Text>
				<Text style={styles.brand}>{brand}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</ScrollView>
	)
}

export default ProductDetailScreen
