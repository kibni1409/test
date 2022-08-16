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
        EditNote: (idNote, textHeading, textNote, statusNote) => {
            dispatch(EditNotesActionCreator(idNote, textHeading, textNote, statusNote))
        },
        DeleteNote: (idNote) => {
            dispatch(DeleteNotesActionCreator(idNote))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationNotes);