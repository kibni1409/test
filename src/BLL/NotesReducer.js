const ADD_NOTE = "NotesReducer/ADD_NOTE"
const EDIT_NOTE = "NotesReducer/EDIT_NOTE"
const DELETE_NOTE = "NotesReducer/DELETE_NOTE"


let initialState = {
    notes: [
        {id: 0, heading: "Выполнить первое задание", text: "Первое задание состоит в том, чтобы покормить кота", status: "completed"},
        {id: 1, heading: "Выполнить второе задание", text: "Второе задание состоит в том, чтобы помыть посуду", status: "in_progress"},
        {id: 2, heading: "Выполнить третье задание", text: "Третье задание состоит в том, чтобы почитать статью", status: "pending"},
    ],
    IdForNewNotes: 3
}


const NotesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NOTE: {
            let size = state.IdForNewNotes
            return{
                ...state,
                notes: [...state.notes, {id: size+1, heading: action.textHeading, text: action.textNote, status: "pending" }],
                IdForNewNotes: size+1
            }
        }
        case EDIT_NOTE:{
            return{
                ...state,
                notes: [...state.notes.map(note => note.id === action.id
                ? note = {id: action.id, heading: action.textHeading, text: action.textNote, status: action.status}
                : note)]
            }
        }
            // id: action.id, heading: action.textHeading, text: action.textNote, status: action.status
        case DELETE_NOTE:{
            return{
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.id)]
            }
        }
        default:{
            return state
        }
    }
}

export const AddNotesActionCreator = (textHeading, textNote) => {
    return{
        type: "NotesReducer/ADD_NOTE",
        textHeading: textHeading,
        textNote: textNote
    }
}
export const EditNotesActionCreator = (idNote, textHeading, textNote, statusNote) => {
    return{
        type: "NotesReducer/EDIT_NOTE",
        id: idNote,
        textHeading: textHeading,
        textNote: textNote,
        status: statusNote
    }
}
export const DeleteNotesActionCreator = (idNote) => {
    return{
        type: "NotesReducer/DELETE_NOTE",
        id: idNote
    }
}


export default NotesReducer;