import {useForm} from "react-hook-form";
import classes from "./../InformationNotes.module.css"
import {useState} from "react";

const EditNote = (props) => {

    //Локальный state, где мы храним текуще значение формы редактирования
    let [heading, setHeading] = useState(props.heading)
    let [text, setText] = useState(props.text)

    //Функция изменяет значение заголовка в форме
    const ChangeHeading = (e) => {
        setHeading(e.target.value)
    }
    //Функция изменяет значение текса в форме
    const ChangeText = (e) => {
        setText(e.target.value)
    }

    //Подключение формы
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    //Функция отправки формы, где мы вызываем функцию добавления или изменения заметки
    //Взависимости от параметра в пути маршрута
    //Очищаем форму
    //Выключаем режим редактирования
    const onSubmit = (data) => {
        if (props.param.id === "new") {
            props.AddNotes(data.textHeading, data.textNote)
        } else {
            props.EditNotes(parseInt(props.param.id), data.textHeading, data.textNote, props.status)
        }
        reset();
        props.DeactivateEditMode()
    };

    //Вывод формы на экран
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