import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    products: [],
    selectProduct: {},
}

const API_URL = "https://fakestoreapi.com"


export const getAllProducts = createAsyncThunk("product", async () => {
   try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      alert("Ürünler yüklenemedi /" + error);
    }
})


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            const searchTerm = action.payload.toLowerCase()
            if(searchTerm){
                state.products = state.products.filter((product) => product.title.toLowerCase().includes(searchTerm))
            }
            else{
                
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})


export const { searchProduct } = productSlice.actions

export default productSlice.reducer