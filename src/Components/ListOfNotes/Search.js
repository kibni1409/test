import {NavLink} from "react-router-dom";
import classes from "./ListOfNotes.module.css";
import {useEffect} from "react";

const Search = (props) => {

    //Объявлем массив списка заметок с изменением цвета в соответсвтвие с их состоянием
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

    //Если строка запроса пустая, что выводится весь список
    //Обновление списка, при его изменениях
    useEffect(() => {
        let eFake = {
            target: {
                value: ""
            }
        }
        let SearchInput = document.getElementById('Search')
        SearchInput.value = '';
        Search(eFake)
    },[props.listNotes])

    //Функция поиска заметок по данному значению поисковой строки
    const Search = (e) => {
        props.SearchNotes(e.target.value)
    }

    //Вывод поисковой строки и результата поиска
    return (
        <>
            <input onChange={Search} id="Search" placeholder="Search notes"/>
            {ElementSearch}
        </>
    )
}

export default Search;