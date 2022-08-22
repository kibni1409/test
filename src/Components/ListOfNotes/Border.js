import classes from "./ListOfNotes.module.css";
import React from "react";

const Border = () => {

    //Локальный state, где мы храним изначальное расположение курсора и размер объекта
    const [initialPos, setInitialPos] = React.useState(null);
    const [initialSize, setInitialSize] = React.useState(null);

    //Записываем реальное значение размера и расположение курсова
    const initial = (e) => {

        let resizable = document.getElementById('List');

        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
    }

    //Изменяем размер объекта в завичимости от расположение курсора
    const resize = (e) => {

        let resizable = document.getElementById('List');

        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
    }

    //Выводим компоненту
    return(
        <div className={classes.Border}
             id="Teg"
             draggable='true'
             onDragStart={initial}
             onDrag={resize}>
        </div>
    )
}

export default Border;