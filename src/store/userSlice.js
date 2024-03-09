import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: "user",
    initialState:{name: "kim", age: 29},
    reducers:{
      changeName(state){
        state.name = "park"
      },
      increase(state,a){
        state.age += a.payload
      }
    }
})

export default user;

export let {changeName, increase} = user.actions