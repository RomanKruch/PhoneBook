import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import contactReducer from "./contacts/contactsSlice";
import filterReducer from "./filter/filterReducer";
import userReducer from "./user/userSlice";

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
        user: persistReducer(userPersistConfig, userReducer)
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    devTools : composeWithDevTools()
})

export const persistor = persistStore(store);