import classes from "./ListOfNotes.module.css"
import {NavLink} from "react-router-dom";

const ListOfNotes = (props) => {
    
    let ElementNotes = props.listNotes.map(note => {
            switch (note.status) {
                case "pending":
                    console.log("pen")
                    return <NavLink className={classes.NavLink + " " + classes.Pending} to={"/note/" + note.id}
                                    key={note.id}><p>{note.heading}</p></NavLink>
                case "in_progress":
                    console.log("prog")
                    return <NavLink className={classes.NavLink + " " + classes.InProgress} to={"/note/" + note.id}
                                    key={note.id}><p>{note.heading}</p></NavLink>
                case "completed":
                    console.log("com")
                    return <NavLink className={classes.NavLink + " " + classes.Completed} to={"/note/" + note.id}
                                    key={note.id}><p>{note.heading}</p></NavLink>

                default:
                    console.log("def")
            }
        }
    )

    return (
        <div className={classes.ListOfNotes}>
            <h1>List of notes</h1>
            <NavLink to="/note/new">
                <button>Create new note</button>
            </NavLink>
            {ElementNotes}
        </div>
    )
}

export default ListOfNotes;