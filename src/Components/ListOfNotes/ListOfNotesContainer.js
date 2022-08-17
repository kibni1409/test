import {connect} from "react-redux";
import ListOfNotes from "./ListOfNotes";
import {SearchNotesActionCreator} from "../../BLL/NotesReducer";

let mapStateToProps = (state) => {
    return{
        listNotes: state.HomePage.notes,
        searchNotes: state.HomePage.searchNotes
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        SearchNotes: (text) => {
            dispatch(SearchNotesActionCreator(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfNotes);