import React from 'react';
import ReactDOM from 'react-dom';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css';
import './index.css';
import App from './components/app/app';
import {Provider} from "react-redux";
import {store} from "./services/store";
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename="/react-burger/">
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
