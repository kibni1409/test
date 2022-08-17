import {useForm} from "react-hook-form";
import classes from "./../InformationNotes.module.css"


const EditNote = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        if (props.param.id === "new") {
            props.AddNotes(data.textHeading, data.textNote)
        } else {
            props.EditNotes(parseInt(props.param.id), data.textHeading, data.textNote, props.status)
        }
        reset();
        props.DeactivateEditMode()
    };

    return (
        <div key={props.id}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Create a new note</legend>
                    <p>Heading</p>
                    {/*<label htmlFor="textHeading">Heading:</label>*/}
                    <input type={"text"} placeholder={props.heading} {...register("textHeading",
                        {
                            required: true,
                            minLength: 3
                        })}/><br/>
                    {errors.textHeading && errors.textHeading.type === "minLength" && <p>Min length 3</p>}
                    <p>Text</p>
                    {/*<label htmlFor="textHeading">Text:</label>*/}
                    <textarea placeholder={props.text} {...register("textNote",
                        {
                            required: true,
                            minLength: 3
                        })}/><br/>
                    {errors.textNote && errors.textNote.type === "minLength" && <p>Min length 3</p>}
                </fieldset>
                    <button type={"submit"}>Save</button>

            </form>
        </div>
    )
}

export default EditNote;