import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// 1. 비동기작업 - thunk 추가하기 : action에서 dispatch를 함수로 리턴
import thunk from "redux-thunk";

// 2. middleware에 thunk 추가하기
const middleware = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
