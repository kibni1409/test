import NotesReducer from "./NotesReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    HomePage: NotesReducer
})

const store = createStore(reducers);
window.store = store;

export default store;