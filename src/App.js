import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InformationNotesContainer from "./Components/InformationNotes/InformationNotesContainer";
import ListOfNotesContainer from "./Components/ListOfNotes/ListOfNotesContainer";
import React from "react";
import Border from "./Components/ListOfNotes/Border";

function App() {



    return (
        <BrowserRouter>
            <div className="App">
                <ListOfNotesContainer/>
                <Border/>
                <Routes>
                    <Route path="*" element={<ListOfNotesContainer/>}/>
                    <Route path="/note" element={<ListOfNotesContainer/>}/>
                    <Route path="note/:id" element={<InformationNotesContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
