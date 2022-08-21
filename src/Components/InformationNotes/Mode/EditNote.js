import {useForm} from "react-hook-form";
import classes from "./../InformationNotes.module.css"
import {useState} from "react";

const EditNote = (props) => {

    let [heading, setHeading] = useState(props.heading)
    let [text, setText] = useState(props.text)

    const ChangeHeading = (e) => {
        setHeading(e.target.value)
    }
    const ChangeText = (e) => {
        setText(e.target.value)
    }

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
                    <input {...register("textHeading",
                        {
                            required: true,
                            minLength: 3
                        })}
                           type={"text"}
                           placeholder={heading}
                           onChange={ChangeHeading}
                           value={heading}
                    /><br/>
                    {errors.textHeading && errors.textHeading.type === "minLength" && <p>Min length 3</p>}
                    <p>Text</p>
                    <textarea
                        {...register("textNote",
                            {
                                required: true,
                                minLength: 3
                            })}
                        onChange={ChangeText}
                        value={text}
                    /><br/>
                    {errors.textNote && errors.textNote.type === "minLength" && <p>Min length 3</p>}
                </fieldset>
                <button className={classes.Save__button} type={"submit"}>Save</button>
            </form>
        </div>
    )
}

export default EditNote;