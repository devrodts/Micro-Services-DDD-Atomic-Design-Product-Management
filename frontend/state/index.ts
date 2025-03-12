import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface InitialStateInterface{
    mode: "light" | "dark";
    userId  : string | null;
    isSidebarOpen: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateInterface = {
    mode: "light",
    userId: null,
    isSidebarOpen: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload;
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
        setMode: (state, action: PayloadAction<"light" | "dark">) => {
            state.mode = action.payload;
        },
        setUserId: (state, action: PayloadAction<string | null>) => {
            state.userId = action.payload;
        },
    },
})

export const {} = globalSlice.actions
export default globalSlice.reducer