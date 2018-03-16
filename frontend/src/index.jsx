import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise,multi,thunk)(createStore)(reducers,devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));