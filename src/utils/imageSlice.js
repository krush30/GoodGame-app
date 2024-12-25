import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "images",
    initialState: {
        addimage: null
    },
    reducers: {
        addImages: (state, action) => {
            state.addimage = action.payload;
        }
    }
})

export const { addImages } = imageSlice.actions;
export default imageSlice.reducer;