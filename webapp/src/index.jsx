import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchCreateItem, watchGetItems, watchDeleteItem, watchUpdateItem} from './store/sagas'
import rootReducer from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCreateItem);
sagaMiddleware.run(watchGetItems);
sagaMiddleware.run(watchUpdateItem);
sagaMiddleware.run(watchDeleteItem);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById('root'));
