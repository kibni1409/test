const ADD_NOTE = "NotesReducer/ADD_NOTE"
const EDIT_NOTE = "NotesReducer/EDIT_NOTE"
const DELETE_NOTE = "NotesReducer/DELETE_NOTE"
const SEARCH_NOTE = "NotesReducer/SEARCH_NOTE"

//Объявление изначального остояния state
let initialState = {
    notes: [
        {id: 0, heading: "Выполнить первое задание", text: "Первое задание состоит в том, чтобы покормить кота", status: "completed"},
        {id: 1, heading: "Выполнить второе задание", text: "Второе задание состоит в том, чтобы помыть посуду", status: "in_progress"},
        {id: 2, heading: "Выполнить третье задание", text: "Третье задание состоит в том, чтобы почитать статью", status: "pending"},
    ],
    IdForNewNotes: 3, // id новой заметки
    searchNotes: [] //Массив с результатов поиска
}

//Reducer получает изначальный стейт, и на основе action, возвращает измененный state
const NotesReducer = (state = initialState, action) => {
    switch (action.type){
        //Добавление новой заметки
        case ADD_NOTE: {
            let size = state.IdForNewNotes
            return{
                ...state,
                notes: [...state.notes, {id: size+1, heading: action.textHeading, text: action.textNote, status: "pending" }],
                IdForNewNotes: size+1
            }
        }
        //Изменение заметки
        case EDIT_NOTE:{
            return{
                ...state,
                notes: [...state.notes.map(note => note.id === action.id
                ? note = {id: action.id, heading: action.textHeading, text: action.textNote, status: action.status}
                : note)]
            }
        }
        //Удаление заметки
        case DELETE_NOTE:{
            return{
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.id)]
            }
        }
        //Поиск заметок
        case SEARCH_NOTE:{
            return {
                ...state,
                searchNotes: [...state.notes.filter(note => {
                    let notelower = note.heading.toLowerCase()
                    let actionlower = action.text.toLowerCase()
                    return notelower.includes(actionlower)
                })]
            }
        }
        default:{
            return state
        }
    }
}

//Создание action для добавления заметки
export const AddNotesActionCreator = (textHeading, textNote) => {
    return{
        type: "NotesReducer/ADD_NOTE",
        textHeading: textHeading,
        textNote: textNote
    }
}
//Создание action для изменения заметки
export const EditNotesActionCreator = (idNote, textHeading, textNote, statusNote) => {
    return{
        type: "NotesReducer/EDIT_NOTE",
        id: idNote,
        textHeading: textHeading,
        textNote: textNote,
        status: statusNote
    }
}
//Создание action для удаление заметки
export const DeleteNotesActionCreator = (idNote) => {
    return{
        type: "NotesReducer/DELETE_NOTE",
        id: idNote
    }
}
//Создание action для поиска заметки
export const SearchNotesActionCreator = (textSearch) => {
    return{
        type: "NotesReducer/SEARCH_NOTE",
        text: textSearch
    }
}

export default NotesReducer;