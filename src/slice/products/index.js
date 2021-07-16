import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'
import ProductModel from './productModel'
const prefix = 'products'

const productAdapter = createEntityAdapter({
	selectId: (entity) => entity?.id,
})

const initialState = productAdapter.getInitialState({
	isLoading: false,
	messageError: '',
})

export const fetchProducts = createAsyncThunk(
	`${prefix}/fetchProducts`,
	async () => {
		try {
			const response = await ProductModel.getListProduct()
			const {data = []} = response
			return data
		} catch (error) {
			throw Error(error)
		}
	},
)

export const fetchProduct = createAsyncThunk(
	`${prefix}/fetchProduct`,
	async (productUrl) => {
		try {
			const response = await ProductModel.getProduct(productUrl)
			const {data = []} = response
			return data
		} catch (error) {
			throw Error(error)
		}
	},
)

const productSlice = createSlice({
	name: prefix,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false
				productAdapter.addMany(state, action.payload)
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.isLoading = false
				productAdapter.updateOne(state, action.payload)
			})
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				const {error} = action
				state.isLoading = false
				state.messageError = error.message
			})
			.addCase(fetchProduct.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				const {error} = action
				state.isLoading = false
				state.messageError = error.message
			})
	},
})

const {reducer, actions} = productSlice

const productsSelector = productAdapter.getSelectors((state) => state.products)

export const {selectIds, selectById} = productsSelector

export default reducer
