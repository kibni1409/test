import {useForm} from "react-hook-form";


const EditNote = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        if(props.param.id === "new"){
            props.AddNotes(data.textHeading, data.textNote)
        }
        else{
            props.EditNotes(parseInt(props.param.id), data.textHeading, data.textNote, props.status)
        }
        reset();
        props.DeactivateEditMode()
    };

    return(
        <div key={props.id}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="textHeading">Heading:</label>
                <input type={"text"} placeholder={props.heading} {...register("textHeading",
                    { required: true ,
                        minLength: 3
                    })}/><br/>
                {errors.textHeading && errors.textHeading.type ==="minLength" && <p>Min length 3</p>}
                <label htmlFor="textHeading">Text:</label>
                <textarea placeholder={props.text} {...register("textNote",
                    { required: true,
                        minLength: 3
                    })}/><br/>
                {errors.textNote && errors.textNote.type ==="minLength" && <p>Min length 3</p>}
                <button type={"submit"}>Save</button>
            </form>
        </div>
    )
}

export default EditNote;