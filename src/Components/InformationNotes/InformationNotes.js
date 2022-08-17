import classes from "./InformationNotes.module.css"
import {useParams} from "react-router-dom";
import {useState} from "react";
import InfoNote from "./Mode/InfoNote";
import EditNote from "./Mode/EditNote";

const InformationNotes = (props) => {

    let [editMode, setEditMode] = useState(false)
    let param = useParams()

    const ActivateEditMode = () => {
        setEditMode(true)
    }
    const DeactivateEditMode = () => {
        setEditMode(false)
    }

    const DeleteNote = () => {
        props.DeleteNote(parseInt(param.id))
    }

    let ElementNotes;

    if (param.id === "new") {
        ElementNotes = <EditNote
            param={param}
            DeactivateEditMode={DeactivateEditMode}
            AddNotes={props.AddNotes}
            listNotes={props.listNotes}
        />
    } else {
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
    }

    return (
        <div className={classes.InformationNotes}>
            <h1>Information notes</h1>
            {ElementNotes}
        </div>
    )
}

export default InformationNotes;