import {connect} from "react-redux";
import InformationNotes from "./InformationNotes";
import {AddNotesActionCreator, DeleteNotesActionCreator, EditNotesActionCreator} from "../../BLL/NotesReducer";

//Берем у state писок всех заметок
let mapStateToProps = (state) =>{
    return{
        listNotes: state.HomePage.notes
    }
}

//Берем у reducer нужные нам функции
let mapDispatchToProps = (dispatch) =>{
    return{
        AddNotes: (textHeading, textNote) => {
            dispatch(AddNotesActionCreator(textHeading, textNote))
        },
        EditNotes: (idNote, textHeading, textNote, statusNote) => {
            dispatch(EditNotesActionCreator(idNote, textHeading, textNote, statusNote))
        },
        DeleteNote: (idNote) => {
            dispatch(DeleteNotesActionCreator(idNote))
        }
    }
}
//Оборачиваем компоненту в HOC, что дает ей доступ к нужным ей функциям и данным
export default connect(mapStateToProps, mapDispatchToProps)(InformationNotes);