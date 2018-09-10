import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// files
import Header from './header/';
import Main from './main/';

const App = () => (
	<section>
		<Header/>
		<Main/>
	</section>
)

export default App;