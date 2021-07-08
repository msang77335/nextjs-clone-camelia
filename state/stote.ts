import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "../saga/rootSaga";
import allReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
