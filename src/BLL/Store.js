import NotesReducer from "./NotesReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    HomePage: NotesReducer
})

const store = createStore(reducers);

export default store;