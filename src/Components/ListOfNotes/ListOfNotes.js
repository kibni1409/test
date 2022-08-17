import classes from "./ListOfNotes.module.css"
import {NavLink} from "react-router-dom";
import Search from "./Search";

const ListOfNotes = (props) => {

    return (
        <div className={classes.ListOfNotes}>
            <h1>List of notes</h1>
            <NavLink to="/note/new">
                <button>Create new note</button>
            </NavLink>
            <Search
                listNotes={props.listNotes}
                SearchNotes={props.SearchNotes}
                searchNotes={props.searchNotes}
            />
        </div>
    )
}

export default ListOfNotes;