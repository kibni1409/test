import {connect} from "react-redux";
import ListOfNotes from "./ListOfNotes";
import {SearchNotesActionCreator} from "../../BLL/NotesReducer";

//Получаем список заметок и список заметок, соответствющее запросу поиска
let mapStateToProps = (state) => {
    return{
        listNotes: state.HomePage.notes,
        searchNotes: state.HomePage.searchNotes
    }
}
//Получаем нужные нам функции
let mapDispatchToProps = (dispatch) => {
    return{
        SearchNotes: (text) => {
            dispatch(SearchNotesActionCreator(text))
        }
    }
}

//Оборачиваем компоненту в HOС, что дает ей доступ к нужным ей данным из State и reducer
export default connect(mapStateToProps, mapDispatchToProps)(ListOfNotes);