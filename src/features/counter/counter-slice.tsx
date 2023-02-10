import  {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    }
})

// export const {incremented, decremented, reset} = counterSlice.actions;

export default counterSlice.reducer