import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InformationNotesContainer from "./Components/InformationNotes/InformationNotesContainer";
import ListOfNotesContainer from "./Components/ListOfNotes/ListOfNotesContainer";
import React from "react";
import Border from "./Components/ListOfNotes/Border";

function App() {
    return (
        //Подключаем роутер для отслеживания пути
        //Вывод списка заметок
        //Вывод границы списка заметор
        //Если путь будет начинаться с note, то выведется информация о заметке
        <BrowserRouter>
            <div className="App">
                <ListOfNotesContainer/>
                <Border/>
                <Routes>
                    <Route path="note/:id" element={<InformationNotesContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
