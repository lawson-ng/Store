import {Dimensions} from 'react-native'

export const screenDimension = Dimensions.get('screen')

export const ROUTES = {
	HOME: {
		name: 'home',
		options: {
			title: 'Home',
		},
	},
	SIGNIN: {
		name: 'signin',
		options: {
			title: 'Sign In',
		},
	},
	SIGNUP: {
		name: 'signup',
		options: {
			title: 'Sign Up',
		},
	},
	PRODUCTS: {
		name: 'products',
		options: {
			title: 'Products',
		},
	},
	PRODUCT_DETAIL: {
		name: 'productDetail',
		options: {
			title: 'Product Detail',
		},
	},
}
