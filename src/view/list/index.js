import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from './page1';
import Page2 from './page2';

const List = () => (
	<Switch>
		<Route exact path='/list' component={Page1}/>
		<Route exact path='/list/:number' component={Page2}/>
	</Switch>
)

export default List;




