import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/root.reducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AppMiddleware from "../../midlware/AppMiddleware";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares =
    process.env.NODE_ENV !== "production"
        ? [
            require("redux-immutable-state-invariant").default(),
            thunk,
            AppMiddleware,
        ]
        : [thunk, AppMiddleware];

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
