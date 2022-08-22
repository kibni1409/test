import classes from "./../InformationNotes.module.css"

const InfoNote = (props) => {
    return (
        //Вывод информации о заметке
        //В зависимости от состояния заметки, будет меняться цвет у состояния
        //В зависимости от состояния заметки, будет выводиться соответствующая кнопка действия
        <div key={props.id} className={classes.form}>
            <h1>Information note</h1>
            <span>ID: {props.id}</span>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
            {props.status === "pending"
                ? <>
                    <h1 className={classes.Start__Status}>{props.status.toUpperCase()}</h1>
                    <button className={classes.Start__button}
                            onClick={() => props.EditNotes(props.id, props.heading, props.text, "in_progress")}>Start
                    </button>
                </>
                : props.status === "in_progress"
                    ? <>
                    <h1 className={classes.Complete__Status}>{props.status.toUpperCase()}</h1>
                    <button className={classes.Complete__button}
                              onClick={() => props.EditNotes(props.id, props.heading, props.text, "completed")}>Complete</button>
                    </>
                    :  <h1 className={classes.Delete__Status}>{props.status.toUpperCase()}</h1>}
            <button className={classes.Edit__button} onClick={props.ActivateEditMode}>Edit</button>
            <button className={classes.Delete__button} onClick={props.DeleteNote}>Delete</button>
        </div>
    )
}

export default InfoNote;