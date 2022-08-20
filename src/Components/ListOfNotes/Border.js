import classes from "./ListOfNotes.module.css";
import React from "react";

const Border = () => {

    const [initialPos, setInitialPos] = React.useState(null);
    const [initialSize, setInitialSize] = React.useState(null);

    const initial = (e) => {

        let resizable = document.getElementById('List');

        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
        console.log("Мышь:" + e.clientX)
        console.log("Размер:" + resizable.offsetWidth)

    }

    const resize = (e) => {

        let resizable = document.getElementById('List');

        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
        console.log("Итог:" + resizable.style.width)

    }

    return(
        <div className={classes.Teg}
             id="Teg"
             draggable='true'
             onDragStart={initial}
             onDrag={resize}>
        </div>
    )
}

export default Border;