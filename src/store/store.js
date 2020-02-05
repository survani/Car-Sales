import { createStore } from "redux";
import {rootReducer} from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

//I also included Redux Dev Tool
const store = createStore(rootReducer, composeWithDevTools( ));

export default store;
