import classes from "./../InformationNotes.module.css"

const InfoNote = (props) => {
    return (
        <div key={props.id}>
            <h3>Information note</h3>
            <h2>ID: {props.id}</h2>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
            <p>{props.status}</p>
            <button className={classes.Edit__button} onClick={props.ActivateEditMode}>Edit</button>
            <button className={classes.Delete__button} onClick={props.DeleteNote}>Delete</button>
            {props.status === "pending"
                ? <button className={classes.Start__button} onClick={() => props.EditNotes(props.id, props.heading, props.text, "in_progress")}>Start</button>
                : props.status === "in_progress"
                    ? <button className={classes.Complete__button} onClick={() => props.EditNotes(props.id, props.heading, props.text, "completed")}>Complete</button>
                    : null}
        </div>
    )
}

export default InfoNote;