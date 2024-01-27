import { createSlice } from '@reduxjs/toolkit';

const mousePositionSlice = createSlice({
    name: 'mousePosition',
    initialState: {
        position: {
            x: 0,
            y: 0
        }
    },
    reducers: {
        updatePosition: (state, action) => {
            state.x = action.payload.x,
            state.y = action.payload.y
        }
    }
});

export const { updatePosition } = mousePositionSlice.actions;
export default mousePositionSlice.reducer;