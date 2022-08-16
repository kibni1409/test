import {useForm} from "react-hook-form";

const NewNote = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.AddNote(parseInt(props.param.id), data.textHeading, data.textNote, data.status)
        reset();
        props.DeactivateEditMode()
    };

    return(
        <div key={props.id}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={"text"} placeholder={props.heading} {...register("textHeading",
                    { required: true ,
                        minLength: 3
                    })}/>
                {errors.textHeading && errors.textHeading.type ==="minLength" && <p>Min length 3</p>}
                <textarea placeholder={props.text} {...register("textNote",
                    { required: true ,
                        minLength: 3
                    })}/>
                {errors.textNote && errors.textNote.type ==="minLength" && <p>Min length 3</p>}
                <input type={"text"} value={props.status} {...register("status")}/>
                <button type={"submit"}>Save</button>
            </form>
        </div>
    )
}
export default NewNote;