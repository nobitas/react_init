import React from 'react';
import ReactDOM from 'react-dom';

import _ from './index.css';

const Index = ()=>{
	return (
		<div>
			<h3 className={`${_.h3}`}>Hello, this is a test page.</h3>
			<img src={require('./images/12.jpg')}/>
		</div>
	)
}
ReactDOM.render(<Index/>, document.getElementById('index'));