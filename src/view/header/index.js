import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>(
	<header>
		<nav>
			<ul>
				<li><Link to='/'>首页</Link></li>
				<li><Link to='/about'>关于</Link></li>
				<li><Link to='/list'>列表</Link></li>
				<li><Link to='/list/321'>列表2</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header;