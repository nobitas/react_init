import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// files
import App from './view/app';

// style
import 'vw-layout';
import _ from './style/index.css';

ReactDOM.render((
	<Router>
		<App/>
	</Router>
), document.getElementById('root'));