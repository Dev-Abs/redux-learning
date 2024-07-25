import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'; // Import the counter reducer


export const store = configureStore({
    reducer: {
        counter: counterReducer, // Add the counter reducer to the store
    },
});