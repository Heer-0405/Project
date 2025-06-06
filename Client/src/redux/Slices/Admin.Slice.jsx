import { createSlice } from "@reduxjs/toolkit";
import { $AdminAutoLogin, $adminLogin } from "../Thunk/Admin.thunk";
import { toast } from "react-toastify";

const slice = createSlice({
    name: "AdminSlice",

    initialState: {
        loading: false,
        process: null,
        adminLogin: false,
       adminData :null
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
            state.adminLogin = true
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
            state.adminLogin = false
            toast.error(message, {
                position: "bottom-right",
                closeOnClick: true
            })
        })

        // ! Admin Auto Login
        builder
      .addCase($AdminAutoLogin.pending, (state) => {
        state.loading = true
      })
      .addCase($AdminAutoLogin.fulfilled, (state, action) => {
        const { message, process, data } = action.payload
        state.loading = false
        state.process = process
        state.adminData = data
        state.adminLogin = true
        toast.success(message, {
          position: "bottom-right",
          closeOnClick: true
        })
      })
      .addCase($AdminAutoLogin.rejected, (state, action) => {
        const { process } = action.payload
        state.loading = false
        state.process = process
      })


}
});


export const AdminSlice = slice.reducer