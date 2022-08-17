import {NavLink} from "react-router-dom";
import classes from "./ListOfNotes.module.css";
import {useEffect} from "react";

const Search = (props) => {

    let ElementSearch = props.searchNotes.map(note => {
        switch (note.status) {
            case "pending":
                return <NavLink className={classes.NavLink + " " + classes.Pending} to={"/note/" + note.id}
                                key={note.id}><p>{note.heading}</p></NavLink>
            case "in_progress":
                return <NavLink className={classes.NavLink + " " + classes.InProgress} to={"/note/" + note.id}
                                key={note.id}><p>{note.heading}</p></NavLink>
            case "completed":
                return <NavLink className={classes.NavLink + " " + classes.Completed} to={"/note/" + note.id}
                                key={note.id}><p>{note.heading}</p></NavLink>
            default:
        }
    })

    useEffect(() => {
        let eFake = {
            target: {
                value: ""
            }
        }
        Search(eFake)
    },[])

    const Search = (e) => {
        console.log(props.searchNotes)
        props.SearchNotes(e.target.value)
    }

    return (
        <>
            <input onChange={Search} placeholder="Search notes"/>
            {ElementSearch}
        </>
    )
}

export default Search;