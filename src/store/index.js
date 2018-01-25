import {createEpicMiddleware} from "redux-observable"
import {createStore, applyMiddleware} from "redux"
import rootReducer from "../reducers/index"

const epicMiddleware = createEpicMiddleware()
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

export default store