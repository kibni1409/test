import {connect} from "react-redux";
import InformationNotes from "./InformationNotes";
import {AddNotesActionCreator, DeleteNotesActionCreator, EditNotesActionCreator} from "../../BLL/NotesReducer";

let mapStateToProps = (state) =>{
    return{
        listNotes: state.HomePage.notes
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        AddNotes: (textNote) => {
            dispatch(AddNotesActionCreator(textNote))
        },
        EditNote: (idNote, textNote, statusNote) => {
            dispatch(EditNotesActionCreator(idNote, textNote, statusNote))
        },
        DeleteNote: (idNote) => {
            dispatch(DeleteNotesActionCreator(idNote))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationNotes);