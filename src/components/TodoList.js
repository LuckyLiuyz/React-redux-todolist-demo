/**
 * @file TodoList 组件
 * @description 
 */

import React, { Component } from 'react';
import Todo from './Todo';
export default class extends Component {
    render () {
        const { todos, onTodoClick, dleTodoClick } = this.props;
        return (
            <ul className="dodo-list">
                { todos.map(todo => {
                    return (
                        <Todo
                            key={ todo.id }
                            { ...todo }
                            onClick={ () => onTodoClick(todo.id) }
                            delClick={ () => dleTodoClick(todo.id) }
                        />)
                }
                ) }
            </ul>
        )
    }
}