import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session";
import cartReducer from "./reducers/cartReducer";

const reducers = {
  cartReducer: persistReducer(
    {
      key: "cartReducer",
      storage: session,
    },
    cartReducer
  ),
};

export const store = createStore(combineReducers(reducers));

export const persistor = persistStore(store);
