import React from 'react';
import {browserHistory, Router, Route, Link,IndexRoute,Redirect, IndexLink ,IndexRedirect} from 'react-router';
import Header from '../component/header';
import Home from '../component/home';
import Add from '../container/Add';
import Edit from '../container/Edit';
import List from '../container/List';

export default class RootRouters extends React.Component {
	render(){
		return (
        	<Router history = {browserHistory} >
                <Route path ="/" component={Header} >
                    <IndexRoute component={Home} />  
                    <Route path ='add' component={Add} />  
                    <Route path ='edit/:id' component={Edit} />  
                    <Route path ='list' component={List} />
                </Route>
            </Router>
		)
	}
}