import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers:{
        cacheResults: (state, action) =>{
            state = Object.assign(state, action.payload)            
            if(Object.keys(state).length > 100){
                const keys = Object.keys(state);                
                while(keys.length > 100){
                    const LRU_Keys = keys.shift();
                    delete state[LRU_Keys];
                }                
            }
        }
    }
});

export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;