import { configureStore } from "@reduxjs/toolkit";
import imagereducer from './imageSlice';
const appStore = configureStore({
    reducer: {
        images: imagereducer
    }
})

export default appStore;