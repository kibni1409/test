import classes from "./InformationNotes.module.css"
import {useParams} from "react-router-dom";
import {useState} from "react";
import { useForm } from "react-hook-form";

const InformationNotes = (props) => {

    let [editMode, setEditMode] = useState(false)
    let param = useParams()

    const ActivateEditMode = () => {
        setEditMode(true)
    }

    const DeleteNote = () => {
        props.DeleteNote(parseInt(param.id))
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.EditNote(parseInt(param.id), data.textHeading, data.textNote, data.status)
        reset();
        setEditMode(false)
    };


    let ElementNotes = props.listNotes.map(note => note.id === parseInt(param.id)
        ? editMode
            ? <div key={note.id}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type={"text"} placeholder={note.heading} {...register("textHeading",
                        { required: true ,
                            minLength: 3
                        })}/>
                    {errors.textHeading && errors.textHeading.type ==="minLength" && <p>Min length 3</p>}
                    <textarea placeholder={note.text} {...register("textNote",
                        { required: true ,
                            minLength: 3
                    })}/>
                    {errors.textNote && errors.textNote.type ==="minLength" && <p>Min length 3</p>}
                    <input type={"text"} value={note.status} {...register("status")}/>
                    <button type={"submit"}>Save</button>
                </form>
            </div>
            : <div key={note.id}>
                <h3>Information note</h3>
                <h2>ID: {note.id}</h2>
                <h3>{note.heading}</h3>
                <p>{note.text}</p>
                <p>{note.status}</p>
                <button onClick={ActivateEditMode}>Edit</button>
                <button onClick={DeleteNote}>Delete</button>
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