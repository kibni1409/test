const InfoNote = (props) => {
    return(
        <div key={props.id}>
            <h3>Information note</h3>
            <h2>ID: {props.id}</h2>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
            <p>{props.status}</p>
            <button onClick={props.ActivateEditMode}>Edit</button>
            <button onClick={props.DeleteNote}>Delete</button>
        </div>
    )
}

export default InfoNote;