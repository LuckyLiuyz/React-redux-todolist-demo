/**
 * @file Footer 组件
 * @description 
 */

import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';
export default class extends Component {
    render () {
        return (
            <p className="footer">
                Show:{" " }
                <FilterLink filter="SHOW_ALL">
                    All
               </FilterLink>
                { " | " }
                <FilterLink filter="SHOW_ACTIVE">
                    Active
               </FilterLink>
                { " | " }
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
               </FilterLink>
            </p>
        )
    }
} 