import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    pending : false,
    error : false
        
}



export const todoListSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.value = action.payload
        },
        updateError: (state) => {
            state.error = true
        }


    }
})

export const { updateStart, updateSuccess, updateError } = todoListSlice.actions;

export default todoListSlice.reducer;