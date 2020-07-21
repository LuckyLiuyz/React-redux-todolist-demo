/**
 * @file reducers 编写，用于createStore
 * @description 
 */


import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import testState from './testState';

/**
 * 随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。
 * combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
 * 合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。state 对象的结构由传入的多个 reducer 的 key 决定。
 * 通过为传入对象的 reducer 命名不同来控制 state key 的命名。
 * 例如，你可以调用 combineReducers({ todos: myTodosReducer, counter: myCounterReducer }) 将 state 结构变为 { todos, counter }
 * 如下: 最终生成的state的结构为：
 * {
 *   todos: [],
 *   visibilityFilter: 'SHOW_ALL',
 *   testState: 'initValue'
 * }
 */
const todoApp = combineReducers({
    todos,
    visibilityFilter,
    testState, // 测试 state 的生成原则
});

export default todoApp;


/**
 * @description 上面的写法，与下述写法等价
 * @param {*} state
 * @param {*} action
 */
// export default function todoApp (state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         testState: todos(state.testState, action),
//     }
// }