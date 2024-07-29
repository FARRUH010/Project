import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosTodo } from '../../axiosRequest/axiosRequest'
import axios from 'axios'


export const getData = createAsyncThunk(
    `todos/getData`,
    async () => {
        const {data} = await axios.get(`https://6647422551e227f23ab1afe6.mockapi.io/project`)
        return data
    }
)


export const todolistSlice = createSlice({
  name: 'todos',
  initialState:{
      data:[],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled,(state,action)=>{
        state.data = action.payload
    }),
    builder.addCase(getData.rejected,(state)=>{
        state.status = "loading ",
        state.error = null
    }),
    builder.addCase(getData.pending,(state)=>{
        state.status = "loading",
        state.error = null
    })
}
})

// export const {setName,setDesc,setIdx} = todolistSlice.actions

export default todolistSlice.reducer