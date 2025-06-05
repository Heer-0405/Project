import { createSlice } from "@reduxjs/toolkit";
import { $adminLogin } from "../Thunk/Admin.thunk";

const slice = createSlice({
    name: "AdminSlice",

    initialState: {
        adminLogin: false
    },

    reducers: {

    },

    extraReducers: (builder) => {
        builder

        //! Admin Login

        .addCase($adminLogin.pending, (state) => {
        state.loading = true

    })
        .addCase($adminLogin.fulfilled, (state, action) => {
            const { message, process } = action.payload
            state.loading = false
            state.resMsg = message
            state.process = process
            toast.success(message, {
                position: "bottom-right",
                closeOnClick: true
            })
        })
        .addCase($adminLogin.rejected, (state, action) => {
            const { message, process } = action.payload
            state.loading = false
            state.resMsg = message
            state.process = process
            toast.error(message, {
                position: "bottom-right",
                closeOnClick: true
            })
        })


}
});


export const AdminSlice = slice.reducer