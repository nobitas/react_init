import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//配置redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';

// files
import App from './view/app';

// style
// import 'vw-layout';

const store = createStore(
	reducers,
	applyMiddleware()
)

ReactDOM.render((
	<Provider store={ store }>
		<Router>
			<App/>
		</Router>
	</Provider>
), document.getElementById('root'));