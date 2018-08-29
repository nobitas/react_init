import React from 'react';
import ReactDOM from 'react-dom';
import 'vw-layout';

import _ from './index.css';

const Index = ()=>{
	return (
		<div>
			<h3 className={`${_.h3}`}>Hello, this is a test page.</h3>
			<img src={require('./images/12.jpg')}/>
			<p>32131</p>
		</div>
	)
}
ReactDOM.render(<Index/>, document.getElementById('content'));