import classes from "./InformationNotes.module.css"
import {useParams} from "react-router-dom";

const InformationNotes = (props) => {

    let param = useParams()

    let ElementNotes = props.listNotes.map(note => note.id === parseInt(param.id)
    ?<div key={note.id}>
            <h3>Information note</h3>
            <h1>{note.id}</h1>
            <span>{note.text}</span>
            <p>{note.status}</p>
        </div>
    : null)

    return (
        <div className={classes.InformationNotes}>
            <h1>Information notes</h1>
            {ElementNotes}
        </div>
    )
}

export default InformationNotes;