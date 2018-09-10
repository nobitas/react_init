import React from 'react';
import { Switch, Route } from 'react-router-dom';
// files
import Home from '../home/';
import About from '../about/';
import List from '../list/';

const Main = ()=>(
	<main>
		<Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/list' component={List}/>
    </Switch>
	</main>
)

export default Main;