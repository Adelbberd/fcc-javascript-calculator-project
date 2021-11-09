import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import appendNumReducer from './redux-reducers/appendNumReducer';
import expressionReducer from './redux-reducers/expressionReducer';
import digitLimitReducer from './redux-reducers/digitLimitReducer';
import hasDecimalReducer from './redux-reducers/hasDecimalReducer';

const rootReducer = combineReducers({
	inputNumbers: appendNumReducer,
	expression: expressionReducer,
	digitLimit: digitLimitReducer,
	hasDecimal: hasDecimalReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
