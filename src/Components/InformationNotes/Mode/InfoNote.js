const InfoNote = (props) => {
    return (
        <div key={props.id}>
            <h3>Information note</h3>
            <h2>ID: {props.id}</h2>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
            <p>{props.status}</p>
            <button onClick={props.ActivateEditMode}>Edit</button>
            <button onClick={props.DeleteNote}>Delete</button>
            {props.status === "pending"
                ? <button onClick={() => props.EditNotes(props.id, props.heading, props.text, "in_progress")}>Start</button>
                : props.status === "in_progress"
                    ? <button onClick={() => props.EditNotes(props.id, props.heading, props.text, "completed")}>Complete</button>
                    : <p>Completed</p>}
        </div>
    )
}

export default InfoNote;