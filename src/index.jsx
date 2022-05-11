import React from 'react';
import ReactDOM from 'react-dom';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css';
import './index.css';
import App from './components/app/app';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import { rootReducer } from './services/reducers';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);