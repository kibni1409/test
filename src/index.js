import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./BLL/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Подключаем отслеживание маршрута
    //Подключаем store, что дает нас использовать HOC connect
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

