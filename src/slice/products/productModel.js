import API from 'utilities/api'

const getListProduct = async () => {
	const url = 'products.json?brand=maybelline'
	const response = await API.get(url)
	return response
}

const getProduct = async (productUrl) => {
	const response = await API.get(productUrl)
	return response
}

export default {getListProduct, getProduct}
