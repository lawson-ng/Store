import React, {memo} from 'react'
import {TouchableOpacity, Image, View, Text, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {selectById} from 'slice/products'
import {Rating} from 'react-native-ratings'
import {useNavigation} from '@react-navigation/native'

import {productItemStyles as styles} from './styles'
import {ROUTES} from 'utilities/constants'

const ProductItem = ({productId}) => {
	const navigation = useNavigation()

	const product = useSelector((state) => selectById(state, productId))

	const onPress = () =>
		navigation.navigate(ROUTES.PRODUCT_DETAIL.name, {productId})

	const {
		name,
		image_link,
		price,
		product_type,
		rating,
		product_colors = [],
	} = product
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image
				source={{uri: image_link}}
				resizeMode='contain'
				style={styles.image}
			/>
			<View style={styles.rightItem}>
				<View style={styles.info}>
					<Text style={styles.name}>{name}</Text>
					<Rating
						startingValue={Number(rating)}
						ratingCount={5}
						imageSize={15}
						style={styles.rating}
					/>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.colorsContainer}
						overScrollMode='always'>
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

				<View style={styles.bottomInfo}>
					<Text style={styles.productType}>{product_type}</Text>
					<Text style={styles.price}>${price}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default memo(ProductItem)
