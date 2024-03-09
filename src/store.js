import { configureStore, createSlice } from '@reduxjs/toolkit'

import user from './store/userSlice.js'
import cart from './store/stockSlice.js'

let stock = createSlice({
    name: "stock",
    initialState: [10,11,12]
})
/*
let cart = createSlice({
  name: "cart",
  initialState: [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}],
  reducers:{
    changeStocks(state,item){
      const order = state.find(function(state){return state.id === item.id})
      return (order.count + 1)
    }
  }})
*/
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
   }
}) 
