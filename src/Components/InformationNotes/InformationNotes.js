import classes from "./InformationNotes.module.css"
import {Navigate, useParams} from "react-router-dom";
import {useState} from "react";
import InfoNote from "./Mode/InfoNote";
import EditNote from "./Mode/EditNote";

const InformationNotes = (props) => {

    //Локальный state, где мы храним состояние режима редактирования
    let [editMode, setEditMode] = useState(false)
    //Параметр из пути маршрута
    let param = useParams()

    //Функция активарии режима редактирования
    const ActivateEditMode = () => {
        setEditMode(true)
    }
    //Функция диактивации режима редактирования
    const DeactivateEditMode = () => {
        setEditMode(false)
    }

    //Функция удаления заметки
    const DeleteNote = () => {
        props.DeleteNote(parseInt(param.id))
    }

    // Массив элементов всех заметок
    let ElementNotes;

    //Если параметр new, то открываем форму создания новой заметки
    if (param.id === "new") {
         ElementNotes = <EditNote
             param={param}
             DeactivateEditMode={DeactivateEditMode}
             AddNotes={props.AddNotes}
             listNotes={props.listNotes}
             heading={""}
             text={""}
         />
    }
    //Иначе открываем форму редактирования заметки с заполнением полей
    //Если режим редактирования выключен, то отображаем информацию о заметке
    else {
        ElementNotes = props.listNotes.map(note => note.id === parseInt(param.id)
            ? editMode
                ? <EditNote
                    key={note.id}
                    id={note.id}
                    heading={note.heading}
                    text={note.text}
                    status={note.status}
                    param={param}
                    DeactivateEditMode={DeactivateEditMode}
                    EditNotes={props.EditNotes}
                    listNotes={props.listNotes}
                />
                : <InfoNote
                    key={note.id}
                    id={note.id}
                    heading={note.heading}
                    text={note.text}
                    status={note.status}
                    ActivateEditMode={ActivateEditMode}
                    DeleteNote={DeleteNote}
                    EditNotes={props.EditNotes}
                />
            : null)
        //Если параметр некорректный, то происходит переадресация
        if(ElementNotes.every(element => element === null)){
            return <Navigate to="/note/new" />
        }
        else{
            return ElementNotes
        }
    }

    //Вывод елементов заметок
    return (
        <div className={classes.InformationNotes}>
            <h1>Information notes</h1>
            {ElementNotes}
        </div>
    )
}

export default InformationNotes;