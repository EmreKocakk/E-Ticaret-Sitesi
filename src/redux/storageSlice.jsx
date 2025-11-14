import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getStorage = () => {
  if(localStorage.getItem("basket")){
    return JSON.parse(localStorage.getItem("basket"))
  }
  return []
}


const initialState = {
    products: getStorage(),
    open: false,
    totalAmount: 0
}


export const setStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}




export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)
            if(findProduct){
                const updateStorage = state.products.filter((product) => product.id != action.payload.id)
                findProduct.count += action.payload.count 
                state.products = [...updateStorage, findProduct]
                setStorage(state.products)
            }
            else{
                state.products = [...state.products, action.payload]
                setStorage(state.products)
            }
        },
        changeOpen: (state) => {
            state.open = !state.open
        },
        falseOpen: (state) => {
            state.open = false
        },
        calculateAmount: (state, action) => {
            state.totalAmount = 0;
            state.products && state.products.map((product)=> {
                state.totalAmount += product.price * product.count
            })
        },
        removeProduct: (state, action) => {
           state.products = state.products.filter((product) => product.id != action.payload)
           setStorage(state.products)
        }
    },
    
})


export const { addBasket, changeOpen, falseOpen, calculateAmount, removeProduct } = storageSlice.actions

export default storageSlice.reducer