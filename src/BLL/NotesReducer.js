const ADD_NOTE = "NotesReducer/ADD_NOTE"
const EDIT_NOTE = "NotesReducer/EDIT_NOTE"
const DELETE_NOTE = "NotesReducer/DELETE_NOTE"


let initialState = {
    notes: [
        {id: 0, text: "Выполнить первое задание", status: "completed"},
        {id: 1, text: "Выполнить второе задание", status: "in_progress"},
        {id: 2, text: "Выполнить третье задание", status: "pending"},
    ]
}


const NotesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NOTE: {
            let size = state.notes.length
            return{
                ...state,
                notes: [...state.notes, {id: size+1, text: action.text, status: "pending" }]
            }
        }
        case EDIT_NOTE:{
            return{
                ...state,
                notes: [...state.notes.map(note => note.id === action.id
                ? {id: action.id, text: action.text, status: action.status}
                : note
                )]
            }
        }
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

export const AddNotesActionCreator = (textNote) => {
    return{
        type: "NotesReducer/ADD_NOTE",
        text: textNote
    }
}
export const EditNotesActionCreator = (idNote, textNote, statusNote) => {
    return{
        type: "NotesReducer/EDIT_NOTE",
        id: idNote,
        text: textNote,
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