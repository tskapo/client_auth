import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const headerItems = {
	true : [
		{route : "signout", name : "გასვლა"}
	],
	false : [
		{route : "signin", name : "შესვლა"},
		{route : "signup", name : "რეგისტრაცია"}
	]
};

class Header extends Component {
	renderLinks() {
		let jsx = null;
		if (this.props.authenticated) {
			jsx = (
				<li className="nav-item">
					<Link className="nav-link w3-right" to="/signout">გასვლა</Link>
				</li>
			);
		} else {
			jsx = [
				<li className="nav-item" key="signin">
					<Link className="nav-link" to="/signin">შესვლა</Link>
				</li>,
				<li className="nav-item" key="signup">
					<Link className="nav-link" to="/signup">რეგისტრაცია</Link>
				</li>]
			;
		}
		return jsx;
	}

	render() {
		return (
			<div className="w3-container">
				<nav className="navbar navbar-right">
					<Link to="/" className="navbar-brand">Redux Auth</Link>
					<ul className="nav navbar-nav">
						{this.renderLinks()}
					</ul>
				</nav>
			</div>
		);
	}
}

export default connect(state => ({authenticated: state.auth.authenticated}))(Header);