import classes from "./ListOfNotes.module.css"
import {NavLink} from "react-router-dom";

const ListOfNotes = (props) => {
    let ElementNotes = props.listNotes.map(note => <NavLink to={"/note/" + note.id} key={note.id} ><p>{note.text}</p></NavLink>)

    return(
        <div className={classes.ListOfNotes}>
            <h1>List of notes</h1>
            {ElementNotes}
        </div>
    )
}

export default ListOfNotes;