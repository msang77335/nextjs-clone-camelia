import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "../saga/rootSaga";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "root",
   storage: storage,
   whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   persistedReducer,
   applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
