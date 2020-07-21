/**
 * @file 入口文件
 * @description 
 */

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import reducer from './reducers/index';
import './public/stylesheet/main';

const store = createStore(reducer);
store.subscribe(() =>
	console.log(store.getState())
);
console.log('getState', store.getState());

function App () {
	return (
		<div className="container">
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);
