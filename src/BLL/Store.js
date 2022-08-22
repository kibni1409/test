import NotesReducer from "./NotesReducer";
import {combineReducers, createStore} from "redux";

//Создание reducers на основе нашего NotesReducer
let reducers = combineReducers({
    HomePage: NotesReducer
})

//Создание store на основе нашего reducer
const store = createStore(reducers);

export default store;