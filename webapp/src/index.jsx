import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getMuiTheme from '@material-ui/core/styles/MuiThemeProvider';
import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchCreateItem, watchGetItems, watchDeleteItem, watchUpdateItem} from './store/sagas'
import rootReducer from './store/reducers';

const muiTheme = getMuiTheme({
  'palette': {
    'accent1Color': 'rgba(191, 54, 12, 0.8)',
    'primary1Color': '#607d8b',
    'primary2Color': '#607d8b',
    'pickerHeaderColor': '#546e7a',
    'clockCircleColor': 'rgba(191, 54, 12, 0.07)'
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCreateItem);
sagaMiddleware.run(watchGetItems);
sagaMiddleware.run(watchUpdateItem);
sagaMiddleware.run(watchDeleteItem);

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
</Provider>
, document.getElementById('root'));
