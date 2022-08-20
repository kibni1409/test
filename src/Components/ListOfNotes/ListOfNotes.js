import classes from "./ListOfNotes.module.css"
import {NavLink} from "react-router-dom";
import Search from "./Search";
import React from "react";

const ListOfNotes = (props) => {



    return (
        <div className={classes.ListOfNotesDiv} id="List" >
            <div className={classes.ListOfNotes} >
                <h1>List of notes</h1>
                <NavLink to="/note/new">
                    <button className={classes.New__button}>Create new note</button>
                </NavLink>
                <Search
                    listNotes={props.listNotes}
                    SearchNotes={props.SearchNotes}
                    searchNotes={props.searchNotes}
                />
            </div>

        </div>
    )
}

export default ListOfNotes;