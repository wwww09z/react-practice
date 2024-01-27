import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import mousePositionReducer from "./slices/mousePositionSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        mousePosition: mousePositionReducer
    }
});

export default store;