import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from './index.css';


class PageName extends React.Component {
	render(){
		return(
		)
	}
}

PageName.propTypes = {
	test: PropTypes.string
}
function mapStateToProps({User}) {
	const { test = '' } = User;
  return {
    test
  }
}

export default connect(mapStateToProps)(PageName);