import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const $adminLogin = createAsyncThunk(
    "adminLogin", async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/admin/login", formData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const $AdminAutoLogin = createAsyncThunk(
    "AdminAutoLogin", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/api/admin/AdminAutoLogin")
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)