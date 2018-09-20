import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//配置redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/';

// files
import App from './view/app';

// style
// import 'vw-layout';
const logger = createLogger();
const store = createStore(
	reducers,
	applyMiddleware(
		thunk,
		logger
	)
)

ReactDOM.render((
	<Provider store={ store }>
		<Router>
			<App/>
		</Router>
	</Provider>
), document.getElementById('root'));