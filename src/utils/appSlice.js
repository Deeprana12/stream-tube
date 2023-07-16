import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({    
    name: "app",
    initialState: {
        isMenuOpen : false,        
    },
    reducers:{       
        defaultOpenMenu: (state) => {
            state.isMenuOpen = true;
        },
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
})

export const { toggleMenu, closeMenu, defaultOpenMenu } = appSlice.actions;

export default appSlice.reducer;