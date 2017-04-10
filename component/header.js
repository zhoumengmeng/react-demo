import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Icon} from 'antd';

export default class Header extends React.Component {
	render() {
		return (
			<div>
			<header className="header">
				<div className="laymid">
					<img src="../image/react.png" />
					<ul className="nav rFloat">
						<li><IndexLink to="/" activeClassName="active"><Icon type="appstore-o" />&nbsp;&nbsp;首页</IndexLink></li>
						<li><Link to="/add" activeClassName="active"><Icon type="user-add" />&nbsp;&nbsp;新增用户</Link></li>
						<li><Link to="/edit" activeClassName="active" disabled><Icon type="edit" />&nbsp;&nbsp;编辑用户</Link></li>
						<li><Link to="/list" activeClassName="active"><Icon type="bars" />&nbsp;&nbsp;用户列表</Link></li>
					</ul>
				</div>
			</header>
			<div className="laymid">
				<div className="mTop20 content">
					{this.props.children}
				</div>
			</div>
			</div>
		)
	}
}