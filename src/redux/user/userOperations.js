import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import NotificationManager from "react-notifications/lib/NotificationManager";

axios.defaults.baseURL = 'http://localhost:5000/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unSet() {
        axios.defaults.headers.common.Authorization = '';
    }
}


export const onSignUp = createAsyncThunk('user/signUp',
    async (userInfo, {rejectWithValue}) => {
        try {
            const { data } = await axios.post('/auth/register', userInfo);
            // token.set(data.data.token);
            return data.data;
        } catch ({ response }) {
            NotificationManager.warning(response.data.data.massage, '', 5000);
            return rejectWithValue(null);
        }
    }
)

export const onLogin = createAsyncThunk('user/login',
    async (userInfo, {rejectWithValue}) => {
        try {
            const { data } = await axios.post('/auth/login', userInfo);
            token.set(data.data.token);
            return data.data;
        } catch ({ response }) {
            NotificationManager.warning(response.data.data.massage, '', 5000);
            return rejectWithValue(null);
        }
    }
)

export const onLogout = createAsyncThunk('user/logout',
    async () => {
        await axios.post('/auth/logout');
        token.unSet();
    }
)

export const onRefresh = createAsyncThunk('user/refresh', 
    async (_, {rejectWithValue, getState}) => {
        const state = getState();
        const persistToken = state.user.token;

        if (persistToken === null) {
            return rejectWithValue()
        }

        try {
            token.set(persistToken);
            const { data } = await axios.get('/auth/refresh');
            return {
                userInfo: {...data.data.user}, 
                token: persistToken
            }
        } catch {
            return rejectWithValue(null)
        }
    }
)

export const onVerify = createAsyncThunk('user/verify', 
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const { email } = state.user.userInfo;
        
        if (!email) {
            return rejectWithValue(null)
        }

        try {
            const { data } = await axios.get(`/auth/isVerify/${email}`);
            if (data) {
                token.set(data.data.token)
                return data.data.token;
            }

            return rejectWithValue(null);
        } catch {
            return rejectWithValue(null)
        }
    }
)