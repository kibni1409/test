import classes from "./ListOfNotes.module.css"
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const ListOfNotes = (props) => {

    let ElementNotes = props.listNotes.map(note => <NavLink to={"/note/" + note.id} key={note.id} ><p>{note.heading}</p></NavLink>)

    useEffect(() => {
        ElementNotes = props.listNotes.map(note => <NavLink to={"/note/" + note.id} key={note.id} ><p>{note.heading}</p></NavLink>)
    },[props.listNotes])



    return(
        <div className={classes.ListOfNotes}>
            <h1>List of notes</h1>
            <NavLink to="/note/new"><button>Create new note</button></NavLink>
            {ElementNotes}
        </div>
    )
}

export default ListOfNotes;